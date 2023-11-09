import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function CustomNav() {
  return (
    <Navbar expand="lg" className="bg-body-secondary">
      <Container>
        <Navbar.Brand href="#home" >Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Link to="/restaurant" className='text-decoration-none text-secondary'>Restaurant</Link>
            <Link to="/products" className='text-decoration-none ms-5 text-secondary'>Products</Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNav;