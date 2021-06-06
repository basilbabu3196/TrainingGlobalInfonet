import React,{useState} from 'react';
import './calender.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const Model = ({handleClose},{user}) => {
  const [eventes, setevent]= useState('');
 
const datea= localStorage.getItem('event');
const eventmont=localStorage.getItem('eventmont');
  const eventChange=(event)=>{
    setevent(event.target.value)
  
  }
  
  var events = [""];
  
  const myFunction = (event) => {
    console.log(user);
    event.preventDefault();
  
 
    events.push(eventes);
    document.getElementById("disevent").innerHTML = events;
    
  }
  return (
    
    <div className="d">
      <div className="addEvt"> Add Event To  {datea}th {eventmont}</div>
      <form onSubmit={myFunction}>
      <div className="evt" id="disevent">

      </div>
      <button className="x" onClick={handleClose}>X</button><br></br><br></br>
      <br></br><br></br>
     
    <input type="text" onChange={eventChange} placeholder="Bithday,Holyday,etc.." className="event"></input>
    <button className="EVNT" onClick={myFunction} type="submit">EVENT</button> 
    </form>
    </div>
  );
};
export {Model};