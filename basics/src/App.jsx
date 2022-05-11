// import { useState } from "react";


// import { Component } from "react";


// import { Component } from "react";

// function App(){
//     const[state,setState]=useState(0) 
//     function Increase(){

//         setState(state+1)
       
//     }
//     function Decrease(){
//         if(state ===0){
//         setState(0)            
//         }else{

//             setState(state-1)
//         }
//     }
//     return(
//         <div>
//             <h1>{state}</h1>
//             <button onClick={Increase}>Click Me</button>
//             <button onClick={Decrease}>Click Me</button>
//         </div>
//     )
// }


// using class component

// class App extends Component {
//     constructor(){
//         super();
//         this.state={
//            number:0
//         }
//     }
//     Increase(){
//         this.setState({number:this.state.number+1})
//      }
//     Decrease(){
//         if(this.state.number<=0){
//             this.setState({number: -5})
//             // alert("not allowed")
//         }else{

//             this.setState({number:this.state.number-1})
//         }
//      }
//     render(){
        
//         return(
//             <div>
//                 <h1>{this.state.number}</h1>
//                 <button onClick={()=>this.Increase()}>Click</button>
//                 <button onClick={()=>this.Decrease()}>Click</button>
//             </div>
//         )
//     }
// }



// Props with function component
// import Student from "./Student";

// function App(){

//     return(
//         <div>
//             <h1>Props in React</h1>
//         <Student name= "Prashant" email = "Prashant123@gmail.com"/>
//         <Student name= "Shivam" email = "Shivam@gmail.com" />
//         <Student name= "Rahul" email = "rahul4@gmail.com"/>
//         <Student name= "Shaym" email = "shaymB@gmail.com"/>
//         </div>
//     )
// }


// import React from "react";
// import Student from "./Student";
// class App extends React.Component{
//   constructor(){
//       super()
//     this.state={
//         name:"Prashant"
//     }
//   }
//     render(){
//         return(
        
//             <div>
//                 <h1>Props!</h1>
//                 <Student name ={this.state.name} email="prashant@gmail.com"/>
//                 <button onClick={()=>this.setState({name:"Prashant Tiwari"})}>Update Name</button>
//             </div>
//         )
//     }
        
    
// }



// create input tag and enter button 
// import { useState } from "react";
// function App(){
//     const[state,setState]=useState(null)
//     const[enter,setEnter]=useState(false)
//     function Typeword(e){
//         setState(e.target.value)
//         setEnter(false)
//     }
//     return(
//         <div>
//             {
//                 enter? <h1>{state}</h1>:null
//             }
//             <input type="text" onChange={Typeword}/>
//             <button onClick={()=>setEnter(true)}>Enter</button>   
//         </div>
//     )
// }


// toogle
// import { useState } from "react";
// function App(){
//     const[state,setState]= useState(true)
//     return(
//         <div>
//             {
//                 state?<h1>hello</h1>:null
//             }
            
//             {/* <button onClick={()=>setState(false)}>hide</button>
//             <button onClick={()=>setState(true)}>show</button> */}
            
//             <button onClick={()=>setState(!state)}>Toggle</button>
//         </div>
//     )
// }

// import {useState} from 'react';
// function App(){
//     const[name,setName]=useState("");
//     const[tcn,setTcn] = useState(false);
//     const[interest,setInterest]= useState("");

//     function getFormData(e){
//         console.warn(name,tcn,interest)
//         e.preventDefault()
//     }
//     return(
//         <div>
//             <h1>hello submit the form</h1>
//             <form onSubmit={getFormData}>
//             <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
//             <br />
//             <br />
//             <select onChange={(e)=>setInterest(e.target.value)} >
//                 <option >Select Option</option>
//                 <option >Movies</option>
//                 <option >Cartoon</option>
//             </select>
//             <br />
//             <br />
//             <input type="checkbox" onChange={(e)=>setTcn(e.target.checked)}/> <span>Accept Terms and Conditions</span>
//             <br />
//             <br />
//             <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }

// profile work
// import React from "react";
// import Profile from "./Profile"
// function App(){
//     return(
//         <div>
//             <Profile/>
//         </div>
//     )
// }


// import React from "react";
// import Login from "./Login";
// function App(){
//     return(
//         <div>
//             <Login/>
//         </div>
//     )
// }


// function pass as a props
// import Student from "./Student";
// function App(){
//     function EveryWhereUse(){
//         alert("I am using every where")
        
//     }
//     return(
//         <div>
//             <Student data={EveryWhereUse}/>
//             <Student data={EveryWhereUse}/>
//             <Student data={EveryWhereUse}/>
//             <Student data={EveryWhereUse}/>
//         </div>
//     )
// }

// import { useState } from "react";
// import User from "./User";
// function App(){
//     // const[name,setName]=useState("Prashant")
//     return(
//         <div>
//             <User />
//             {/* <button onClick={()=>setName("Tiwari")}>Update Name</button> */}
//         </div>
//     )
// }


// component Did Mount -> jb bhi hamara html ready ho jata hai uske baad hi component did mount call hota hai
// component did mount jb sara kuch call ho jata hai uske baad hi call hota hai
// component did mount ka best use api call karne ke liye hote hai jb html page ready ho jata hai uske baad api call karwate hai.
// import { Component } from "react";
// class App extends Component{
//     constructor(){
//         super()
//         this.state={
//             name:"Prashant"
//         }
//     }
//     componentDidMount(){
//         console.warn("coponentDidMount")
//     }
//     render(){
//         console.warn("render")
//         return(
//             <div>
//                 <h1>hi my name is {this.state.name}</h1>
//                 <button onClick={()=>{this.setState({name:"Tiwari"})}}>update</button>
//             </div>
//         )
//     }
// }


// component Did Update tabhi chalega jb state ya props update hoga
// shouldcomponentupdate always runs first you have to set true and false in it.
// import React from 'react'
// class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             count:0
//         }
//     }
//     // componentDidUpdate(preProps,preState,snapshot){
//     //     console.warn("componentDidUpdate",preProps)
        
//     // }
//     shouldComponentUpdate(){
//         console.warn("shouldComponentUpdate",this.state.count)
//         return true;
//     }
//     render(){
//         // console.warn("render")
//         return(
//             <div>
//                 <h1>Hyyyy {this.state.count}</h1>
//                 <button onClick={()=>{this.setState({count:this.state.count+1})}}>update</button>
//             </div>
//         )
//     }
// }


// componentwillunmount life cycle method
// import { Component } from "react";
// import Student from "./Student";
// class App extends Component{
//     constructor(){
//         super()
//         this.state={
//            show:true
//         }
//     }
//     render(){
//         return(
//             <div>
//                 {
//                  this.state.show? <Student/>:<h1>Child component removed</h1>   
//                 }
//                 <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle Child</button>
//             </div>
//         )
//     }
// }


// Hooks using state.
// import React from 'react'
// import Hook from './Hook';
// function App(){
//     return(
//         <div>
//            < Hook/>
//         </div>
//     )
// } 

// hooks using props
import Hook from "./Hook";
import React,{ useState } from "react";
function App(){
    const[data,setData]=useState(10)
    const[count,setCount]=useState(100)
    return(
        <div>
            <Hook count={count} data={data}/>
            <button onClick={()=>setData(data+1)}>Update Data</button>
            <button onClick={()=>setCount(count+1)}>Update Count</button>
        </div>
    )
}

export default App;