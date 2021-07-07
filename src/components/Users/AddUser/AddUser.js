import React, { useState } from "react";
import Button from "../../UI/Button";
import Card from "../../UI/Card";
import classes from "../AddUser/AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [user, setUser] = useState({username:"",age:""});
  const addUserHandler = (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
      
    }
    if (age < 1) {
      return;
    }
   
    
    props.uploadStateFunction(user)
    console.log(user);
  };
  const usernameHandler = (e) => {
 
    console.log(user)
    setUser(user=> {return {...user,[e.target.name]:e.target.value,}
    
    
     } );
  };
  const ageHandler = (e) => {
    console.log(user);
    setUser({age:e.target.value});
    

  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          onChange={usernameHandler}
          value={username}
        />
        <label htmlFor="age">Age</label>
        <input
          id="age"
          type="number"
          name="age"
          onChange={ageHandler}
          value={age}
        />
        <Button type={"submit"} onclick={addUserHandler}>
          Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
