import React,{useState} from 'react';
import './calender.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const Model = ({handleClose}) => {
  const [eventes, setevent]= useState('');
 

  const eventChange=(event)=>{
    setevent(event.target.value)
  
  }
  
  var events = [""];
  
  const myFunction = (event) => {
    event.preventDefault();
  
 
    events.push(eventes);
    document.getElementById("disevent").innerHTML = events;
    
  }
  return (
    <div className="d">
      <form onSubmit={myFunction}>
      <div className="evt" id="disevent">

      </div>
      <button className="x" onClick={handleClose}>X</button><br></br><br></br>
      <br></br><br></br>
     
    <input type="text" onChange={eventChange} className="event"></input>
    <button className="EVNT" onClick={myFunction} type="submit">EVENT</button> 
    </form>
    </div>
  );
};
export {Model};