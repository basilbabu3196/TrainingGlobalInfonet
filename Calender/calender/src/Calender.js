import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
import './calender.css';

function Calender() {
    var dt = new Date();
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
    const myFunction = (event) => {
        event.preventDefault();
      
    }
   
    return<center><div> <div className="card-header">
    <h1>CALENDER</h1>
    <div class="wrapper">
            <div class="calendar">
                <div class="month">
                    <div class="prev">
                        <span>&#10094;</span>
                    </div>
                        <div>
                            <h2 id="month">{monthdata}</h2>
                            <p id="date_str">{days}</p>
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
                <div class="days" >

                </div>
            </div>
        </div>

    </div>
    <div id="id01" class="modal">
            
            <form class="modal-content animate" onSubmit={myFunction} method="post">
                <div class="imgcontainer">EVENTS
                    <span class="close" title="Close Modal">&times;</span>
                
                </div>
            
                <div class="container">
                    <div class="disevent" id="disevent">

                    </div>
                    <center> <input type="text" id="evnt"></input> <br></br><button type="submit" onclick="myFunction()">Event</button>&nbsp;<input type="submit" value="Clear"></input></center>
                
                </div>
            
               
            </form>
        </div>
    </div>
   </center>
}
export default Calender;