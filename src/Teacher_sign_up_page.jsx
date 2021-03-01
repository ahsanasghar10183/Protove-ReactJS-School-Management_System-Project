import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import './css/Login_style.scss';
import Teacher_sign_up_form from './Teacher_sign_up_form';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Result_view from './Result_view';
import Teacher_login_form from './Teacher_login_form';
import Footer from './Footer';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import '../src/css/Choose_acc_style.scss';
const Teacher_sign_up_page=()=>
{
    const history = useHistory();
    return(
        <>
        <div className="main_login_container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-5 teacher_text_side_main">
                    <div className="text_container">
                        <h1 className="text-center">WELCOME TO</h1>
                        <img className="text-center protove_logo" src="./images/protove_logo.png" alt="Brand LOGO"/>
                        <p>Pakistan's best Learning Management<br/> System Devloped in React.JS</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-7 teacher_forms_side_div_main">
                <Tabs>
                    <TabList>
                    <Tab>Login</Tab>
                    <Tab>Sign Up</Tab>
                    </TabList>
                    <TabPanel>
                        <Teacher_login_form/>
                    </TabPanel>
                    <TabPanel>
                        <Teacher_sign_up_form/>
                    </TabPanel>
                </Tabs>
               </div>    
           </div>
           
        </div>
        </>
    );
}
export default  Teacher_sign_up_page;