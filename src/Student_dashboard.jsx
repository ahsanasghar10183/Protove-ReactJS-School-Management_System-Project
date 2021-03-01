import React from 'react';
import Students_Drawer from './Students_Drawer';
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
import AssignmentIcon from '@material-ui/icons/Assignment';
import NoteIcon from '@material-ui/icons/Note';
import Weather_widget from './Weather_widget';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dictionary from './Dictionary';
toast.configure();
const Notifications=(prop)=>
{
    return(
        <>
       
        <div className="notification">
            <div className="title">{prop.title}</div>
            <div className="details">{prop.details}</div>         
        </div>
    </>
    );
}
const Student_dashboard=()=>
{
  const [notification_data, setNotification_data]= useState([]);
  useEffect(()=>{
      const View = async ()=>
      { 
        const res = await  axios.get(`http://localhost/school_dashboard/Display_notifications.php`);
        setNotification_data(res.data);
        console.log(notification_data);
      }
  View();
  console.log(notification_data);
  },[]);
  {
      notification_data.map((curr, index)=>{
      return(
          toast.info(<Notifications title={curr.N_TITLE} details={curr.N_DETAILS} key={index}/>)
      );
  })
  } 
    return(
        <>
         <ToastContainer>
        </ToastContainer>
        <Students_Drawer left_component={<Students_cards_area/>}/>
        </>

    );

}
const Students_cards_area=()=>{
  return(
    <>
     <div className="Card_div">
            <div className="page_title"><p>Student Dashboard |</p></div>

            <div className="row ">
                <div className="col-12 col-md-6 col-lg-4  mb-3">
                  <Student_upper_cards card_text={"Courses To Do"} icon={<SchoolIcon style={{fontSize: "70px", color:"#02bbf3"}}/>}/>
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <Student_upper_cards card_text={"Courses In Progress"} icon={<HistoryIcon style={{fontSize: "70px", color:"#fd5f00"}}/>} />
                </div>
                <div className="col-12 col-md-6 col-lg-4 mb-3">
                  <Student_upper_cards card_text={"Certifications"} icon={<CardMembershipIcon style={{fontSize: "70px", color:"#42b72a"}}/>}/>
                </div>
            </div>
           
            <div className="row calender_row mx-auto">
                <div className="col-12 col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 daily_task_div  mb-3 ">
                        <Daily_tasks/>
                </div>
                <div className="weather_widget col-12 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6  mb-3">
                  <Weather_widget/>
                </div>
            </div>
            <div className="row quiz_assign_div">
                <div className="col-12 col-md-6 col-lg-6 mb-3">
                  <Student_upper_cards card_text={"Active Quizes"} icon={<NoteIcon style={{fontSize: "70px", color:"#02bbf3"}}/>}/>
                </div>
                <div className="col-12 col-md-6 col-lg-6 mb-3">
                  <Student_upper_cards card_text={"Active Assignments"} icon={<AssignmentIcon style={{fontSize: "70px", color:"#fd5f00"}}/>} />
                </div>
            </div>
            <div className="row mb-3">
              <div className="col-12">
              <Announcements/>
              </div>
            </div>
               <div className="row">
               <div className="col-12 col-sm-12 col-md-7 col-lg-9 mb-3 ">
                 <Dictionary/>
                 </div>
               <div className="col-12 col-sm-12 col-md-5 col-lg-3 mb-3">
                   <Calendar_component/>
                   </div>
            </div>
                <Footer/>
        </div>
 


 
    </>
  );
}
export default Student_dashboard;