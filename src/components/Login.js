import React from "react";
import AuthContext from "../context/AuthContext";
import styles from './styles.css';

const handleSubmit = (ctx) => (ev) => {
    ev.preventDefault();
    ctx.setLoggedIn(true);
}

const Login = () => {
    return <AuthContext.Consumer>
    {
        (ctx) => {
            return <div>            
                <h3>Login</h3>
                <form onSubmit={handleSubmit(ctx)}>
                    <input type="text" name="username" placeholder="Username"/>
                    <input type="password" name="password" placeholder="Password"/>
                    <input type="submit" value="Login"/>
                </form>  
            </div>
        }
    }
    </AuthContext.Consumer>
}

export default Login;