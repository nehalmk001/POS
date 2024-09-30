import Nav from 'react-bootstrap/Nav';

function Navlink({link,defaultActiveKey}) {
  return (
    <Nav defaultActiveKey="/orders" as="ul">
       {link.map((link,index)=>(
      <Nav.Item as="li" key={index} className='nav-tab-link'>
        <Nav.Link href={link.href} eventKey={link.eventkey} className='nav-tab-link'>{link.label}</Nav.Link>
      </Nav.Item>
       ))}
    </Nav>
  );
}

export default Navlink;