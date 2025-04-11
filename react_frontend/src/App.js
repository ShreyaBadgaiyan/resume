import './App.css';
import { useState, useEffect} from "react";
import axios from "axios";

function App() {
 const [students,setStudents]=useState([])
 useEffect(()=>{
  async function getAllStudents() {

    try{
      const students=await axios.get("http://127.0.0.1:8000/api/student/")
      console.log(students.data)
      setStudents(students.data)
    }
    catch(error){
      console.log(error)

    }
    
  }
  getAllStudents()

 },[]

)



  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <h1>Resume Application</h1>

      {students.map((student,i)=>{
        return (
          <div key={i}><h2>{student.stuname}</h2> 
          <h4>{student.email}</h4></div>
        )
      })}
    </div>
  );
}

export default App;
