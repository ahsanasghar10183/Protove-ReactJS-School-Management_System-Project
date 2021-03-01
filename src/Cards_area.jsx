import React from 'react';
import Card_component,{Lower_card_component} from './Card_component';
import {Line_chart, Doughnut_chart,Bubble_chart, Bar_chart} from './An';
import Text_card from './Text_card';
import Time_card from './Time_card';
import Sallybus_card from './Sallybus_card';
import Calendar_component from './Calendar_component';
import Toppers_component from './Toppers_component';
import Weather_widget from './Weather_widget';
import Daily_tasks from './Daily_tasks';
import { BottomNavigation } from '@material-ui/core';
import { ToastContainer, toast } from 'react-toastify';
import Footer from './Footer';

const Cards_area=()=>
{

 return(
    <>
         <div className="Card_div container-fluid col-12">
                <p style={{marginLeft:"20px"}}>Dashboard |<span style={{fontSize:"16px", fontWeight:"normal", color:"lightgray"}}>Teachers</span></p>
                <br/>
               
                         <div className="row">
                                <div className="col-sm-10 col-md-6 col-lg-3 col-10 mx-auto">
                                        <Card_component title={<Text_card/>}/>
                                    </div>
                                <div className="col-sm-10 col-md-6 col-lg-3 col-10 mx-auto">
                                        <Card_component  height="1340px" title={<Doughnut_chart />} />
                                    </div>
                                <div className="col-sm-10 col-md-6 col-lg-3 col-10 mx-auto">
                                        <Card_component  height="180px" title={<Sallybus_card/>} />
                                    </div>
                                <div className="col-sm-10 col-md-6 col-lg-3 col-10 mx-auto">
                                        <Card_component  height="110px" title={<Time_card/>} />
                                    </div>
                        </div>
                        <div className="row">
                                <div className="col-sm-10 col-md-12 col-lg-12 col-10 big_card_outer mx-auto">
                                        <Card_component title={<Line_chart/>}/>
                                </div>
                        </div>
                        <div className="row">
                                <div className="col-sm-10 col-md-6 col-lg-4 col-10 mx-auto">
                                    <Lower_card_component lower_title={"Statistics"} points_upper={324} />
                                    </div>
                                <div className="col-sm-10 col-md-6 col-lg-4 col-10 mx-auto">
                                    <Lower_card_component lower_title={"Statistics"} points_upper={324} />
                                    </div>
                                <div className="col-sm-10 col-md-6 col-lg-4 col-10 mx-auto">
                                        <Lower_card_component lower_title={"Statistics"} points_upper={324} />
                                </div>
                        </div>
                        <div className="row calender_row mx-auto">
                           
                            <div className="weather_widget col-10 col-sm-10 col-md-6 mx-auto mb-4">
                                    <Calendar_component/>

                            </div>
                            <div className="col-10  col-sm-10 col-md-6 col-lg-6 daily_task_div mx-auto">
                                    <Daily_tasks/>
                            </div>
                        </div>
                        <div className="row toppers_data_div mt-4">
                            <div className="col-10 col-sm-10 col-md-10 col-lg-8 mx-auto">
                            <div className="toppers_heading">
                                    <p className="text-center">Toppers of The Week!</p>
                            </div>
                            <Toppers_component/>
                            </div>
                            <div className="calender_div border-radius-2 col-10 col-sm-10 col-md-10 col-lg-4 mx-auto">
                               <Weather_widget/>
                            </div>
                        </div>
                     
                        <div className="row mt-4" style={{marginBottom:"-60px"}}>
                           <div className="col-12" style={{zIndex:"1000"}}>
                               <Footer/>
                           </div>
                         </div>
          </div>
    </>
    );
}
export default Cards_area;