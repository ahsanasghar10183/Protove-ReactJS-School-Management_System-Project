import React from 'react';
import Button from '@material-ui/core/Button';
import Facebook from '@material-ui/icons/Facebook';
import './css/Login_style.scss';
import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import {useLocation} from 'react-router-dom';
import Student_dashboard from './Student_dashboard';
const Student_login_form=(prop)=>
{
    
    const location = useLocation();
    const history =useHistory();
    const [logincredentials, setLogincredentials]=useState(
        {
            login_username:"",
            login_email:"",
            login_regno:"",
            login_password:""
        }
    );
    const get_input_value=(event)=>
    {
        const {name,value}=event.target;
        setLogincredentials((prevdata)=>
        {
            return{
                ...prevdata,
                [name]:value
             }

        });
    }
   
    const form_submit=(event)=>
    {
        event.preventDefault();
        const login_obj_s = {
            Username:logincredentials.login_username,
            Email:logincredentials.login_email,
            Regno:logincredentials.login_regno,
            Password:logincredentials.login_password
        }
        console.log(login_obj_s);
        axios.post(`http://localhost/school_dashboard/Student_login_file.php`, login_obj_s).then(res=>console.log(res.data)).catch((error)=>console.log(error));
        setLogincredentials(
        {
            login_username:"",
            login_email:"",
            login_regno:"",
            login_password:""
        });
        history.push("/Student_dashboard");
    /*    login_data.map((curr, index)=>{
            if(logincredentials.login_username == curr.Username && logincredentials.login_email==curr.Email && logincredentials.login_password==curr.Password)
            {
                setUsername_g("Ahsan Asghar Name");
               alert("You Have Successfully Logged Into Your Eduflex Account!");
            }
       });
       */
    }    
 

    return(
        <> 
            <div className="form_container col-10 col-sm-10 col-md-7 col-lg-8 mx-auto">
                <h1 className="text-center">Login in to eduflex Dashboard!</h1>
                <div className="col-12 mb-auto">
                   <Button variant="contained"  className="login_with_media_buttons col-12 col-sm-12 col-md-12 col-lg-6"><Facebook style={{color:"#4267B2"}}/>Login with Facebook</Button>
                   <Button variant="contained" className="login_with_media_buttons col-12 col-sm-12 col-md-12 col-lg-6" ><Facebook style={{color:"#4267B2"}}/>Login With Google</Button>
                </div>
                <br/>
                <form method="post" onSubmit={form_submit} >
                    <div className="mb-3">
                        <input type="text" className="p-3 form-control" onChange={get_input_value} value={logincredentials.login_username} name="login_username" placeholder="Username" id="Usernameid" aria-describedby="usernametag"/>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="p-3 form-control" onChange={get_input_value} value={logincredentials.login_email} name="login_email" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <input type="number" className="p-3 form-control" onChange={get_input_value} name="login_regno" value={logincredentials.login_regno} placeholder="Roll No" id="InputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <input type="password" className="p-3 form-control" onChange={get_input_value} name="login_password" value={logincredentials.login_password} placeholder="Password" id="Rollno_input"/>
                    </div>
                   
                      <button type="submit" className="btn btn-primary text-white col-12" >Login</button>                 

                </form>
            </div>
        </>
    );

}
export default Student_login_form;