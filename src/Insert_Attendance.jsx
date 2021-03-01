import React from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import Dictionary from './Dictionary';
import Analog_clock from './Analog_clock';
import Upload_data from './Upload_data';
import Insert_marks_heading from './Insert_marks_heading';
import Announcements from './Announcements';
import Footer from './Footer';
import {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
import Toggle_switch from './Toggle_switch';
import Insert_Attendance_heading from './Insert_Attendance_heading';

const Insert_Attendance =()=>{
    return(
        <>
        <ResponsiveDrawer left_component={<Student_marks_insert_component/>}/>
        </>
    );
}

const Student_marks_insert_component=()=>{
    return(
        <>
        <div className="row">
            <div className="col-12 col-sm-12 col-md-7 col-lg-9 ">
              <Dictionary/>
            </div>
            <div className="col-12 col-sm-12 col-md-5 col-lg-3">
                <Analog_clock/>
            </div>
            <div className="col-12 mt-3">
                <Insert_Attendance_heading/>
            </div>

            <div className="col-12 mt-3">
                <Upload_attendance/>
            </div>
            
        </div>

        </>
  );
}
const Upload_attendance=()=>{
    return(
    <>
         <div className="table_div col-12">
                <table class="table table-responsive-lg" style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                    <thead style={{backgroundColor:"darkgray",color:"rgb(51,56,103)"}}>
                            <tr>
                            <th scope="col">Roll No</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Session :</th>
                            <th scope="col">Attendance</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                            <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><Toggle_switch/></td>
                        </tr>
                        
                   
                    </tbody>
                </table>
           </div>
            <div className="row mb-3">
                <div className="col-12">
                <Announcements/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <Footer/>
                </div>
            </div>
    </>
    );
}
export default Insert_Attendance;