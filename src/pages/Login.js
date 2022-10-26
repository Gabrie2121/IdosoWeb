import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";
import "../styles/global.css";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Text = styled.span`
  display: flex;
  justify-content: center;
  color: #666666;
  font-size: 20pt;
`;

function UsuarioCadastro() {
  const [input, setInput] = useState({
    Email: "",
    Password: "",
  });

  const [aviso, setAviso] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
=======
    const handleSubmit = (event) => {
        event.preventDefault();
    
        const user = {
          email: input.Email,
          password:  input.Password
        };
    
        axios.post(`http://localhost:9999/auth`,JSON.stringify(user),{headers: { 'Content-Type': 'application/json'}})
          .then(res => {
            console.log(res);
            console.log(res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('idUsuario', res.data.userId);
            window.location.href = "/profile";    
          })
          .catch((error) => {
            // Trate o erro aqui.
            console.log('Whoops! Houve um erro.', error.message || error)
            setAviso("Usuário e Senha não encontrados!");
          })
      };

    const user = {
      email: input.Email,
      password: input.Password,
    };

    axios
      .post(`http://localhost:9999/auth`, JSON.stringify(user), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        window.location.href = "/profile";
      })
      .catch((error) => {
        // Trate o erro aqui.
        console.log("Whoops! Houve um erro.", error.message || error);
        setAviso("Usuário e Senha não encontrados!");
      });
  };

  const [valuesPassword, setPassword] = useState({
    showPassword: false,
    showPasswordConfirm: false,
  });

  const handleClickShowPassword = () => {
    setPassword({
      ...valuesPassword,
      showPassword: !valuesPassword.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function onChange(ev) {
    const { name, value } = ev.target;
    console.log(name, value);

    if ([name] == "email") {
      setInput({ ...input, Email: value });
    } else if ([name] == "password") {
      setInput({ ...input, Password: value });
    }
  }

  return (
    <div>
      <Header linkOne="/" linkTwo="/" linkThree="/" linkFour="/" />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        component="form"
        sx={{ "& .MuiTextField-root": { m: 1, p: 1, width: "25ch" } }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>Login</Text>
          <TextField
            name="email"
            required
            id="outlined-required"
            label="Alterar E-mail"
            onChange={onChange}
            value={input.Email}
          />
          <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
            <OutlinedInput
              name="password"
              id="outlined-adornment-password"
              type={valuesPassword.showPassword ? "text" : "password"}
              onChange={onChange}
              value={input.Password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {valuesPassword.showPassword ? (
                      <VisibilityOff />
                    ) : (
                      <Visibility />
                    )}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
            {aviso && <span className="err">{aviso}</span>}
          </FormControl>
          <Button
            name="One"
            variant="contained"
            onClick={handleSubmit}
            sx={{
              borderRadius: 100,
              borderWidth: 1,
              backgroundColor: "#5BB159",
            }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </div>
  );
}

export default UsuarioCadastro;
