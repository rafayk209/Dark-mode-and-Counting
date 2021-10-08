import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container } from 'react-bootstrap';
import react ,{ useState, useEffect } from "react"







function IncDec() {
    const [count, setCount]= useState(1)
    // const [counts, setCounts]= useState(1)
    

  
const IncNum= ()=>{  
  setCount(count+1)
}
const DecNum= ()=>{
  setCount(count-1)
}

const ResNum= ()=>{  
  setCount(0)
}

  return (
    <div className="container" >
    
     <h1>Counting App</h1> 

      <h1> {count} </h1>
      <div className="buttons">
      <Button variant="outline-success" onClick={IncNum}>Increment</Button>{' '} <br />
      <Button variant="outline-success" onClick={DecNum}>Decrement</Button>{' '} <br />
      <Button variant="outline-success" onClick={ResNum}>Reset</Button>{' '} <br />
      </div>
        {/* <Button variant="outline-success" onClick={()=>{setCounts(counts+1)}}>Increment {counts}</Button>{' '} */}
    </div>
  );
}

export default IncDec;
