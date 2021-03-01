import React from 'react';
import {Bar,Line, Doughnut, Bubble} from 'react-chartjs-2';
const Doughnut_chart=()=>
{
    const data={
        
        datasets:[
            {
                data: [4,5,6],
                backgroundColor:["#2477ff","#fd5f00","#58d777"],
            }

        ],
        labels:['jan', 'feb','march']
    }
    const option={
        legend: {
            position:'right',
            display: true,
            lines:false,
            labels: {
                fontSize:12,
                fontColor:"lightgray",
                boxWidth:25
            }
          
        },
        title:{
            display:false,
            text:"Graphics",
            responsive:"true",
            maintainAspectRatio:"true",
            width:"10rem"
        },
        scales:{
            yAxes:[
                {
                    gridLines:{
                        display:false
                    },
                    ticks:{
                        display:false,
                        min:0,
                        max:10,
                        step:5
                    }
                }
            ]
        },
       
    }
    return(
        <>
        <Doughnut type={Doughnut}  style={{borderWidth:"0px"}} data={data} options={option} />
        </>
    );
}
const Bubble_chart=()=>
{

    const data={
        datasets:[
            {
                label:'Sales in 2022',
                data: [1,2,3],
                backgroundColor:"white",
                pointStyle:"Yes",
                borderColor:"green"
            },
            {
                label:'Sales in 2019',
                data: [1,10,3],
                backgroundColor:"white",
                borderColor:"Blue",
                pointStyle:"Yes"

            },
            {
                label:'Sales in 2018',
                data: [0,2,3],
                backgroundColor:"white",
                borderColor:"red",
                pointStyle:"Yes"


            }

        ],
        labels:['January', 'Feb', 'March', 'April', 'May', 'Jun','July','Aug']
    }
    const option={
        legend: {
            position:'right',
            display: false,
            fill:false,
            labels: {
                fontColor: 'rgb(255, 99, 132)',
                fontColor:"yellow",
                fontSize:10,
                boxWidth:15
            }
        },
        title:{
            display:"false",
            text:"Graphics",
            responsive:"true",
            maintainAspectRatio:"true",
            width:"10rem"
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:10,
                        step:5
                    }
                }
            ]
        }
    }

    return(
        <>
           <Bubble data={data} options={option} />
        </>
    );
}

const Line_chart=()=>
{

    const data={
        datasets:[
            {
                label:'Sales in 2022',
                data: [1,2,5,1,5,6,7,8],
                backgroundColor:"white",
                fill:false,
                borderColor:"#58d777"
            },
            {
                label:'Sales in 2019',
                data: [1,10,3,3,5,1,7,1],
                backgroundColor:"white",
                borderColor:"#fd5f00",
                fill:false

            },
            {
                label:'Sales in 2018',
                data: [0,2,3,9,5,2,7,8],
                backgroundColor:"white",
                borderColor:"#2477ff",
                fill:false


            }

        ],
        labels:['January', 'Feb', 'March', 'April', 'May', 'Jun','July','Aug']
    }
    const option={
        legend: {
            position:'top',
            display: true,
            fill:false,
            labels: {
                fontColor: 'rgb(255, 99, 132)',
                fontColor:"lightgray",
                fontSize:10,
                boxWidth:18
            }
        },
        title:{
            display:"false",
            text:"Graphics",
            responsive:"true",
            maintainAspectRatio:"true"
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:10,
                        step:5
                    }
                }
            ]
        }
    }

    return(
        <>
           <Line data={data} height="100px"options={option} />
        </>
    );
}
const Bar_chart=()=>
{

    const data={
        datasets:[
            {
                label:'Sales in 2022',
                data: [1,2,5,1,5,6,7,8],
                backgroundColor:"white",
                fill:false,
                borderColor:"#58d777"
            },
            {
                label:'Sales in 2019',
                data: [1,10,3,3,5,1,7,1],
                backgroundColor:"white",
                borderColor:"#fd5f00",
                fill:false

            },
            {
                label:'Sales in 2018',
                data: [0,2,3,9,5,2,7,8],
                backgroundColor:"white",
                borderColor:"#2477ff",
                fill:false


            }

        ],
        labels:['January', 'Feb', 'March', 'April', 'May', 'Jun','July','Aug']
    }
    const option={
        legend: {
            position:'top',
            display: true,
            fill:false,
            labels: {
                fontColor: 'rgb(255, 99, 132)',
                fontColor:"lightgray",
                fontSize:10,
                boxWidth:18
            }
        },
        title:{
            display:"false",
            text:"Graphics",
            responsive:"true",
            maintainAspectRatio:"true"
        },
        scales:{
            yAxes:[
                {
                    ticks:{
                        min:0,
                        max:10,
                        step:5
                    }
                }
            ]
        }
    }

    return(
        <>
           <Bar data={data} height="100px" options={option} />
        </>
    );
}
export default Line_chart;
export {Line_chart,Doughnut_chart,Bubble_chart,Bar_chart};