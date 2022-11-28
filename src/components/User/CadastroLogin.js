import React, { useState,useEffect  } from "react";
import styled from "styled-components";
import foto from "../../assets/UserDefault.png";
import editarFoto from "../../assets/Usuario/iconeEditar.png";
import "../../styles/global.css";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import TextField from "@mui/material/TextField";
import { useAuth } from "../../providers/auth";
import Alert from "@mui/material/Alert";
import axios from "axios";

const ImageUser = styled.img`
  width: 25%;
  height: 25%;
  border-radius: 100;
  border-color: "white";
  border-width: 1;
`;

const DivCampoFoto = styled.div`
  width: 100%;
  height: 35%;
`;

const ProfieImage1 = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 160px;
  margin-top: 30px;
`;

const EditarFoto = styled.img`
  width: 30px;
  height: 30px;
  margin-left: -38px;
  margin-top: 140px;
  position: absolute;
`;

const ButttonEditarFoto = styled.button`
  width: 50px;
  height: 50px;
  margin-left: -40px;
  border-radius: 30px;
  background-color: #a9f0a6;
  border: 0px solid transparent;
`;

function FormCadastro() {

  localStorage.removeItem('idUsuario');

  const { Usuario, setUsuario } = useAuth();

  const [input, setInput] = useState({
    Email: Usuario.Email,
    Password: Usuario.Password,
    ConfirmPassword: Usuario.ConfirmPassword,
    NotifyEmail: Usuario.NotifyEmail,
    Nome: Usuario.Nome,
    Sobrenome: Usuario.Sobrenome,
    Documento: Usuario.Documento,
    DataNascimento: Usuario.DataNascimento,
    TipoUsuario: Usuario.TipoUsuario,
    Sexo: Usuario.Sexo,
    CEP: Usuario.CEP,
    UF: Usuario.UF,
    Logradouro: Usuario.Logradouro,
    Complemento: Usuario.Complemento,
    Apelido: Usuario.Apelido,
    Foto: Usuario.Foto,
    Cidade: Usuario.Cidade,
    Biografia: Usuario.Biografia
  });  

  const [valuesPassword, setPassword] = useState({
    showPassword: false,
    showPasswordConfirm: false,
  });

  const [error, setError] = useState({
    password: "",
    confirmPassword: "",
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

  const handleClickShowConfirmPassword = () => {
    setPassword({
      ...valuesPassword,
      showconfirmPassword: !valuesPassword.showconfirmPassword,
    });
  };

  const handleMouseDownConfirmPassword = (event) => {
    event.preventDefault();
  };

  const validateprops = (e) => {
    let { name, value } = e.target;
    setError((prev) => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "password":
          if (input.Password && value !== input.ConfirmPassword) {
            stateObj["confirmPassword"] =
              "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = Usuario.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (input.Password && value !== input.ConfirmPassword) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }

      return stateObj;
    });
  };

  function onChange(ev) {
    const { name, value } = ev.target;

    if ([name] == "email") {
      setInput({ ...input, Email: value });
    } else if ([name] == "password") {
      setInput({ ...input, Password: value });
    } else if ([name] == "confirmPassword") {
      setInput({ ...input, ConfirmPassword: value });
    } else if ([name] == "notifyEmail") {
      setInput({ ...input, NotifyEmail: value });
    }
    setUsuario(input);
  };

  const [selectedFile,setFile] = useState();

  function fileSelectedHandler(ev){
    setFile(ev.target.files[0]);  
  }

  function fileUploadHandler(){
    const fd = new FormData();
    fd.append('image',selectedFile);
    setInput({ ...input, Foto: fd });
    setUsuario(input);
  }

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <DivCampoFoto>
          <ProfieImage1 src={foto} />
          {/* <input type={"file"} onChange={fileSelectedHandler}></input>
          <button onClick={fileUploadHandler}>Upload</button> */}
          <ButttonEditarFoto/>
          <EditarFoto src={editarFoto} />
        </DivCampoFoto>
        <TextField
          name="email"
          required
          id="outlined-required"
          label="E-mail"
          onChange={onChange}
          value={input.Email}
        />
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="notifyEmail"
                defaultChecked
                color="success"
                onChange={onChange}
                value={input.NotifyEmail}
              />
            }
            label="Receber notificações no e-mail"
          />
        </FormGroup>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={valuesPassword.showPassword ? "text" : "password"}
            onChange={onChange}
            onBlur={validateprops}
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
        </FormControl>
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-Confirmpassword">
            Confirmar Senha
          </InputLabel>
          <OutlinedInput
            name="confirmPassword"
            id="outlined-adornment-Confirmpassword"
            type={valuesPassword.showconfirmPassword ? "text" : "password"}
            onChange={onChange}
            onBlur={validateprops}
            value={input.ConfirmPassword}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {valuesPassword.showconfirmPassword ? (
                    <VisibilityOff />
                  ) : (
                    <Visibility />
                  )}
                </IconButton>
              </InputAdornment>
            }
            label="confirmPassword"
          />
        </FormControl>
        {error.confirmPassword && (<Alert severity="error">{error.confirmPassword}</Alert>)}
      </Box>
    </div>
  );
}

export default FormCadastro;
