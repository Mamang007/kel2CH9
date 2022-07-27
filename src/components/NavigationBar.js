import { Navbar, Container, Nav } from 'react-bootstrap';

function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Game Start</Navbar.Brand>
        <Nav className="justify-content-end" activeKey="/home">
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Register</Nav.Link>
      </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigationBar;