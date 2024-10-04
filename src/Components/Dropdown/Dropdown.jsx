import Dropdown from 'react-bootstrap/Dropdown';

function Dropdowns({category,onselectCategory}) {
    console.log(category);
    
  return (
    <Dropdown>
   {category.map((e, index) => (
  <Dropdown key={index}>
    <Dropdown.Toggle variant="success" id="dropdown-basic">
     {e.name}
    </Dropdown.Toggle>

    <Dropdown.Menu>
    <Dropdown.Item onClick={()=>onselectCategory(e.cat0)} >{e.cat0}</Dropdown.Item>
      <Dropdown.Item onClick={()=>onselectCategory(e.cat1)} >{e.cat1}</Dropdown.Item>
      <Dropdown.Item onClick={()=>onselectCategory(e.cat2)}>{e.cat2}</Dropdown.Item>
      <Dropdown.Item onClick={()=>onselectCategory(e.cat3)}>{e.cat3}</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
))}
    </Dropdown>
  );
}

export default Dropdowns;