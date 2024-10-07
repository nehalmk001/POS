import Nav from 'react-bootstrap/Nav';
import { FaHistory, FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Navtabs({links}) {
  console.log(links);
  
  const location = useLocation(); // To track the current location
  
  return (
    <Nav className='navs-tabs'justify style={{width:'50%'}}  variant="tabs" activeKey={location.pathname}> {/* Dynamically set active tab */}
    {links.map((e=>(
      <Nav.Item key={e.key}>
        <Nav.Link as={Link} to={e.path} eventKey={e.path} className={location.pathname=== e.path ? 'custom-active':''}>
          {e.icon} {e.label}
        </Nav.Link>
      </Nav.Item>
      )))}
    </Nav>
  );
}

export default Navtabs;

