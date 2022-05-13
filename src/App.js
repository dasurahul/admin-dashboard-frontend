import { Container, Typography } from "@mui/material";

import Signup from "./components/Signup";
import Signin from "./components/Signin";

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <Typography align="center" style={{ marginBottom: "30px" }}>
        Admin Dashboard Management System
      </Typography>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </Container>
  );
};

export default App;
