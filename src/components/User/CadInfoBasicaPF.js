import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/global.css";
import { useAuth } from "../../providers/auth";
import "../../styles/global.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MaskedInput from "../User/MaskedInput";

const Text = styled.span`
  color: #666666;
`;

const DivAreaDescri = styled.div`
  width: 80%;
  height: 90%;
  margin-left: 380px;
  margin-top: -30px;
`;

const SpanBoxDescricao = styled.span`
  width: 360px;
  height: 200px;
  position: flex;
  margin-top: 60px;
  margin-left: -380px;
  font-weight: 500;
  color: gray;
`;

function FormCadastroInfoBasicasPF() {
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
    Celular: Usuario.Celular,
    Biografia: Usuario.Biografia
  });

  function onChange(ev) {
    const { name, value } = ev.target;
    if ([name] == "nome") {
      setInput({ ...input, Nome: value });
    } else if ([name] == "sobrenome") {
      setInput({ ...input, Sobrenome: value });
    } else if ([name] == "cpf") {
      setInput({ ...input, Documento: value });
    } else if ([name] == "sexo") {
      setInput({ ...input, Sexo: value });
    } else if ([name] == "celular") {
      setInput({ ...input, Celular: value });
    } else if ([name] == "biografia") {
      setInput({ ...input, Biografia: value });
    }
    setUsuario(input);
  }

  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          m: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            m: 1,
          }}
        >
          <TextField
            name="nome"
            required
            id="outlined-required"
            label="Nome"
            onChange={onChange}
            value={input.Nome}
          />
          <MaskedInput
            name="cpf"
            mask="999.999.999-99"
            value={input.Documento}
            onChange={onChange}
            label="CPF"
            required
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Data de Nascimento"
              value={input.DataNascimento}
              onChange={(newValue) => {
                setUsuario({ ...Usuario, DataNascimento: newValue });
                setInput({ ...input, DataNascimento: newValue });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            name="sobrenome"
            required
            id="outlined-required"
            label="Sobrenome"
            onChange={onChange}
            value={input.Sobrenome}
          />
          <MaskedInput
            name="celular"
            mask="(99)99999-9999"
            value={input.Celular}
            onChange={onChange}
            label="Celular"
          />
          <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel id="demo-simple-select-label">
              <Text>Sexo</Text>
            </InputLabel>
            <Select
              name="sexo"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={input.Sexo}
              label="Genero"
              onChange={onChange}
            >
              <MenuItem value={"M"}>Masculino</MenuItem>
              <MenuItem value={"F"}>Feminino</MenuItem>
              <MenuItem value={"O"}>Prefiro não informar</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <DivAreaDescri>
        <SpanBoxDescricao>
          <TextField
            id="descricaoField"
            name="biografia"
            label="Biografia"
            onChange={onChange}
            multiline
            value={input.Biografia}
          />
        </SpanBoxDescricao>
      </DivAreaDescri>
      </Box>
    </div>
  );
}
export default FormCadastroInfoBasicasPF;
