/* eslint-disable no-undef */
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const multer = require('multer');
const fs = require('fs');

// 1. Initialize Config (Looks for .env file inside backend root)
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

// 2. Middleware
app.use(cors());
app.use(express.json());

// Serve uploaded images as static files
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
app.use('/uploads', express.static(uploadsDir));

// Multer config: save files to backend/uploads/ with original extension
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadsDir),
    filename: (req, file, cb) => {
        const uniqueName = `${Date.now()}-${Math.round(Math.random() * 1e9)}${path.extname(file.originalname)}`;
        cb(null, uniqueName);
    }
});
const upload = multer({
    storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB max
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) cb(null, true);
        else cb(new Error('Only image files are allowed'), false);
    }
});

// ==========================================
// 3. MongoDB Schemas & Models
// ==========================================

// --- Contact Schema ---
const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    phone: { type: String, required: true, trim: true },
    message: { type: String, required: true, trim: true },
    createdAt: { type: Date, default: Date.now }
});

const Contact = mongoose.model('Contact', contactSchema);

// --- Sell Car Schema ---
const carSchema = new mongoose.Schema({
    make: { type: String, required: true, trim: true },
    model: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    mileage: { type: String, required: true, trim: true },
    condition: { type: String, default: 'Excellent' },
    transmission: { type: String, default: 'Automatic' },
    fuelType: { type: String, default: 'Gasoline' },
    exteriorColor: { type: String, trim: true },
    interiorColor: { type: String, trim: true },
    price: { type: Number, required: true },
    vin: { type: String, trim: true },
    location: { type: String, required: true, trim: true },
    description: { type: String, trim: true },
    features: { type: String, trim: true },
    image: { type: String, trim: true },
    createdAt: { type: Date, default: Date.now }
});

const Car = mongoose.model('Car', carSchema);


// ==========================================
// 4. API Routes
// ==========================================

// ------------------------------------------
// IMAGE UPLOAD ROUTE
// ------------------------------------------

// POST - Upload a single car image, returns its accessible URL
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: 'No image file provided.' });
    }
    const imageUrl = `http://localhost:${PORT}/uploads/${req.file.filename}`;
    res.json({ success: true, imageUrl });
});

// ------------------------------------------
// CONTACT US API ROUTES
// ------------------------------------------

// POST - Submit Contact Form
app.post('/api/contact', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, message } = req.body;
        
        if (!firstName || !lastName || !email || !phone || !message) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }
        
        const newContact = new Contact({ firstName, lastName, email, phone, message });
        await newContact.save();
        
        res.status(201).json({ success: true, message: 'Thank you! We will contact you soon.' });
    } catch (error) {
        console.error('Error in contact:', error);
        res.status(500).json({ success: false, message: 'Server error. Please try again.' });
    }
});

// GET - All Contacts
app.get('/api/contacts', async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        res.json({ success: true, data: contacts });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching contacts' });
    }
});

// DELETE - Delete Contact
app.delete('/api/contact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!id.match(/^[0-9a-fA-F]{24}$/)) {
            return res.status(400).json({ success: false, message: 'Invalid ID format' });
        }
        
        const deletedContact = await Contact.findByIdAndDelete(id);
        if (!deletedContact) {
            return res.status(404).json({ success: false, message: 'Contact not found' });
        }
        
        res.json({ success: true, message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting contact' });
    }
});


// ------------------------------------------
// SELL CAR API ROUTES
// ------------------------------------------

// POST - Submit Car Listing
app.post('/api/sell-car', async (req, res) => {
    try {
        const {
            make, model, year, mileage, condition, transmission,
            fuelType, exteriorColor, interiorColor, price, vin,
            location, description, features, image
        } = req.body;

        if (!make || !model || !year || !mileage || !price || !location) {
            return res.status(400).json({ 
                success: false, 
                message: 'Required basic fields are missing (Make, Model, Year, Mileage, Price, Location)' 
            });
        }

        const newCar = new Car({
            make,
            model,
            year: Number(year),
            mileage,
            condition,
            transmission,
            fuelType,
            exteriorColor,
            interiorColor,
            price: Number(price),
            vin,
            location,
            description,
            features,
            image
        });

        await newCar.save();
        res.status(201).json({ success: true, message: 'Car listing submitted successfully!' });

    } catch (error) {
        console.error('Error saving car listing:', error);
        res.status(500).json({ success: false, message: 'Server error while saving car details.' });
    }
});

// GET - Get All Listed Cars
app.get('/api/cars', async (req, res) => {
    try {
        const cars = await Car.find().sort({ createdAt: -1 });
        res.json({ success: true, data: cars });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching cars data' });
    }
});


// ==========================================
// 5. Database Connection & Server Start
// ==========================================
const startServer = async () => {
    try {
        const dbURI = process.env.MONGODB_URI;
        
        if (!dbURI) {
            console.error('\n❌ ERROR: MONGODB_URI is not defined in your backend/.env file!');
            process.exit(1);
        }
        
        await mongoose.connect(dbURI);
        console.log('✅ MongoDB Connected Successfully to Atlas Cloud Cluster!');
        
        app.listen(PORT, () => {
            console.log(`🚀 Server running on http://localhost:${PORT}`);
            console.log(`📝 Contact API: http://localhost:${PORT}/api/contact`);
            console.log(`🚗 Sell Car API: http://localhost:${PORT}/api/sell-car`);
        });
    } catch (err) {
        console.error('❌ Server Initialization Failed:', err.message);
        process.exit(1);
    }
};

startServer();