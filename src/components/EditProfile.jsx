import React from 'react';
import { Container, Row, Col, Button, DropdownButton, Dropdown } from 'react-bootstrap';
import './EditProfile.css';

const EditProfile = () => {
  return (
    <div className="bg-dark text-white edit-profile-container">
      <Container fluid>
        <Row className="navbar">
          <a className="" href="./index.html">
            <img src="./assets/netflix_logo.png" alt="logo" width="150px" />
          </a>
        </Row>
      </Container>
      <Container>
        <div className="text-center">
          <h1>Edit Profile</h1>
        </div>
        <hr />
        <Row className="position-relative">
          <Col md={3}>
            <div className="profile-image">
              <img src="./assets/avatar.png" className="img-fluid" alt="Profile" />
              <div className="overlay-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="15px"
                  width="18px"
                  fill="white"
                  viewBox="0 0 512 512"
                >
                  <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                </svg>
              </div>
            </div>
          </Col>
          <Col md={9} className="mb-4">
            <Button variant="secondary" className="w-100 mb-3 px-5">
              Strive Student
            </Button>
            <h3 className="lead">Language:</h3>
            <DropdownButton
              variant="dark"
              title="English"
              id="dropdown-menu-dark"
              className="mb-3"
            >
              <Dropdown.Item href="#n">Italian</Dropdown.Item>
              <Dropdown.Item href="#n">Russian</Dropdown.Item>
              <Dropdown.Item href="#n">Spanish</Dropdown.Item>
            </DropdownButton>
            <hr />
            <div className="form-group">
              <p className="lead">Maturity Settings:</p>
              <Button variant="secondary" className="btn-block">
                ALL MATURITY RATINGS
              </Button>
            </div>
            <div>
              <p className="lead">
                Show titles of all maturity ratings for this profile.
              </p>
              <Button variant="outline-secondary" className="border border-secondary">
                EDIT
              </Button>
            </div>
            <hr />
            <div className="form-group">
              <p className="lead">Autoplay controls</p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked
                />
                <label className="form-check-label">
                  Autoplay next episode in a series on all devices.
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked
                />
                <label className="form-check-label">
                  Autoplay previews while browsing on all devices.
                </label>
              </div>
            </div>
          </Col>
          <hr />
          <Row className="w-100">
            <div className="d-flex justify-content-around">
              <Button variant="outline-secondary" className="border border-secondary rounded-0">
                SAVE
              </Button>
              <Button variant="outline-secondary" className="border border-secondary rounded-0">
                CANCEL
              </Button>
              <Button variant="outline-secondary" className="border border-secondary rounded-0 ms-3">
                DELETE PROFILE
              </Button>
            </div>
          </Row>
        </Row>
      </Container>
    </div>
  );
};

export default EditProfile;
