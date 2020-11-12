import './App.css';
import {Card} from "react-bootstrap";
import {ListGroup, Form} from "react-bootstrap";
import employee from './employee.json';
import React, {useEffect, useState} from "react";


function App() {
  
  const [name, setName] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const [sortedEmployee, setsortedEmployee] = useState([])

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

  useEffect(() => {
    const _sortedEmployee = [...rows].sort((a, b) => a.time - b.time); // as sort mutates the array, thats why created new array through spread operator
    setsortedEmployee(_sortedEmployee);
  }, [rows])

  return (
    <div className="App">
      <Form >
          <Form.Group>
            <Form.Label>Employee Name</Form.Label>
            <Form.Control 
            value={name}
            type="text" 
            placeholder="Enter employee Name "
            name="name"
            onChange={(e)=>handleSubmit(e)} 
            />
          </Form.Group>
        </Form>
        <select>
          <option value="name">Name</option>
          <option value="id">ID</option>
        </select>
        <div className="container">
               
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
        </div>  
      </div>
  );
}

export default App;
