import React, {useContext} from "react";
import Dashboard from "./Dashboard";
import Login from "./Login";
import AuthContext from "../context/AuthContext";

//with useContext hook is feature of context API and give a better look and minimize your code
const Navigation = () => {
    const ctx = useContext(AuthContext);
    return <div>
       {ctx.isLoggedIn ? <Dashboard/> : <Login/>}           
    </div>
}

// with Consumer
// const Navigation = () => {
//     return <div>
//         <AuthContext.Consumer>
//             {(ctx) => {
//                     return ctx.isLoggedIn ? <Dashboard/> : <Login/>
//                 }
//             }
//         </AuthContext.Consumer>
//     </div>
// }

export default Navigation