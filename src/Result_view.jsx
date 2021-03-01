import React from 'react';
import Navbar from './Navbar';
import Students_Drawer from './Students_Drawer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Calendar_component from './Calendar_component';
import axios from 'axios';
import {useState} from 'react';
import {useEffect} from 'react'; 
import SchoolIcon from '@material-ui/icons/School';
import HistoryIcon from '@material-ui/icons/History';
import CardMembershipIcon from '@material-ui/icons/CardMembership';
import Student_upper_cards from './Student_upper_cards';
import Daily_tasks from './Daily_tasks';
import Announcements from './Announcements';
import Footer from './Footer';
const Result_display_function=(prop)=>{

    return(
        <>
            <div className="page_title"><p>Student Dashboard |</p></div>

            <div className="row ">
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <Student_upper_cards card_text={"Courses To Do"} icon={<SchoolIcon style={{fontSize: "70px", color:"#02bbf3"}}/>}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <Student_upper_cards card_text={"Courses In Progress"} icon={<HistoryIcon style={{fontSize: "70px", color:"#fd5f00"}}/>} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <Student_upper_cards card_text={"Certifications"} icon={<CardMembershipIcon style={{fontSize: "70px", color:"#42b72a"}}/>}/>
                </div>
            </div>
            <div className="row ">
            <div className="table_div col-12">
            <table class="table table-responsive-lg" style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
           <thead style={{backgroundColor:"darkgray",color:"rgb(51,56,103)"}}>
                <tr>
                <th scope="col">Student Name: {prop.login_name_val} </th>
                <th scope="col">Roll No</th>
                <th scope="col" colspan="4">Session :</th>
                </tr>
            </thead>
            <thead>
                <tr>
                <th scope="col">Subject</th>
                <th scope="col">Obtained Marks</th>
                <th scope="col">Total Marks</th>
                <th scope="col">Grade</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">Programming</th>
                    <td>94</td>
                    <td>100</td>
                    <td>A+</td>
                </tr>
                <tr>
                    <th scope="row">Web Engineering</th>
                    <td>94</td>
                    <td>100</td>
                    <td>A+</td>
                </tr>
                <tr>
                    <th scope="row">ACP</th>
                    <td>94</td>
                    <td>100</td>
                    <td>A+</td>
                </tr>
                <tr>
                    <th scope="row">FMSE</th>
                    <td>94</td>
                    <td>100</td>
                    <td>A+</td>
                </tr>
                <tr>
                    <th scope="row">TOA</th>
                    <td>94</td>
                    <td>100</td>
                    <td>A+</td>
                </tr>
             </tbody>
            </table>
            </div>
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
const Result_view=()=>
{
    const [login_data, setLogin_data]= useState([]);
    useEffect(()=>{
        const Load_login_data = async ()=>
        {
          const res = await axios.get('http://localhost/school_dashboard/Student_login_file.php');
          setLogin_data(JSON.parse(JSON.stringify(res.data)));
        }
    Load_login_data();
    console.log(login_data);
    console.log("This is console data");
    },[]);
    return(
    <>
        <Navbar name={login_data.Username}/>
        <Students_Drawer left_component={<Result_display_function login_name_val={login_data.Username}/>}/>
    </>
    );

}
export default Result_view;