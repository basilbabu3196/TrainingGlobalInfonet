import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useHistory} from  'react-router-dom'
import './calender.css';
function Calender() {
    
   
    return<center><div> <div className="card-header">
    <h1>CALENDER</h1>
    <div class="wrapper">
            <div class="calendar">
                <div class="month">
                    <div class="prev">
                        <span>&#10094;</span>
                    </div>
                        <div>
                            <h2 id="month"></h2>
                            <p id="date_str"></p>
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
    </div>
   </center>
}
export default Calender;