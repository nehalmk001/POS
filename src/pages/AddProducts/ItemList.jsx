import React, { useState,useEffect } from 'react'

import Dropdowns from '../../Components/Dropdown/Dropdown'
import Table from '../../Components/Table/Table'
import { IoIosAddCircle, IoIosSearch, IoMdClose } from 'react-icons/io'
import '../../css/addProducts.css'
import { MdDeleteOutline } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { RiAlignItemBottomFill } from 'react-icons/ri'
import Navtabs from '../../components/Navtabs/Navtabs'

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
        <div className='d-flex justify-content-center'>
          <div className='btn-action' onClick={() => handleEdit(row.id)} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Edit"><FaRegEdit /></div>
          <div  className='btn-action' onClick={() => handleDelete(row.id)} data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Delete"><MdDeleteOutline /></div>
        </div>
      ) 
    }
  ];
  
  const data = [
    {
      id: '001',
      name: 'Laptop',
      category: 'Electronics',
      quantity: 10,
      brand: 'Apple',
      price: 1200,
      imageUrl: 'https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: '002',
      name: 'Smartphone',
      category: 'Electronics',
      quantity: 20,
      brand: 'Samsung',
      price: 800,
      imageUrl: 'https://img.global.news.samsung.com/in/wp-content/uploads/2022/03/SM-A536_Galaxy-A53-5G_Awesome-Peach_Front.jpg'
    },
    {
      id: '003',
      name: 'Tablet',
      category: 'Electronics',
      quantity: 30,
      brand: 'Google',
      price: 400,
      imageUrl: 'https://images-cdn.ubuy.co.in/633b593b89c5453959017fec-google-pixel-slate-12-3-quot.jpg'
    },
    {
      id: '004',
      name: 'Basmati Rice',
      category: 'Groceries',
      quantity: 50,
      brand: 'india gate',
      price: 30,
      imageUrl: 'https://m.media-amazon.com/images/I/91MZComV1xL.jpg'
    },
    {
      id: '005',
      name: 'Milk',
      category: 'Groceries',
      quantity: 40,
      brand: 'milma',
      price: 20,
      imageUrl: 'https://homedelivery.ramachandran.in/media/catalog/product/cache/04c5c5c4276fe9dba74400abc896c29c/m/i/milma.jpg'
    },
    {
      id: '006',
      name: 'Microwave Oven',
      category: 'Home Appliance',
      quantity: 5,
      brand: 'LG',
      price: 300,
      imageUrl: 'https://images.jdmagicbox.com/quickquotes/images_main/lg-microwave-oven-2-12-2022-024-272327279-7ls2ynt0.jpg'
    },
    {
      id: '007',
      name: 'Vacuum Cleaner',
      category: 'Home Appliance',
      quantity: 7,
      brand: 'Dyson',
      price: 500,
      imageUrl: 'https://www.jiomart.com/images/product/original/rvmyn14rtm/inalsa-spruce-1200-w-vacuum-cleaner-with-blower-function-and-reusable-dust-bag-red-product-images-orvmyn14rtm-p598712841-0-202302231843.jpg?im=Resize=(420,420)'
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
   
      <div className="main w-100 p-4" style={{marginTop:'28px'}}>
        <Navtabs links={navtabslabels} />
          <div className="search-box d-flex align-items-start">
            <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search your Products"
                value={searchTerm}
                onChange={(e)=>setsearchTerm(e.target.value)}
              />
              <div className="search-icon"><IoIosSearch size={20} /></div>
            </div>

           <div className='sort-div ms-2'>  <Dropdowns category={dropdownCategories} onSelectCategory={handleSelectCategory} title={selectedSort} /></div>
          </div>
          <div className="table-wrapper">
            <Table headers={headers} data={filtereddata} />
          </div>
        </div>
   
  )
}

export default ItemList