import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
import {Model} from './model.js'
import './calender.css';
var dt = new Date();

 function RenderDate(){
    
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
   var days = dt.toDateString();
   var cells = [];
   var cell=[];
   var cels=[];
   for (var x = day; x > 0; x--) {
      cell.push(prevDate - x + 1)
   }
   console.log(day);
   for (var i = 1; i <= endDate; i++) {
    if (i == today.getDate() && dt.getMonth() == today.getMonth())  cells.push(i)
    else
    cells.push(i)
}



const moveDate = (para) => {
    if(para == "prev") {
        dt.setMonth(dt.getMonth() - 1);
    } else if(para == "next") {
        dt.setMonth(dt.getMonth() + 1);
    }
    RenderDate();
}
   
    const [showText, setShowText] = useState(false);

  const onClick = () => setShowText(true);
  const hideModal = () => setShowText(false);
    return<center><div> <div className="card-header">
    <h1>CALENDER</h1>
    
    <div class="wrapper">
            <div class="calendar">
                <div class="month">
                    <div class="prev" >
                        <span>&#10094;</span>
                    </div>
                        <div>
                            <h2 id="month">{monthdata}</h2>
                            <p id="date_str">{firstStringChar}th {monthdata} {LastStringChar}</p>
                        </div>
                    <div class="next" >
                        <span>&#10095;</span>
                    </div>
                </div>
                <div class="weekdays">
                    <div>Sun</div>
                    <div>Mon</div>
                    <div>Tue</div>
                    <div>Wed</div>
                    <div>Thu</div>
                    <div>Fri</div>
                    <div>Sat</div>
                </div>
                <div class="days"  >
                {cell.map((user) => (
        <div className="prev_date">{user}</div>
      ))}
 {
 
 cells.map((user) => (
         
    <div onClick={onClick}>{user}</div>
 
     ))}
           
           
       
                </div>
            </div>
        </div>

    </div>
  
    </div>
    {showText ? <Model handleClose={hideModal}/> : null}
   </center>
}

export default RenderDate;