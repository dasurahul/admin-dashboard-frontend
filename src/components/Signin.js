import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

const Signin = () => {
  const [input, setInput] = useState({ emailAddress: "", password: "" });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/users/signin", {
        emailAddress: input.emailAddress,
        password: input.password,
      })
      .then(() => alert("Signin Successfull"))
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Typography style={{ marginBottom: "30px" }}>Signin</Typography>
      <form onSubmit={submitHandler}>
        <TextField
          name="emailAddress"
          label="Email Address"
          variant="standard"
          fullWidth
          style={{ marginBottom: "30px" }}
          value={input.emailAddress}
          onChange={inputHandler}
        />
        <TextField
          name="password"
          label="Password"
          variant="standard"
          fullWidth
          style={{ marginBottom: "30px" }}
          value={input.password}
          onChange={inputHandler}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ marginBottom: "30px" }}
        >
          Signin
        </Button>
      </form>
      <Typography align="center">
        Don't have an account? <Link to="/">Signup</Link>
      </Typography>
    </>
  );
};

export default Signin;
