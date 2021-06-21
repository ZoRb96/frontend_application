import React from 'react';
import firebase from "../firebase";
import { Button, Form, Table, Container, Col, Row, Card, Nav, NavItem, NavDropdown, MenuItem, Glyphicon } from 'react-bootstrap'
import { Link } from "react-router-dom";

function VIEWEmployee(props) {
  const db = firebase.firestore()
  const [empdetails, setEmpdetails] = React.useState([]);

  React.useEffect(() => {
    loadUser();
  }, [])

  const loadUser = async () => {
    const db = await firebase.firestore()
    db.collection("employeeDetails").onSnapshot(snapshot => {
      setEmpdetails(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
    })
  };

  const deleteUser = id => {
    db.collection("employeeDetails")
      .doc(id)
      .delete()
      .then(() => {
        console.log(id);
      })
      .catch(error => {
        console.log(error);
      });
  }

  return (
    <div className='viewEmployee'>
      <Container>
        <h1 className="mb-4">View Employee</h1>

        <Table striped bordered hover flex id="example" >
          <thead className="thead-dark">
            <tr>
              <th>Employee ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Contact No</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              empdetails.map((data) => (

                <tr>
                  <td>{data.employeeId}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.contactNo}</td>
                  <td>
                    <Row>
                      <Col sm={3}>
                        <Link
                          className="btn btn-outline-primary"
                          to={`/editEmployee/${data.id}`}
                        >
                          Edit
                        </Link>
                      </Col>
                      <Col sm={9}>
                        <button onClick={() => deleteUser(data.id)} className="btn btn-danger ml-2">Delete</button>
                      </Col>
                    </Row>
                  </td>

                </tr>
              )
              )}
          </tbody>
        </Table>

      </Container>
    </div>
  );
}

export default VIEWEmployee;
