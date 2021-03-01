import React from 'react';
import { useState } from 'react';
import axios from 'axios';
const Task_modal=()=>
{
    const[taskval, setTaskval]=useState({
        TName:"",
        Description:"",
        Time:""
    });
    const input_val=(event)=>
    {
        const {name, value}=event.target;
        setTaskval((preValue)=>{
            return{
                ...preValue,
                [name]:value,
            }
        });

    }
    const submit_task=(event)=>
    {
        event.preventDefault();
        const task_dataobj={
            Task_name:taskval.TName,
            Task_Desc:taskval.Description,
            Task_time:taskval.Time
        }
        axios.post(`http://Localhost/school_dashboard/insert.php`, task_dataobj).then(res=>console.log(res.data)).catch((error)=>console.log(error));
        setTaskval(
            {
            TName:"",
            Description:"",
            Time:""
            }
        );
    }
    // async function my_api()
    // {
    //     await axios.get('https://pokeapi.co/api/v2/ability/150/').then(res=> console.log(res.data));
    // }

    return(
        <>
        <form method="post" onSubmit={submit_task}>
        <div className="modal fade" id="task_modal_area" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" >
            <div className="modal-content task_model">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add New Task</h5>
                <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <form>
                <div className="mb-3">
                    <label for="recipient-name" className="col-form-label">Task Name</label>
                    <input type="text" className="form-control" id="recipient-name" name="TName" onChange={input_val} value={taskval.TName}/>
                </div>
                <div className="mb-3">
                    <label for="message-text" className="col-form-label">Description</label>
                    <input type="text" className="form-control" id="description" name="Description" onChange={input_val} value={taskval.Description}/>
                </div>
                <div className="mb-3">
                    <label for="message-text" className="col-form-label">Description</label>
                    <input type="time" className="form-control" id="time" name="Time" onChange={input_val} value={taskval.Time}/>
                </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal-dialog">Close</button>
                <button type="submit" className="btn btn-success">Save</button>
            </div>
            </div>
        </div>
        </div>
        </form>
        </>
    );
}
export default Task_modal;