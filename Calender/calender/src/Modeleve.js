import React, {useEffect, useState} from 'react';

import { useHistory} from  'react-router-dom'

import './Modeleve.css';
var dt = new Date();

const Modeleve = ({handleCloses}, props) => {
  
    const [dtMonth,setDtMonth] = useState(dt.getMonth())
    const [cells,setCells] = useState([])
    const [cell,setCell] = useState([])
   
  var state={

        curTime : new Date().toLocaleString(),

    
      }
      var firstStringChar = state.curTime.substring(0, 1);
      var LastStringChar = state.curTime.substring(4,8);
     
     
     // const Ent= localStorage.getItem('evt');
    dt.setDate(1);
    var day = dt.getDay();
    var today = new Date();
    var endDate = new Date(
        dt.getFullYear(),
        dt.getMonth() + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        dt.getMonth(),
        0
    ).getDate();
    var months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]
    var thismonth=localStorage.getItem("thismonth")
    var thisdays=localStorage.getItem("endDate")
   var monthdata = months[thismonth];
   console.log(dt.getMonth())
    var years= dt.getFullYear()
   useEffect(()=>{
    var tcells = []
    var tcell = []
  
    for (var x = day; x > 0; x--) {
        tcell.push(prevDate - x + 1)
     }
     console.log(day);
     for (var i = 1; i <= thisdays; i++) {
      
        var Ent=localStorage.getItem(i+monthdata);
      tcells.push(i+Ent)
  }
  

  setCell(tcell)
  setCells(tcells)
  
   },[dtMonth])

       
                                                        //Date and Month Change

       
   
                                                        //Add Calender Events(tuggle)


  






return<center>
    <h1>{props.name}</h1>
    <br></br><br></br>
     
            <div class="calendar1">
               
                <div class="month1">
                   <div></div>
                        <div>
                            <h2 id="month1">{monthdata}</h2>
                           <p>{years}</p>
                        </div>
                        <div></div>
                        <button id="x1" className="btn btn-danger" onClick={handleCloses}>Exit &#10006; Event</ button>
                </div>
               
               
                                          
                                          
                                            {/*       Weekdays           */}
               



               
                <div class="weekdays1">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
               



                                                {/* 
                                                    
                                                    
                                                ADD PREVIOUS Month Days
                                                
                                                
                                                */} 
           <div class="days1"  >
         {

         cell.map((user) => (
        <div className="prev_date1">{user}</div>
                 ))
      
          }









                                                {/* 
                                                    
                                                    
                                                ADD THIS Month Days
                                                
                                                
                                                */} 
    {
 
        cells.map((user) => (
         
    <div id="dates1">
    {user}</div>
 
     ))}
           
           
       
                </div>
               
            </div>
      


   
    

                                                  
                                               

  



   </center>
}



export {Modeleve} ;