const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path');

// Initialize environment variables
dotenv.config({ path: path.join(__dirname, '.env') });

const uri = process.env.MONGODB_URI;

if (!uri) {
    console.error('❌ ERROR: MONGODB_URI is not defined in backend/.env file!');
    process.exit(1);
}

console.log('Testing connection...');
console.log('Using connection string from environment...');

mongoose.connect(uri)
    .then(() => {
        console.log('✅ SUCCESS! Connection to Atlas working perfectly!');
        process.exit(0);
    })
    .catch((err) => {
        console.error('❌ FAILED!');
        console.error('Error:', err.message);
        process.exit(1);
    });