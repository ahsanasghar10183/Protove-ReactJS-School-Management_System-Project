import React from 'react';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import {Link} from 'react-router-dom';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Task_modal from './Task_modal';
import Insert_page from './Insert_page';
import Main from './Main';
const Sidenavbar=()=>
{
return(
<>
<div className="sidebar_div"  id="side_bar_links" aria-controls="side_bar_links" aria-expanded="false" aria-label="Toggle navigation">
<ul className="nav flex-column">

  <li className="nav-item">
    <Link className="nav-link active dashborad_link" aria-current="page" to="/Main"><DashboardIcon fontSize="large" style={{paddingRight:"5px"}}/>Dashboard</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link">Active</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="/Insert_page">Add Data</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#">Update Data</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#">Delete Data</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#">Show Data</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#"> <button type="button" classNameName="add_task_button" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Add Tasks</button></Link>
    <Task_modal/>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#">Google Maps</Link>
  </li>
  <li className="nav-item">
    <Link className="nav-link" to="#">Log Out</Link>
  </li>
</ul>
</div>
</>
    );
}

export default Sidenavbar;
