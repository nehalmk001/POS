import Dropdown from 'react-bootstrap/Dropdown';

function Dropdowns({ category, onSelectCategory, title }) {
  
   
    
    
    return (
        <Dropdown className='drops'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {title}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {category.map((e, index) => (
                    <Dropdown.Item key={index} onClick={() => onSelectCategory(e.value)}>
                        {e.label}
                    </Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Dropdowns;
