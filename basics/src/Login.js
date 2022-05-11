// import { useState } from "react";

// function Login(){
//     const[user,setUser]=useState("")
//     const[password,setPassword]=useState("")
//     // const[userErr,setUserErr]=useState(false)
//     // const[passErr,setPassErr]=useState(false)
//     function RefreshHandler(e){
//         if(!user || !password){
//             alert("Fill ID and Password")
//         }else{
//             console.warn(user,password)
//         }
//         e.preventDefault()
//     }
//     function ValidId(e){
//         let item = e.target.value
//         // if(item.length<3){
//         //     setUserErr(true)
//         // }
//         // else{
//         //     setUserErr(false)
//         // }
//         setUser(item)
        
//     }
//     function ValidPassword(e){
//         let item = e.target.value
//         // if(item.length<3){
//         //     setPassErr(true)
//         // }
//         // else{
//         //     setPassErr(false)
//         // }
//         setPassword(item)
        
//     }
//     return(
//         <div>
//             <h1>Log-In Page</h1>
//             <form onSubmit={RefreshHandler}>
//                 <input type="text" placeholder="Enter-ID" onChange={ValidId} />
//                 {/* {userErr?<span>id invalid</span>:""} */}
//                 <br/>
//                 <br/>
//                 <input type="password" placeholder="Password" onChange={ValidPassword}/>
//                 {/* {passErr?<span>password invalid</span>:""} */}
//                 <br/>
//                 <br/>
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }
// export default Login;