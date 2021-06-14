import React,{useState} from 'react';
import './calender.css';
import 'bootstrap/dist/css/bootstrap.min.css'
const Model = ({handleClose,monthdat,cyear,dates}) => {

  const[toDos,setTodos]=useState([])
const[toDo,setTodo]=useState('')
 

const datea= localStorage.getItem('event');

var datee=dates+monthdat+cyear
localStorage.setItem(datee,toDos)


  return (
    
    <div className="model">
       <article class="card">
      <div> <h3><b>Add Event To  {monthdat} {datea}&nbsp;{cyear}</b></h3><button className="x1" onClick={handleClose}>X</ button> </div>
      
      <div className="borderaddevent">
      {toDos.map((value)=>{
        return (<div><br></br><div className="data_eve_list">
        <span className="mdj"> {monthdat}{datea}</span> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span className="event_add">{value}</span> 
  
  
          </div><br></br></div> )
  })}
      </div>
    
  <form>
      <input value={toDo} onChange={(e)=>setTodo(e.target.value)} required="required" type="text" className="addtext" placeholder="🖊️ Bithday,Holyday,etc..." />
      </form>
    <button className="addcard" onClick={()=>setTodos([...toDos,toDo])}  type="submit">ADD</button> 
    </article>
    </div>

  );
};
export {Model};