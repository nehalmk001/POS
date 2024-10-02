import Nav from 'react-bootstrap/Nav';
import { FaCalculator, FaHistory, FaHome, FaShoppingCart } from 'react-icons/fa';

function Navtabs() {
  return (
    <Nav fill variant="tabs" defaultActiveKey="/orders">
      <Nav.Item>
        <Nav.Link href="/orders"><FaShoppingCart /> Orders</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/history" eventKey="/history"><FaHistory />History</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="/calculator"><FaCalculator /> calculator</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/"><FaHome /> Home</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navtabs;