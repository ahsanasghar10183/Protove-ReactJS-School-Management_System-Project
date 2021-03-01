import React from 'react';
import Announcements from './Announcements';
import Footer from './Footer';
import {useState} from 'react';
import axios from 'axios';
import {useEffect} from 'react';
const Upload_data=()=>{
    const no_of_rows = [1,2,3,4,5,6,7,8,9,10];
    return(
    <>
         <div className="table_div col-12">
                <table class="table table-responsive-lg" style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                    <thead style={{backgroundColor:"darkgray",color:"rgb(51,56,103)"}}>
                            <tr>
                            <th scope="col">Roll No</th>
                            <th scope="col">Student Name</th>
                            <th scope="col">Session :</th>
                            <th scope="col">Obtained Marks</th>
                            <th scope="col">Total Marks</th>
                            <th scope="col">Grade</th>
                            </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Ahsan Asghar</td>
                            <td>BSSE(5th) A</td>
                            <td><input type="number" placeholder="Enter Marks"/></td>
                            <td><input type="number" placeholder="Enter Total Marks"/></td>
                            <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        
                        <tr>
                            <th scope="row">1</th>
                                <td>Ahsan Asghar</td>
                                <td>BSSE(5th) A</td>
                                <td><input type="number" placeholder="Enter Obtained Marks"/></td>
                                <td><input type="number" placeholder="Enter  Total Marks"/></td>
                                <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                               
                            </tr>
                        <tr>
                            <th scope="row">1</th>
                                <td>Ahsan Asghar</td>
                                <td>BSSE(5th) A</td>
                                <td><input type="number" placeholder="Enter Obtained Marks"/></td>
                                <td><input type="number" placeholder="Enter Total Marks"/></td>
                                <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                                <td>Ahsan Asghar</td>
                                <td>BSSE(5th) A</td>
                                <td><input type="number" placeholder="Enter Obtained Marks"/></td>
                                <td><input type="number" placeholder="Enter Total Marks"/></td>
                                <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                                <td>Ahsan Asghar</td>
                                <td>BSSE(5th) A</td>
                                <td><input type="number" placeholder="Enter Obtained Marks"/></td>
                                <td><input type="number" placeholder="Enter Total Marks"/></td>
                                <div>
                                <select style={{backgroundColor:"#1d1f3e", color:"lightgray"}}>
                                                    <optgroup>
                                                        <option>A+</option>
                                                        <option>A</option>
                                                        <option>B</option>
                                                        <option>C</option>
                                                        <option>D</option>
                                                        <option>F</option>
                                                    </optgroup>
                               </select>
                                </div>
                        </tr>
                    </tbody>
                </table>
           </div>
            <div className="row mb-3">
                <div className="col-12">
                <Announcements/>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                <Footer/>
                </div>
            </div>
    </>
    );
}
export default Upload_data;