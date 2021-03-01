import React, { useEffect } from 'react';
import axios from "axios";
import '../src/css/variables.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import {useState} from 'react';
const Dictionary_style={
    color:"lightgray",
    backgroundColor:'#1d1f3e'
}
const accord_style={
    color:'lightgray',
    backgroundColor:"#1d1f3e"
}
const accord_body_style={
    color:'lightgray',
}
const Dictionary=()=>{
    const [api_result_data, setApi_result_data]=useState({
        author1: "",
        definition1:"",
        author2: "",
        definition2:"",
        author3: "",
        definition3:"",
    });
     const  Search_data= async()=>{
        const seach_word_value= JSON.stringify(searchword.search_keyword); 
        console.log(typeof(seach_word_value)); 
        const options = {
        method: 'GET',
        url: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
        params: {term: seach_word_value},
        headers: {
            'x-rapidapi-key': '175adfff03mshcb516fc74f75123p1dd9cdjsn228cde9a1c9e',
            'x-rapidapi-host': 'mashape-community-urban-dictionary.p.rapidapi.com'
        }
        };
        const res= await axios.request(options).then(function (response) {
            console.log(response.data.list);
            setApi_result_data((prevdata)=>{
                return{
                    ...prevdata,
                    author1: response.data.list[0].author,
                    definition1:response.data.list[0].definition,
                    author2: response.data.list[1].author,
                    definition2:response.data.list[1].definition,
                    author3: response.data.list[2].author,
                    definition3:response.data.list[3].definition
                }
            });
        }).catch(function (error) {
            console.error(error);
        });
        console.log(typeof(searchresult));

    }
   
    const [searchword, setSearchword]= useState({
        search_keyword:""
    });
    const get_input_val=(event)=>{
        const {name, value}= event.target;
        setSearchword((prevdata)=>{
            return{
                ...prevdata,
                [name]:value
            }
        });
    }
        const form_submit=(event)=>
        {
            event.preventDefault();
            Search_data();
        }
    //Implementing the openword dictionary API here

  
    return(
     <>
         <div className="card" style={Dictionary_style}>
             <div className="card-body">
                 <div className="row">
                     <h5>Search Your Favourit Words!</h5>
                         <form onSubmit={form_submit}>
                             <div className="row">
                                <div className="col-lg-10 col-12 col-sm-12 ">
                                    <input style={{backgroundColor:"#3f405b", border:"none"}} value={searchword.search_keyword} type="text" onChange={get_input_val} className="form-control" name="search_keyword"placeholder="Enter Words..."/>
                                </div>
                                <div className="col-12 col-sm-12 col-lg-2">
                                    <button className="btn btn-success" type="submit">Search</button>
                                </div>
                             </div>
                             
                     </form>
                 </div>
                 <div className="row mt-3">
                       <div className="accordion accordion-flush" id="accordionFlushExample">
                            <div className="accordion-item" >
                                <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button collapsed" style={accord_style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Definition by: {api_result_data.author1}
                                </button>
                                </h2>
                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={accord_body_style}>{api_result_data.definition1}</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed" type="button" style={accord_style} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Definition by: {api_result_data.author2}
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={accord_body_style}>{api_result_data.definition1}</div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="flush-headingThree">
                                <button className="accordion-button collapsed" type="button" style={accord_style} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Definition by: {api_result_data.author3}
                                </button>
                                </h2>
                                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                <div className="accordion-body" style={accord_body_style}>{api_result_data.definition1}</div>
                                </div>
                            </div>
                        </div>
                     <br/>
                 </div>
             </div>
        </div>
    </>
  );
}
export default Dictionary;