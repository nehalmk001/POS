import React, { useState } from 'react';
import Navtabs from '../../components/Navtabs/Navtabs';
import { IoIosAddCircle } from 'react-icons/io';
import { RiAlignItemBottomFill } from 'react-icons/ri';
import '../../css/additem.css';

const AddItempage = () => {

  const navtabslabels = [
    { label: "Item List", key: 'itemlist', path: '/itemlist', icon: <RiAlignItemBottomFill /> },
    { label: 'Add Item', key: 'additem', path: '/additem', icon: <IoIosAddCircle /> }
  ];

  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    category: 'Electronics', // Default value for select
    brand: '',
    price: '',
    image: null // Initialize as null or empty
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'image') {
      // If the input is a file input
      setFormData({
        ...formData,
        [name]: files[0] // Store the selected file object
      });
    } else {
      setFormData({
        ...formData,
        [name]: value // Update the value for other fields
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Display or further process the form data, including the image file
    console.log('Form submitted:', formData);
    alert('Form submitted:', formData);

    if (formData.image) {
      console.log('Image file:', formData.image.name); // Image file info
    }
  };

  return (
    <div className="main w-100 p-4" style={{ marginTop: '28px' }}>
      <Navtabs links={navtabslabels} />
      <form className='form-wrapper' onSubmit={handleSubmit}>
        <div className='row mb-4 form-body'>
          <div className='col-8 name-input'>
            <label>Product name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder='Enter the product name'
              onChange={handleChange}
            />
          </div>
          <div className='col-4 quantity-input'>
            <label>Quantity:</label>
            <input
              type="number"
              name='quantity'
              value={formData.quantity}
              placeholder='Enter the Quantity'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col category-input'>
            <label>Category:</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="Electronics">Electronics</option>
              <option value="Home Appliance">Home Appliance</option>
              <option value="Groceries">Groceries</option>
            </select>
          </div>
          <div className='col brand-input'>
            <label>Brand:</label>
            <input
              name="brand"
              value={formData.brand}
              type="text"
              placeholder='Enter the Brand'
              pattern="[A-Z]*"
              title="Only uppercase letters are allowed"
              onChange={handleChange}
            />
          </div>
          <div className='col price-input'>
            <label>Price:</label>
            <input
              name="price"
              value={formData.price}
              type="number"
              placeholder='Enter the Price'
              onChange={handleChange}
            />
          </div>
          <div className='col image-input'>
            <label>Product image:</label>
            <input
              name="image"
              type="file"
              accept="image/*"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='submit text-center'>
          <button type="submit" className='add-items-btn'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddItempage;
