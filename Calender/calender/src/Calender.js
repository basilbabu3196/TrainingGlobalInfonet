import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
import {Model} from './model.js'
import './calender.css';
var dt = new Date();

 function RenderDate(){

    const [dtMonth,setDtMonth] = useState(dt.getMonth())
    const [cells,setCells] = useState([])
    const [cell,setCell] = useState([])
    
  var state={

        curTime : new Date().toLocaleString(),

    
      }
      var firstStringChar = state.curTime.substring(0, 1);
      var LastStringChar = state.curTime.substring(4,8);
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
   var monthdata = months[dt.getMonth()];
   console.log(dt.getMonth())
var years= dt.getFullYear()
   useEffect(()=>{
var tcells = []
var tcell = []
    for (var x = day; x > 0; x--) {
        tcell.push(prevDate - x + 1)
     }
     console.log(day);
     for (var i = 1; i <= endDate; i++) {
      if (i == today.getDate() && dt.getMonth() == today.getMonth())  tcells.push(i)
      else
      tcells.push(i)
  }
  setCell(tcell)
  setCells(tcells)
   },[dtMonth])

       
                                                        //Date and Month Change

        function moveDate(para) {

            if(para == "prev") {
                setDtMonth(dt.getMonth() - 1)
                dt.setMonth(dt.getMonth() - 1);
            } else if(para == 'next') {
                setDtMonth(dt.getMonth() + 1)
                dt.setMonth(dt.getMonth() + 1);
            }
           
        }
   
                                                        //Add Calender Events(tuggle)


    const [showText, setShowText] = useState(false);

  const onClick = (user) => {
    localStorage.setItem('event', user);
    localStorage.setItem('eventmont', monthdata);
      setShowText(true)
    };
  const hideModal = () => setShowText(false);






return<center><div> <div className="card-header">
    <h1>CALENDER</h1>
    
    <div class="wrapper">
            <div class="calendar">
               
                <div class="month">
                    <div class="prev" onClick={() => moveDate("prev")}>
                        <span>&#10094;</span>
                    </div>
                        <div>
                            <h2 id="month">{monthdata}</h2>
                           <p>{years}</p>
                        </div>
                    <div class="next" onClick={() => moveDate("next")}>
                        <span>&#10095;</span>
                    </div>
                </div>
               
               
                                          
                                          
                                            {/*       Weekdays           */}
               



               
                <div class="weekdays">
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
           <div class="days"  >
         {

         cell.map((user) => (
        <div className="prev_date">{user}</div>
                 ))
      
          }









                                                {/* 
                                                    
                                                    
                                                ADD THIS Month Days
                                                
                                                
                                                */} 
    {
 
        cells.map((user) => (
         
    <div id="dates"
     {...(user === today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() === today.getFullYear() ? { className : "currentDate" } : null )}
    onClick={() => onClick(user)}>{user}</div>
 
     ))}
           
           
       
                </div>
            </div>
        </div>

    </div>
  
    </div>

                                                  
                                                  
                                                        {/*   DISPLAY DAY EVENT CONTROL MODEL.JS(Another Component) */}


    {showText ? <Model handleClose={hideModal} user="user" /> : null}



   </center>
}



export default RenderDate;