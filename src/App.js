import './App.css';
import {ListGroup, Form, Card} from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import employee from './employee.json';
import React, {useEffect, useState} from "react";


function App() {
  
  const [name, setName] = useState("");
  let [employeeData, setEmployeeData] = useState([]);
  
  useEffect(() => {
    let temp=employee.filter((e)=>
      e.name === name
    )
    setEmployeeData(temp);
      
  }, [name]);

  useEffect(()=>{
    setEmployeeData(employee)
  },[]);

  const handleSubmit = e => {
    e.preventDefault();
    setName(e.target.value);
  };

  
  const sortArray = type => {
    console.log(type.target.value);
    
    let sorted;
    switch (type.target.value) {
      case "name":
        sorted = [...employeeData].sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "occupation":
        sorted = [...employeeData].sort((a, b) => a.occupation.localeCompare(b.occupation));
        break;
      default:
        break;
    }
    setEmployeeData(sorted);
   
  };

  return (
    <div className="App">
      <h2>Employee Directory</h2><br />
      <Container>
      <Row>
        <Col md={5}>
          <Form >
            <Form.Group>
              <Form.Control 
              value={name}
              type="text" 
              placeholder="Search by employee name "
              name="name"
              onChange={(e)=>handleSubmit(e)} 
              />
            </Form.Group>
          </Form>
        </Col>
        <Col md={{ span: 5, offset: 2 }}>
          <select onChange={(e)=>{sortArray(e)}}>
            <option >Sort By</option>
            <option  value="name">Name</option>
            <option  value="occupation">Occupation</option>
          </select>
        </Col>
      </Row>
      <Row>
        {console.log(employeeData)}
        {employeeData.map((employee, i) => (
          <Card key={i} style={{ width: '14rem' }}>
            <div className="img-container">
              <Card.Img variant="top" src={employee.image} />
            </div>
              <ListGroup className="content" variant="flush">
                <ListGroup.Item>Name: {employee.name}</ListGroup.Item>
                <ListGroup.Item>{employee.occupation}</ListGroup.Item>
              </ListGroup>
          </Card>
          ))}
      </Row>
      </Container>
      </div>
  );
}

export default App;
