import { Nav, Navbar } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { LinkContainer } from "react-router-bootstrap";
import footballImage from "./image/Inazuma3.png";


export default function NavBar() {
  




 

  const links = [
    {
      to: "",
      title: "Home"
    },
    {
      to: "players",
      title: "Players"
    },
    {
      to: "teams",
      title: "Teams"
    }
  ];

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <LinkContainer to="/" style={{ cursor: 'pointer' }}>
          <Navbar.Brand className="fs-2">
            <img src={footballImage} alt="Inazuma" className="navbar-logo" />
          </Navbar.Brand>
        </LinkContainer>

        <Nav className="me-auto fs-4">
          {links.map((link) => (
            <LinkContainer to={`/${link.to}`} key={link.to}>
              <Nav.Link>{link.title}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>

      
       
      </Container>
    </Navbar>
  );
}
