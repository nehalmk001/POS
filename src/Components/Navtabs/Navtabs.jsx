import Nav from 'react-bootstrap/Nav';
import { FaHistory, FaShoppingCart } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function Navtabs() {
  const location = useLocation(); // To track the current location
  
  return (
    <Nav fill variant="tabs" activeKey={location.pathname}> {/* Dynamically set active tab */}
      <Nav.Item>
        <Nav.Link as={Link} to="/orders" eventKey="/orders" className={location.pathname=== '/orders'? 'custom-active':''}>
          <FaShoppingCart /> Orders
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link as={Link} to="/history" eventKey="/history" className={location.pathname === '/history' ? 'custom-active' :''}>
          <FaHistory /> History
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navtabs;
