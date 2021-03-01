import React from 'react';
import {useState} from 'react';
const Insert_marks_heading=()=>{
    const [subjecthook, setSubjecthook]= useState("");

    return(
        <>
            <div className="row">
                <div className="col-12 ">
        
                    <div className="insert_heading">
                            <div className="d-inline-block col-sm-12 col-md-12 col-lg-6"><h4>Insert Students Details </h4></div>
                            <div className="d-inline-block upload_csv col-sm-12 col-md-12 col-lg-6"><input style={{color:"lightblue"}} type="file" name="File Upload" id="txtFileUpload" accept=".csv" />
                            <div className="mt-1">Select The Subject: 
                                    <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>Web Engineering</option>
                                                        <option>Software Construction</option>
                                                        <option>Fomal Methods in SE</option>
                                                        <option>Theory of Automata</option>
                                                        <option>Data Communication</option>
                                                        <option>Advance Computer Programming</option>
                                                    </optgroup>
                                    </select>
                            </div></div>
                </div>
                </div>
            
              <br/>
           </div>
        </>
    );
}
export default Insert_marks_heading;