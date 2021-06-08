import React,{useState} from 'react';
import './calender.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const Model = ({handleClose}) => {
  const[toDos,setTodos]=useState([])
const[toDo,setTodo]=useState('')
 console.log(toDos);

const datea= localStorage.getItem('event');
const eventmont=localStorage.getItem('eventmont');
var datee=datea+eventmont
localStorage.setItem(datee,toDos)


  return (
    
    <div className="d">
      <div className="addEvt"> Add Event To  {eventmont} {datea} </div>
      
      <div className="evt" id="disevent">
      {toDos.map((value)=>{
        return (<div><div className="listdata">
        <span className="mdj"> {eventmont}{datea}</span> &nbsp; &nbsp; {value}
  
  
       </div><br></br></div> )
  })}
      </div>
      <button className="x" onClick={handleClose}>X</button><br></br><br></br>
      <br></br><br></br>
      <input value={toDo}  onChange={(e)=>setTodo(e.target.value)} type="text" className="event" placeholder="🖊️ Bithday,Holyday,etc..." />

    <button className="EVNT" onClick={()=>setTodos([...toDos,toDo]  ) } type="submit">ADD</button> 
    
    </div>

  );
};
export {Model};