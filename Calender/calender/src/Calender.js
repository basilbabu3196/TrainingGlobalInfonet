import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Model} from './model.js'
import {Modeleve} from './Modeleve.js'
import './calender.css';
var dt = new Date();

 function RenderDate(){

    const [dtMonth,setDtMonth] = useState(dt.getMonth())
    const [cells,setCells] = useState([])
    const [cell,setCell] = useState([])
   
    

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
    const [showTextve, setShowTexteve] = useState(false);
    const [dates,setdates] = useState()
  const onClick = (user) => {
    localStorage.setItem('event', user);
    setdates(user)
    console.log(dates);
      setShowText(true)
    };
    
    const onClicks = () => {
        // localStorage.setItem('thismonth',dt.getMonth());
        // localStorage.setItem('endDate',endDate);
          setShowTexteve(true)
        };
  const hideModal = () => {setShowText(false);}
  const hideModale = () => setShowTexteve(false);





return<center><div  className="card-header">
    
   
     <div class="wrapper">
            <div  class="calendar">
           
                <div class="month">
               
                    <div class="prev" onClick={() => moveDate("prev")}>
                        <span>&#10094;</span>
                    </div>
                        <div>
                            <h2 id="month">{monthdata}</h2>
                           <p>{years}</p>
                           <h1><button id="showevt" className="btn btn-info"  onClick={() => onClicks()}>View Events &euro;</button></h1>
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
           <div class="days" >
           
         {

         cell.map((user) => (
        <div className="prev_date">{user}</div>
                 ))
      
          }









                                                {/* 
                                                    
                                                    
                                                Add Current Month Days
                                                
                                                
                                                */} 
    {
 
        cells.map((user) => (
         
    <div id="card"
     {...(user === today.getDate() && dt.getMonth() == today.getMonth() && dt.getFullYear() === today.getFullYear() ? { className : "currentDate" } : null )}
    onClick={() => onClick(user)}> <p id="tooltiptext"> Click  </p>{user}</div>
 
     ))}
           
           
       
                </div>
               
            </div>
          
        </div>

    </div>
   
    

                                                  
                                               
                                                        {/*   DISPLAY DAY EVENT CONTROL MODEL.JS(Another Component) */}


    {showText ? <Model handleClose={hideModal} monthdat={monthdata} cyear={years} dates={dates} endDate={endDate}/> : null}

    {showTextve ? <Modeleve handleCloses={hideModale} edate={endDate} yea={years} prvdate={prevDate} da={day} mont={dt.getMonth()} /> : null}
  
   </center>
}



export default RenderDate;