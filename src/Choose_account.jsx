import React from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import './css/Login_style.scss';
import { useHistory } from "react-router-dom";
import {Link} from 'react-router-dom';
import {BrowserRouter, Switch, Router, Route} from 'react-router-dom';
import Teacher_sign_up_page from './Teacher_sign_up_page';
import './css/Choose_acc_style.scss';
import Student_signup_page from './Student_signup_page';
const Choose_account=()=>
{
    const history= useHistory();
    return(
        <>
        <div className="main_login_container">
            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 col-lg-5">
                    <div className="text_container">
                        <h1 className="text-center">WELCOME TO</h1>
                        <div className="logo_div">
                        <img className="justify-content-center protove_logo" src="./images/protove_logo.png"  alt="Brand LOGO"/>
                        </div>
                        <p>Pakistan's best Learning Management<br/> System Devloped in React.JS</p>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-7 col-lg-7 main_login_container">
                    <div className="acc_images">
                    <Link to="/Student_signup_page">
                   <div className="col-sm-12 col-md-6 col-lg-6">
                        <div class="card choose_acc_cards">
                            <img src="./images/student.svg" className="card-img-top p-2" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title text-center">Student Portal</h5>
                            </div>
                        </div>
                        </div>
                        </Link>
                        <Link to="/Teacher_sign_up_page">
                     <div className="col-sm-12 col-md-6 col-lg-6">
                        <div className="card choose_acc_cards">
                            <img src="./images/teacher.png" className="card-img-top p-2" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Teacher Portal</h5>
                            </div>
                        </div>
                        </div>
                        </Link>
                 </div>
            </div>
          </div>
      </div>

    </>
    );
}
export default Choose_account;