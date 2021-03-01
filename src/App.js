import React, {useState} from 'react';
import Navbar from './Navbar';
import Cards_area from './Cards_area';
import Dashboard_teachers from './Dashboard_teachers';
import Insert_page from './Insert_page';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Teacher_sign_up_form from './Teacher_sign_up_form';
import Choose_account from './Choose_account';
import Teacher_login_form from './Teacher_login_form';
import Teacher_sign_up_page from './Teacher_sign_up_page';
import Student_signup_page from './Student_signup_page';
import Student_login_form from './Student_login_form';
import Student_signup_form from './Student_signup_form';
import Extra_signup from './Extra_signup';
import Student_dashboard from './Student_dashboard';
import Result_view from './Result_view';
import Attendance_view from './Attendance_view';
import Insert_Attendance from './Insert_Attendance';
import Manage_Notifications from './Manage_Notifications';
import './App.css';
function App() {
  // const [showmsg, setshowmsg]=useState(true);
  return (
    <>
      <Router>
            <Switch>
              <Route exact path="/"><Choose_account/></Route>
               <Route path="/Teacher_login_form" component={Teacher_login_form}/>
               <Route path="/Teacher_sign_up_page" component={Teacher_sign_up_page}/>
               {/* Student System Links */}

               <Route path="/Student_login_form" component={Student_login_form}/>
               <Route path="/Student_signup_page" component={Student_signup_page}/>
               <Route path="/Student_dashboard" component={Student_dashboard}/>
               <Route path="/Result_view" component={Result_view}/>
               <Route path="/Attendance_view" component={Attendance_view}/>
               <Route path="/Student_signup_form" component={Student_signup_form}/>
               <Route path="/Insert_page" component={Insert_page}/>
               <Route path="/Manage_Notifications" component={Manage_Notifications}/>
               <Route path="/Dashboard_teachers" component={Dashboard_teachers}/>
               <Route path="/Insert_Attendance" component={Insert_Attendance}/>
               <Route path="/Choose_account" component={Choose_account}/>
            </Switch>
        </Router>
        
   </>
  );
}

export default App;
