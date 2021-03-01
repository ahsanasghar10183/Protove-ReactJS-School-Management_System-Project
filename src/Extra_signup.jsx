import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import './css/Login_style.scss';
import Student_signup_form from './Student_signup_form';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Result_view from './Result_view';
const Extra_signup=()=>
{
    const history = useHistory();
    return(
        <>
        <div className="main_login_container bg-white">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-4 col-lg-5">
                    <div className="text_container">
                        <h1 className="text-center">WELCOME TO</h1>
                        <img className="text-center p-4" src="./images/logo.png" alt="Brand LOGO"/>
                        <p>Pakistan's best Learning Management<br/> System Devloped in React.JS</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-7">
                    <ul class="nav nav-tabs">
                        <li class="nav-item" >
                            <a class="nav-link" href="#Login" data-toggle="tab">Link</a>
                           
                        </li>
                        
                        <li class="nav-item" >
                            <a class="nav-link" href="#Signup" data-toggle="tab">Link</a>
                           
                        </li>
                       
                    </ul>
                    <div className="tab-content container">
                    <div className="tab-pane" id="Login">
                        <h1>This is Login Tab</h1>
                        <Student_signup_form/>

                    </div>
                    <div className="tab-pane" id="Signup">
                        <h1>This is Sign Up tab</h1>
                    </div>
                </div>
                </div>    
            </div>
            
        </div>
        </>
    );
}
export default Extra_signup ;