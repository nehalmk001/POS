import React from 'react'
import Navtabs from '../../components/Navtabs/Navtabs'
import { IoIosAddCircle, IoIosSearch } from 'react-icons/io';
import { RiAlignItemBottomFill } from 'react-icons/ri';
import '../../css/additem.css'

const AddItempage = () => {

    const navtabslabels = [
        { label: "Item List", key: 'itemlist', path: '/itemlist', icon:<RiAlignItemBottomFill /> },
        { label: 'Add Item', key: 'additem', path: '/additem',icon:<IoIosAddCircle /> }
      ];
  return (
    <div className="main w-100 p-4" style={{marginTop:'28px'}}>
    <Navtabs links={navtabslabels} />
    <div className='form-wrapper'>
<div className='row mb-4 form-body'>
    <div className='col-8 name-input'>
        <label>Product name:</label>
        <input type="text" name="name" placeholder='Enter the products name'></input>
    </div>
    <div className='col-4 quantity-input '>
        <label>Quantity:</label>
        <input type="number" name='quantity' placeholder='Enter the Quantity' ></input>
    </div>
    </div>
    <div className='row '>
    <div className='col category-input'>
        <label>Category:</label>
        <select>
            <option value="Electronics">Electronics</option>
            <option value="Home Appliance">Home Appliance</option>
            <option>Groceries</option>
        </select>
    </div>
    <div className='col brand-input'>
        <label>Brand:</label>
        <input type="text" placeholder='Enter the Brand' pattern="[A-Z]*" title="Only uppercase letters are allowed"></input>
    </div>
    <div className='col price-input'>
        <label>Price:</label>
        <input type="number" placeholder='Enter the Price' ></input>
    </div>
    <div className='submit text-center'>
        <button className='add-items-btn'>Add </button>
    </div>
    </div>

    </div>
    </div>
  )
}

export default AddItempage