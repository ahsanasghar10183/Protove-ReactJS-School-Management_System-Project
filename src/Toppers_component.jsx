import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './css/Toppers_style.scss';
import axios from 'axios';
const Toppers_component=()=>
{
    const value = 0.66;
    return(
        <>
        <div className="row"> 
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">

            <div className="card toppers_card">
                <div className="progres-circle p-5">
                    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                </div>
                <div className="card-body">
                    <p>Position: <span className="values">1st</span></p>
                    <p>Attendance: <span className="values">100%</span></p>
                    <p>Marks Percentage: <span className="values">98%</span></p>
                </div>
            </div>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card toppers_card">
                <div className="progres-circle p-5">
                    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                </div>
                <div className="card-body">
                    <p>Position: <span className="values">1st</span></p>
                    <p>Attendance: <span className="values">100%</span></p>
                    <p>Marks Percentage: <span className="values">98%</span></p>
                </div>
            </div>
         </div> 
         <div className="col-12 col-sm-12 col-md-6 col-lg-4 mb-4">
            <div className="card toppers_card">
                <div className="progres-circle p-5">
                    <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} />
                </div>
                <div className="card-body">
                    <p>Position: <span className="values">1st</span></p>
                    <p>Attendance: <span className="values">100%</span></p>
                    <p>Marks Percentage: <span className="values">98%</span></p>
                </div>
            </div>
         </div>
         
       </div>
        </>
    );
}
export default Toppers_component;