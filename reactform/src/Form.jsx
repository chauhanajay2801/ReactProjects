import { React, useState ,useEffect } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setinputData] = useState(data);
  const [flag, setflag] = useState(false)
  useEffect(() => {
    console.log("Registered");
  }, [flag])
  

  function handleData(e){
    setinputData({...inputData,[e.target.name]:e.target.value});
    console.log(inputData);
  }

  function handleSubmit(e){
    e.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
        alert("All Fields are Mandatory");
    }
    else{
        setflag(true)

    }
  }
  return (
    <>
    <pre>{(flag)?<h2 className="ui-define">Hello {inputData.name},You have registered successfully</h2>:""}</pre>
      <form className="container" onSubmit={handleSubmit}>
        <div className="header">
          <h1>Registration Form</h1>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            name="name"
            value={inputData.name}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Email Id"
            name="email"
            value={inputData.email}
            onChange={handleData}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Enter Your Password"
            name="password"
            value={inputData.password}
            onChange={handleData}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}

export default Form;
