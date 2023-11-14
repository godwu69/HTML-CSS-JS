import React,{useState} from "react";
function RegistrationForm(){
    //Kiểm soát hành vi của các thành phần trong form thông qua usestate components
    const [inputs,setInput] = useState({});
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        console.log(name);
        console.log(value);
        setInput(values => ({values,[name]:value}))
    }
    const handleSubmit = (event) => {
        //Kiểm soát bất đồng bộ sự kiện 
        //Đảm bảo các sự kiện KHÔNG diễn ra đồng thời
        event.preventDefault();
        console.log(inputs);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter your Name: <input 
                        type="text" 
                        name="username"
                        value={inputs.username || ""}
                        onChange={handleChange}
                        />
                </label>
                <br/>
                <label>
                    Enter your Age: <input 
                        type="number" 
                        name="age"
                        value={inputs.age || ""}
                        onChange={handleChange}
                        />
                </label>
                <br/>
                <input type="submit"/>
            </form>
        </div>
    )

}
export default RegistrationForm;