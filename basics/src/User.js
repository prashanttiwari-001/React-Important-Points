// constructor always run first . render hone se pahle hi constructor bn jata hai
// render => hamare data ko represent karne ke liye use hota hai
// aur render kb kb update hota hai
// 1. jb hamara component banega tb 
// 2. state update hoge tb 
// 3. ya fir props update hogi tb
// import React from "react";

// class User extends React.Component{
//     constructor(){
//         super()
//         this.state={
//            email:"prashant01@gmail.com"
//         }
//     }
    
//     render(){   
//         console.warn("render",this.state.email)
//         return(
//             <div>
//                 <h1>Class Component</h1>
//                 <button onClick={()=>this.setState({email:"pt@gmail.com"})}>Update</button>
//             </div>
//         )
//     }
// }
// export default User;