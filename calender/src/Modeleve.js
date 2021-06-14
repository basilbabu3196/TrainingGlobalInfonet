
import React, {useEffect, useState} from 'react';
import './Modeleve.css';
var dt = new Date();

const Modeleve = ({handleCloses,mont,da,yea,edate}) => {
    const [dtMonth,setDtMonth] = useState(mont)
    const [cells,setCells] = useState([])
    const [cell,setCell] = useState([])
   
      
    dt.setDate(1);
    var day = da
    var endDate = new Date(
        dt.getFullYear(),
        mont + 1,
        0
    ).getDate();

    var prevDate = new Date(
        dt.getFullYear(),
        mont,
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
   var monthdata = months[mont];
   console.log(mont)
    var years= yea;
   useEffect(()=>{
    var tcells = []
    var tcell = []
    
    for (var x = day; x > 0; x--) {
        tcell.push(prevDate - x + 1)
     }
     console.log(day);
     for (var i = 1; i <= edate; i++) {
        var Ent=localStorage.getItem(i+monthdata+years);
      tcells.push(i+Ent)
  }
 

  setCell(tcell)
  setCells(tcells)
  
   },[dtMonth])

       



return<center>

     <div class="wrapper1">
            <div  class="calendar1">
           
                <div class="month1">
               
                    <div>
                      
                    </div>
                        <div>
                            <h2 id="month">{monthdata}</h2>
                           <p>{years}</p>
                           <h1><button id="showevt" className="btn btn-danger"  onClick={handleCloses}>Exit Events &euro;</button></h1>
                        </div>
                    <div >
                       
                    </div>
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
           <div class="days1" >
           
         {

         cell.map((user) => (
        <div className="prev_date1">{user}</div>
                 ))
      
          }









                                                {/* 
                                                    
                                                    
                                                Add Current Month Days
                                                
                                                
                                                */} 
    {
 
        cells.map((user) => (
         
    <div id="card1"> {user}</div>
 
     ))}
           
           
       
                </div>
               
            </div>
          
        </div>

  
   
    

                                                  
                                               
                                                        {/*   DISPLAY DAY EVENT CONTROL MODEL.JS(Another Component) */}


    
  
   </center>
}




export {Modeleve} ;