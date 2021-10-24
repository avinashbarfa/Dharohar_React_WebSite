import {Col, Container, Nav, Navbar, NavDropdown, Row, Stack} from "react-bootstrap";


const Header = () => {

    const navigationMenu = (
        <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
        >
            <Stack direction={"horizontal"} gap={3}>
            <Nav.Link href="#action1">Home</Nav.Link>
                <div className="vr" />
                <NavDropdown title="Textile" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Saree</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Suites</NavDropdown.Item>
                </NavDropdown>
                <div className="vr" />
                <NavDropdown title="Printing" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Books</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Dairies</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">Calendar</NavDropdown.Item>
                </NavDropdown>
                <div className="vr" />
                <Nav.Link href={""}>Spices</Nav.Link>
            </Stack>

        </Nav>
    );

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Row>
                <Col>
                    <Navbar.Brand href="#">Dharohar</Navbar.Brand>
                </Col>
                </Row>
                <Row>
                    <Col>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                {navigationMenu}
            </Navbar.Collapse>
                    </Col>
                </Row>
            </Container>
        </Navbar>
    )
}

export default Header;
