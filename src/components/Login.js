import React,{Component} from "react";
import './style.css';
// extends : kế thừa
// vd: A extends B; thì B là lớp(class) cha của A
//Login là kế thừa lại những Method, property trong lớp Component
class Login extends Component
{
    render(){
        return(
            <div>
                <h2>Login Form</h2>
                Username: <input type="text"/>
                <br/>
                Password: <input type="password"/>
                <br/>
                <button>Login</button>
            </div>
        );
    }
}

export default Login;