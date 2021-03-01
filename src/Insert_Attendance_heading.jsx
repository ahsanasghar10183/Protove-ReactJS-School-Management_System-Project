import React from 'react';
import {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';
const Insert_Attendance_heading=()=>{
    const [subjecthook, setSubjecthook]= useState("");
    const [startDate, setStartDate] = useState(new Date());
    return(
        <>
            <div className="row">
                <div className="col-12 ">
        
                    <div className="insert_heading">
                            <div className="d-inline-block col-sm-12 col-md-12 col-lg-6 "><h4>Insert Students Attendance</h4></div>
                            <div className="d-inline-block upload_csv col-sm-12 col-md-12 col-lg-6"><input style={{color:"lightblue"}} type="file" name="File Upload" id="txtFileUpload" accept=".csv" />
                            <div className="mt-1">
                                <table>
                                    <tr >
                                        <td>
                                             Select The Subject: 
                                        </td>
                                        <td>
                                        <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>Web Engineering</option>
                                                        <option>Software Construction</option>
                                                        <option>Fomal Methods in SE</option>
                                                        <option>Theory of Automata</option>
                                                        <option>Data Communication</option>
                                                        <option>Advance Computer Programming</option>
                                                    </optgroup>
                                         </select>
                                        </td>
                                    
                                    </tr>
                                    <tr className="pt-2">
                                        <td>
                                        <span>Select Date: </span>
                                        </td>
                                        <td>
                                           <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                                        </td>
                                    </tr>
                                </table>
                                
                            </div>

                         </div>
                </div>
                </div>
            
              <br/>
           </div>
        </>
    );
}
export default Insert_Attendance_heading;