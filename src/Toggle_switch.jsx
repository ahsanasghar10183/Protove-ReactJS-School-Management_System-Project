import React from 'react';
import './css/Toggle_switch_style.scss';
const Toggle_switch=()=>{
    return(
        <>
        <label class="switch">
            <input type="checkbox"/>
            <span class="slider round"></span>
        </label>
        </>
    );
}
export default Toggle_switch;