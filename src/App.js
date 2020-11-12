import './App.css';
import {ListGroup, Form, Card} from "react-bootstrap";
import employee from './employee.json';
import React, {useEffect, useState} from "react";


function App() {
  
  const [name, setName] = useState("");
  const [employeeData, setEmployeeData] = useState([]);
  const [sortedEmployee, setsortedEmployee] = useState([])
  const [sortType, setSortType] = useState([]);

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
        sorted = employee.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "occupation":
        sorted = employee.sort((a, b) => a.occupation.localeCompare(b.occupation));
        break;
      default:
        break;
    }
    
    console.log(sorted);
    setsortedEmployee(sorted);
    
  };

  return (
    <div className="App">
      <h2>Employee Directory</h2>
      <div className="row">
        <div className col-6>
          <Form >
            <Form.Group>
              <Form.Control 
              value={name}
              type="text" 
              placeholder="Enter employee name "
              name="name"
              onChange={(e)=>handleSubmit(e)} 
              />
            </Form.Group>
          </Form>
        </div>
        <div className col-3>
          <span>Sort By</span>
          <select onClick={(e)=>sortArray(e)}>
            <option></option>
            <option  value="name">Name</option>
            <option  value="occupation">Occupation</option>
          </select>
        </div>
      </div>
        <div className="container">
          {employeeData.map((employee, i) => (
            <Card key={i} style={{ width: '14rem' }}>
              <div className="img-container">
                <Card.Img variant="top" src={employee.image} />
              </div>
                <ListGroup className="content" variant="flush">
                  <ListGroup.Item>Name: {employee.name}</ListGroup.Item>
                  <ListGroup.Item>Occupation: {employee.occupation}</ListGroup.Item>
                </ListGroup>
              
            </Card>
           ))}
        </div>  
      </div>
  );
}

export default App;
