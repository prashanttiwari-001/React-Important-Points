// Hooks {useState,useEffect} using state.
// esme hamne codition pass ke hai usEffect ke andar ki shirf data update ho tabhi chale. 
// import React,{useState,useEffect} from "react";
// function Hook(){
//     const[data,setData]=useState(0)
//     const[count,setCount]=useState(100)
//     useEffect(()=>{
//         console.warn("useEffect")
//     },[data])
//     return(
//         <div>
//             <h1>Data : {data}</h1>
//             <h2>Count : {count}</h2>
//             <button onClick={()=>{setData(data+1)}}>Update Data</button>
//             <button onClick={()=>{setCount(count+1)}}>Update Count</button>
//         </div>
//     )
// }


// Hooks using props
import React,{useEffect} from "react";
function Hook(props){
    useEffect(()=>{
        alert("count is "+ props.count)
    },[props.count])
    return(
        <div>
            <h1>Count Props: {props.count}</h1>
            <h1>Data Props: {props.data}</h1>
        </div>
    )
}
export default Hook;