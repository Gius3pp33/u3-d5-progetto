import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from 'react-bootstrap';


function MyNavbar({ setPage }) {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Navbar bg="dark" variant="dark" expand="xl" className="container-fluid">
     
      {!isEditing && (
        <Navbar.Brand href="#" onClick={() => setPage('home')}>
          <img src="./assets/netflix_logo.png" alt="logo" width="150px"/>
        </Navbar.Brand>
      )}
      
    
      {!isEditing ? (
        <>
          <Navbar.Toggle aria-controls="navbarNav" />
          <Navbar.Collapse id="navbarNav">
            <Nav className="mr-auto">
              <Nav.Link href="#" onClick={() => setPage('home')}>Home</Nav.Link>
              <Nav.Link href="#">Tv Shows</Nav.Link>
              <Nav.Link href="#">Movies</Nav.Link>
              <Nav.Link href="#">Recently Added</Nav.Link>
              <Nav.Link href="#">My List</Nav.Link>
            </Nav>
            <Form className="d-flex ms-auto">
              <Button variant="link" className="text-white" aria-label="Search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  fill="grey"
                  className="bi bi-search mb-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"
                  />
                </svg>
              </Button>
            </Form>
            <Nav>
              <Nav.Link href="#">KIDS</Nav.Link>
              <Nav.Link href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  fill="currentColor"
                  className="bi bi-bell-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901"
                  />
                </svg>
              </Nav.Link>
              <NavDropdown
                title={
                  <img src="./assets/kids_icon.png" alt="Profile" className="rounded-circle " width="30" />
                }
                id="collasible-nav-dropdown"
                menuVariant="dark"
                className="custom-dropdown"
                drop="start"
              >
                <NavDropdown.Item href="#" onClick={() => { setPage('edit-profile'); setIsEditing(true); }}>Edit</NavDropdown.Item>
                <NavDropdown.Item href="#">Exit</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </>
      ) : null}
    </Navbar>
  );
}

export default MyNavbar;
