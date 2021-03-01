import React from 'react';
import {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
const Task=(prop)=>
{
    return(
        <>
       
        <div className="task_div">
            <div className="d-inline-block check_b">
            <input type="checkbox" style={{backgroundColor:"red"}}/>
            </div>
            <div className="d-inline-block">
            <p><small>{prop.task_name}</small></p>
            <p className="meeting_with_class">{prop.task_desc}</p>
            <p><small className="task_time">{prop.task_time}</small></p>
            </div>
         
        </div>
    </>
    );
}
const Daily_tasks=()=>
{
    const [taskval, setTaskval]= useState([]);
    useEffect(()=>{
        const View = async ()=>
        { 
          const res = await axios.get('http://localhost/school_dashboard/view.php');
          setTaskval(res.data);
        }
    View();
    console.log(taskval);
    },[]);
            return(
                <>
                <div className="main_task_container">
                    <div className="today_p">
                        <h3>Todays Tasks<span className="badge rounded-pill font-weight-normal bg-success float-right">5</span></h3>
                        {
                           taskval.map((curr, index)=>{
                            return(
                                <Task task_name={curr.TASK_NAME} task_desc={curr.TASK_DETAIL} task_time={curr.TIME} key={index}/>
                            );
                        })
                        }   
                        
        
                    </div>
        
                </div>
        
                </>
            );    

}
export default Daily_tasks;
export {Daily_tasks, Task};