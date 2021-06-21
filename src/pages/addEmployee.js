import React from "react";
import { Button, Form, Container, Col, Row, Card, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
import firebase from "../firebase";
import validate from './validate';

function ADDEmployee(props) {

  const [empdetails, setEmpdetails] = React.useState({
    contactNo: '',
    email: '',
    employeeId: '',
    firstname: '',
    lastname: ''
  });
  const [errors, setErrors] = React.useState({});

  const { firstname, lastname, email, contactNo } = empdetails;
  const onInputChange = e => {
    setEmpdetails({ ...empdetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate(empdetails);
    const noErrors = Object.keys(validationErrors).length === 0;
    setErrors(validationErrors);
    if (noErrors) {
      console.log("Authenticated", empdetails);
      var RandomNumber = Math.floor(Math.random() * 100) + 1;

      const db = firebase.firestore()
      db.collection("employeeDetails")
        .add({
          firstName: firstname,
          lastName: lastname,
          contactNo: contactNo,
          email: email,
          employeeId: 'e' + RandomNumber,
        })
        .then(() => {
          alert(firstname + " " + lastname + " is added as the new employee to you organization");
        })
        .catch((error) => {
          alert(error.message);
        });

      setEmpdetails({
        contactNo: '',
        email: '',
        employeeId: '',
        firstname: '',
        lastname: ''
      });

    } else {
      console.log("errors try again", validationErrors);
    }


  };

  return (
    <div className='addEmployee'>
      <Container>
        <h1 className="mb-4">Add Employee</h1>
        <Card className="shadow">
          <Form className="form" onSubmit={handleSubmit}>
            <Card.Body>
              <Form.Group as={Row} controlId="formFirstName" className="mt-3 p-3">
                <Form.Label column md={2}>First Name</Form.Label>
                <Col md={10}>
                  <Row>
                    <Form.Control type="text" placeholder="Enter First Name" name="firstname" value={firstname} onChange={onInputChange} />
                  </Row>
                  <Row>
                    {errors.firstname && <p>Please enter a valid name</p>}
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formLastName" className="p-3">
                <Form.Label column md={2}>Last Name</Form.Label>
                <Col md={10}>
                  <Row>
                    <Form.Control type="text" placeholder="Enter Last Name" name="lastname"
                      value={lastname} onChange={onInputChange} />
                  </Row>
                  <Row>
                    {errors.lastname && <p>Please enter a valid name</p>}
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formContactNo" className="p-3">
                <Form.Label column md={2}>Contact No</Form.Label>
                <Col md={10}>
                  <Row>
                    <Form.Control type="tel" placeholder="Enter Contact Number" name="contactNo"
                      value={contactNo} onChange={onInputChange} />
                  </Row>
                  <Row>
                    {errors.contactNo && <p>Please enter a valid contact number</p>}
                  </Row>
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId="formEmail" className="p-3">
                <Form.Label column md={2}>Email address</Form.Label>
                <Col md={10}>
                  <Row>
                    <Form.Control type="email" placeholder="Enter email" name="email"
                      value={email} onChange={onInputChange} />
                  </Row>
                  <Row>
                    {errors.email && <p>Email error</p>}
                  </Row>
                </Col>

              </Form.Group>
            </Card.Body>

            <div class="card-footer text-center">
              <Button variant="success" type="submit" className="mb-2 mt-2">
                Submit
              </Button>
            </div>

          </Form>
        </Card>
      </Container>
    </div >
  );
}

export default ADDEmployee;
