import React, { useState } from 'react';
import AnimatedPage from '../components/AnimatedPage';
import '../styles/App.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function Sell({ setCurrentScreen }) {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    mileage: '',
    condition: 'Excellent',
    transmission: 'Automatic',
    fuelType: 'Gasoline',
    exteriorColor: '',
    interiorColor: '',
    price: '',
    vin: '',
    location: '',
    description: '',
    features: '',
    images: []
  });

  const [imagePreviews, setImagePreviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    const newImages = [...formData.images, ...files];
    setFormData({...formData, images: newImages});

    const previews = files.map(file => URL.createObjectURL(file));
    setImagePreviews([...imagePreviews, ...previews]);
  };

  const removeImage = (index) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    const newPreviews = imagePreviews.filter((_, i) => i !== index);
    setFormData({...formData, images: newImages});
    setImagePreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Step 1: Upload image file to backend if one was selected
    let imageUrl = '';
    if (formData.images.length > 0) {
      try {
        const imageFormData = new FormData();
        imageFormData.append('image', formData.images[0]);
        const uploadRes = await fetch(`${API_URL}/api/upload`, {
          method: 'POST',
          body: imageFormData
        });
        const uploadData = await uploadRes.json();
        if (uploadData.success) {
          imageUrl = uploadData.imageUrl;
        } else {
          setError('Image upload failed: ' + uploadData.message);
          setLoading(false);
          return;
        }
      } catch (err) {
        setError('❌ Image upload error. Make sure the backend is running.');
        console.error('Image upload error:', err);
        setLoading(false);
        return;
      }
    }

    // Step 2: Prepare car data with the uploaded image URL
    const carData = {
      make: formData.make,
      model: formData.model,
      year: Number(formData.year),
      mileage: formData.mileage,
      condition: formData.condition,
      transmission: formData.transmission,
      fuelType: formData.fuelType,
      exteriorColor: formData.exteriorColor,
      interiorColor: formData.interiorColor,
      price: Number(formData.price),
      vin: formData.vin,
      location: formData.location,
      description: formData.description,
      features: formData.features,
      image: imageUrl
    };

    try {
      const response = await fetch(`${API_URL}/api/sell-car`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(carData)
      });

      const data = await response.json();

      if (data.success) {
        alert('🎉 Success! ' + data.message);
        setCurrentScreen('home');
      } else {
        setError(data.message || 'Failed to submit vehicle listing details.');
      }
    } catch (err) {
      setError('❌ Network Error! Please make sure your backend server is running on port 5000.');
      console.error('Error submitting car:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatedPage>
    <div className="sell-screen">
      <div className="sell-container">
        <h1>Sell Your Car</h1>
        <p className="sell-subtitle">Get the best offer for your vehicle in 24 hours</p>
        
        <form className="sell-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Make *</label>
                <input 
                  type="text" 
                  placeholder="e.g., BMW, Mercedes, Tesla"
                  value={formData.make}
                  onChange={(e) => setFormData({...formData, make: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Model *</label>
                <input 
                  type="text" 
                  placeholder="e.g., M4, S-Class, Model S"
                  value={formData.model}
                  onChange={(e) => setFormData({...formData, model: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Year *</label>
                <input 
                  type="number" 
                  placeholder="2023"
                  min="1900"
                  max="2025"
                  value={formData.year}
                  onChange={(e) => setFormData({...formData, year: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Mileage *</label>
                <input 
                  type="text" 
                  placeholder="e.g., 10,000 mi"
                  value={formData.mileage}
                  onChange={(e) => setFormData({...formData, mileage: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Asking Price ($) *</label>
                <input 
                  type="number" 
                  placeholder="e.g., 50000"
                  min="0"
                  value={formData.price}
                  onChange={(e) => setFormData({...formData, price: e.target.value})}
                  required
                />
              </div>
              
              <div className="form-group">
                <label>VIN Number</label>
                <input 
                  type="text" 
                  placeholder="17-character VIN"
                  maxLength="17"
                  value={formData.vin}
                  onChange={(e) => setFormData({...formData, vin: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Vehicle Details</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Condition</label>
                <select 
                  value={formData.condition}
                  onChange={(e) => setFormData({...formData, condition: e.target.value})}
                >
                  <option>Excellent</option>
                  <option>Very Good</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Transmission</label>
                <select 
                  value={formData.transmission}
                  onChange={(e) => setFormData({...formData, transmission: e.target.value})}
                >
                  <option>Automatic</option>
                  <option>Manual</option>
                  <option>Semi-Automatic</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Fuel Type</label>
                <select 
                  value={formData.fuelType}
                  onChange={(e) => setFormData({...formData, fuelType: e.target.value})}
                >
                  <option>Gasoline</option>
                  <option>Diesel</option>
                  <option>Electric</option>
                  <option>Hybrid</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Location *</label>
                <input 
                  type="text" 
                  placeholder="City, State"
                  value={formData.location}
                  onChange={(e) => setFormData({...formData, location: e.target.value})}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Exterior Color</label>
                <input 
                  type="text" 
                  placeholder="e.g., Midnight Black"
                  value={formData.exteriorColor}
                  onChange={(e) => setFormData({...formData, exteriorColor: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Interior Color</label>
                <input 
                  type="text" 
                  placeholder="e.g., Beige Leather"
                  value={formData.interiorColor}
                  onChange={(e) => setFormData({...formData, interiorColor: e.target.value})}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Key Features (comma separated)</label>
              <input 
                type="text" 
                placeholder="e.g., Sunroof, Navigation, Heated Seats"
                value={formData.features}
                onChange={(e) => setFormData({...formData, features: e.target.value})}
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Description</h3>
            <div className="form-group">
              <textarea 
                rows="5" 
                placeholder="Tell us more about your car's condition, history, and any special features..."
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              ></textarea>
            </div>
          </div>

          <div className="form-section">
            <h3>Photos</h3>
            <div className="form-group">
              <label>Upload up to 10 photos</label>
              <div className="upload-area">
                <input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleImageUpload}
                  id="image-upload"
                  style={{ display: 'none' }}
                />
                <label htmlFor="image-upload" className="upload-label">
                  <span>📸</span>
                  <p>Click to upload photos</p>
                  <small>Supported: JPG, PNG (Max 10MB each)</small>
                </label>
              </div>
              
              {imagePreviews.length > 0 && (
                <div className="image-previews">
                  {imagePreviews.map((preview, index) => (
                    <div key={index} className="preview-item">
                      <img src={preview} alt={`Preview ${index + 1}`} />
                      <button type="button" className="remove-image" onClick={() => removeImage(index)}>×</button>
                    </div>
                  ))}
                </div>
              )}
              <small className="image-count">{formData.images.length} photos selected (max 10)</small>
            </div>
          </div>

          {error && (
            <div className="form-message error" style={{ color: '#ff4d4d', marginBottom: '20px', fontWeight: 'bold', fontSize: '15px' }}>
              {error}
            </div>
          )}

          <div className="form-actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? 'Submitting...' : 'Submit Listing'}
            </button>
            <button type="button" className="btn-secondary" onClick={() => setCurrentScreen('home')} disabled={loading}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
    </AnimatedPage>
  );
}

export default Sell;