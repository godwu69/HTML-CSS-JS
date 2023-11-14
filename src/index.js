import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Login from './components/Login';
// import Hello from './react-home';
import PropTypes from 'prop-types';
// import MyAppWithProps from './components1/MyAppWithProps';
// import RegistrationForm from './components1/RegisterForm';
// import Counter from './Counter';
// import Counter1 from './Counter1';
class Test extends React.Component{
  //Hàm khởi tạo Object => Step 1: Initialization
  constructor(props){
    super(props)
    //super: gọi các phương thức khởi tạo(constructor) của lớp(class) cha. Dùng lại hàm khởi tạo của lớp cha.
    //this: gọi đối tượng(object) hiện tại của class.
    this.state = {hello: "world!"};  
  }
  //Step 2: Mounting
  componentDidMount(){
    console.log("componentDidMount()");
  }
  //Step 3: Updating
  changeState(){
    this.setState({hello: "Fpt-Aptech"});
  }

  render(){
    return(
      <div>
        <h1>Hello{this.state.hello}</h1>
        <h2>
          <a onClick={this.changeState.bind(this)}>Click here!</a>
        </h2>
      </div>
    );
  }
  //Step 4: Unmounting
  shouldComponentUpdate(nextProps, nextState){
    console.log("shouldComponentUpdate()");
    return true;
  }
  componentDidUpdate(){
    console.log("componentDidUpdate()");
  }
}
// componentClassName.propTypes:import kieu du lieu cua cac property


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login></Login> */}
    {/* <Hello></Hello> */}
    {/* <Test/> */}
    {/* <MyAppWithProps></MyAppWithProps> */}
    {/* <RegistrationForm></RegistrationForm> */}
    {/* <Counter></Counter> */}
    {/* <Counter1></Counter1> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();