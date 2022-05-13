import { Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { useState } from "react";

import axios from "axios";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    emailAddress: "",
    address: "",
    password: "",
    confirmPassword: "",
  });
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setInput({ ...input, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (input.password === input.confirmPassword) {
      axios
        .post("http://localhost:3000/users/signup", {
          name: input.name,
          emailAddress: input.emailAddress,
          address: input.address,
          password: input.password,
        })
        .then((response) => {
          console.log(response);
          alert("Signup Successfully");
          navigate("/signin");
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <>
      <Typography style={{ marginBottom: "30px" }}>Signup</Typography>
      <form onSubmit={submitHandler}>
        <TextField
          name="name"
          label="Name"
          variant="standard"
          fullWidth
          style={{ marginBottom: "30px" }}
          value={input.name}
          onChange={inputHandler}
        />
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
          name="address"
          label="Address"
          variant="standard"
          fullWidth
          style={{ marginBottom: "30px" }}
          value={input.address}
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
        <TextField
          name="confirmPassword"
          label="Confirm Password"
          variant="standard"
          fullWidth
          style={{ marginBottom: "30px" }}
          value={input.confirmPassword}
          onChange={inputHandler}
        />
        <Button
          type="submit"
          variant="contained"
          fullWidth
          style={{ marginBottom: "30px" }}
        >
          Signup
        </Button>
      </form>
      <Typography align="center">
        Already have an account? <Link to="/signin">Signin</Link>
      </Typography>
    </>
  );
};

export default Signup;
