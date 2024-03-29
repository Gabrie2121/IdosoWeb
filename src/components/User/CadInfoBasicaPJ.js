import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/global.css";
import { useAuth } from "../../providers/auth";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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

function FormCadastroInfoBasicasPJ() {
  const { Usuario, setUsuario } = useAuth();

  const [input, setInput] = useState({
    Email: Usuario.Email,
    Password: Usuario.Password,
    ConfirmPassword: Usuario.ConfirmPassword,
    NotifyEmail: Usuario.NotifyEmail,
    NomeFantasia: Usuario.NomeFantasia,
    Documento: Usuario.Documento,
    TipoUsuario: Usuario.TipoUsuario,
    CEP: Usuario.CEP,
    UFEmpresa: Usuario.UFEmpresa,
    Logradouro: Usuario.Logradouro,
    Complemento: Usuario.Complemento,
    Apelido: Usuario.Apelido,
    SituacaoTributaria: Usuario.SituacaoTributaria,
    Formacao: Usuario.Formacao,
    InscricaoEstadual: Usuario.InscricaoEstadual,
    Biografia: Usuario.Biografia,
    RazaoSocial: Usuario.RazaoSocial,
    Celular: Usuario.Celular
  });

  function onChange(ev) {
    const { name, value } = ev.target;
    if ([name] == "nomeFantasia") {
      setInput({ ...input, NomeFantasia: value });
    } else if ([name] == "cnpj") {
      setInput({ ...input, Documento: value });
    } else if ([name] == "tipoUsuario") {
      setInput({ ...input, TipoUsuario: value });
    } else if ([name] == "ufEmpresa") {
      setInput({ ...input, UFEmpresa: value });
    } else if ([name] == "situacaoTributaria") {
      setInput({ ...input, SituacaoTributaria: value });
    } else if ([name] == "inscricaoEstadual") {
      setInput({ ...input, InscricaoEstadual: value });
    } else if ([name] == "formacao") {
      setInput({ ...input, Formacao: value });
    } else if ([name] == "biografia") {
      setInput({ ...input, Biografia: value });
    } else if ([name] == "razaoSocial") {
      setInput({ ...input, RazaoSocial: value });
    } else if ([name] == "celular") {
      setInput({ ...input, Celular: value });
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
            name="nomeFantasia"
            required
            id="outlined-required"
            label="Nome Fantasia"
            onChange={onChange}
            value={input.NomeFantasia}
          />
          <TextField
            name="razaoSocial"
            required
            id="outlined-required"
            label="Razão Social"
            onChange={onChange}
            value={input.RazaoSocial}
          />
          <MaskedInput
            name="cnpj"
            mask="99.999.999/9999-99"
            value={input.Documento}
            onChange={onChange}
            label="CNPJ"
          />
          <TextField
            name="ufEmpresa"
            required
            id="outlined-required"
            label="UF"
            onChange={onChange}
            value={input.UFEmpresa}
            inputProps={{ maxLength: 2 }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <MaskedInput
            name="celular"
            mask="(99)99999-9999"
            value={input.Celular}
            onChange={onChange}
            label="Celular"
          />
          <TextField
            name="inscricaoEstadual"
            required
            id="outlined-required"
            label="Inscrição Estadual"
            onChange={onChange}
            value={input.InscricaoEstadual}
          />
          <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel id="demo-simple-select-label">
              <Text>Situação Tributária(ICMS)</Text>
            </InputLabel>
            <Select
              name="situacaoTributaria"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={input.SituacaoTributaria}
              label="Situação Tributária(ICMS)"
              onChange={onChange}
            >
              <MenuItem value={"I"}>Isento</MenuItem>
              <MenuItem value={"O"}>Prefiro não informar</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth sx={{ m: 2 }}>
            <InputLabel id="demo-simple-select-label">
              <Text>Formação</Text>
            </InputLabel>
            <Select
              name="formacao"
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={input.Formacao}
              label="Formação"
              onChange={onChange}
            >
              <MenuItem value={"ENFERMAGEM"}>Enfermagem</MenuItem>
              <MenuItem value={"AUXILIAR"}>Auxiliar</MenuItem>
              <MenuItem value={"TECNICO_ENFERMAGEM"}>
                Técnico em Enfermagem
              </MenuItem>
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
export default FormCadastroInfoBasicasPJ;
