import React, { useState,useEffect } from 'react'

import Dropdowns from '../../Components/Dropdown/Dropdown'
import Table from '../../Components/Table/Table'
import { IoIosAddCircle, IoIosSearch, IoMdClose } from 'react-icons/io'
import '../../css/ItemList.css'
import { MdDeleteOutline } from 'react-icons/md'
import { FaFilter, FaRegEdit } from 'react-icons/fa'
import { RiAlignItemBottomFill } from 'react-icons/ri'
import Navtabs from '../../components/Navtabs/Navtabs'
import data from '../../assets/datas/data.json'

const ItemList = () => {

  
  useEffect(() => {
    // Initialize all tooltips on the page
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
     tooltipTriggerList.forEach(function (tooltipTriggerEl) {
      new window.bootstrap.Tooltip(tooltipTriggerEl);
    });
  }, []);


  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Sort By');

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen); // Toggle the dropdown state
  };



  const navtabslabels = [
    { label: "Item List", key: 'itemlist', path: '/itemlist', icon:<RiAlignItemBottomFill /> },
        { label: 'Add Item', key: 'additem', path: '/additem',icon:<IoIosAddCircle /> }
  ];


  const headers = [
    { label: 'ID', key: 'id', width: '100px' },
    { label: 'Image', key: 'imageUrl', width: '1fr', render: (imageUrl) => <img src={imageUrl} alt="Product" style={{ width: '50px', height: '50px' }} /> },
    { label: 'Product', key: 'name', width: '1fr' },
    { label: 'Category', key: 'category', width: '1fr' },
    { label: 'Quantity', key: 'quantity', width: '1fr' },
    { label: 'Brand', key: 'brand', width: '1fr' },
    { label: 'Price', key: 'price', width: '100px', render: (price) => `$${price.toFixed(2)}` },
    { 
      label: 'Action', 
      key: 'action', 
      width: '1fr', 
      render: (row) => (
        <div className='d-flex '>
          <div className='btn-action' onClick={() => handleEdit(row.id)} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Edit"><FaRegEdit /></div>
          <div  className='btn-action' onClick={() => handleDelete(row.id)} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Delete"><MdDeleteOutline /></div>
        </div>
      ) 
    }
  ];
  
  
  


    // search fuction

    const [searchTerm, setsearchTerm] = useState('');
    const dropdownCategories = [
      { label: 'All', value: 'All' },
      { label: 'Electronics', value: 'Electronics' },
      { label: 'Groceries', value: 'Groceries' },
      { label: 'Home Appliance', value: 'Home Appliance' }
  ];
   
  const [selectedCategory, setselectedCategory] = useState('')

  const handleSelectCategory = (category) => {
    console.log("Selected Category:", category); // Log selected category
    setselectedCategory(category);
    setSelectedSort(category); // Update title here if needed
};

  const filtereddata = data.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === 'All' || selectedCategory === '' || item.category === selectedCategory)
  );
  

    
  return (
   
      <div className="main w-100 p-4" style={{marginTop:'42px'}}>
        <Navtabs links={navtabslabels} />
          <div className="search-box d-flex align-items-start">
            <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Quick Search"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
              />
              <div className="search-icon"><IoIosSearch size={20} /></div>
            </div>

           <div className='sort-div ms-2'>  <Dropdowns category={dropdownCategories} onSelectCategory={handleSelectCategory} title={<FaFilter />} /></div>
          </div>
          <div className="table-wrapper">
            <Table headers={headers} data={filtereddata} />
          </div>
        </div>
   
  )
}

export default ItemList