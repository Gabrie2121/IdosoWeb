import React, { useState } from "react";
import styled from "styled-components";
import "../../styles/global.css";
import { useAuth } from "../../providers/auth";
import "../../styles/global.css";
import CadastroPF from "./CadInfoBasicaPF";
import CadastroPJ from "./CadInfoBasicaPJ";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const Text = styled.span`
  display: flex;
  justify-content: center;
  color: #666666;
  font-size: 20pt;
`;

function FormCadastroInfoBasicas() {
  const { Usuario, setUsuario } = useAuth();

  const [input, setInput] = useState({
    Email: Usuario.Email,
    Password: Usuario.Password,
    ConfirmPassword: Usuario.ConfirmPassword,
    NotifyEmail: Usuario.NotifyEmail,
    Nome: Usuario.Nome,
    Sobrenome: Usuario.Sobrenome,
    CPF: Usuario.CPF,
    DataNascimento: Usuario.DataNascimento,
    TipoUsuario: Usuario.TipoUsuario,
    Sexo: Usuario.Sexo,
    CEP: Usuario.CEP,
    UF: Usuario.UF,
    Logradouro: Usuario.Logradouro,
    Complemento: Usuario.Complemento,
    Apelido: Usuario.Apelido,
    SituacaoTributaria: Usuario.SituacaoTributaria,
    Formacao: Usuario.Formacao,
    UFEmpresa:Usuario.UFEmpresa,
    InscricaoEstadual: Usuario.InscricaoEstadual
  });

  var cadastro = <CadastroPF />;

  if (input.TipoUsuario === 0) {
    cadastro = <CadastroPJ />;
  } else {
    cadastro = <CadastroPF />;
  }

  function onChange(ev) {
    const { name, value } = ev.target;
    if ([name] == "tipoUsuario") {
      setInput({ ...input, TipoUsuario: value });
    }
    setUsuario(input);
  }

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Text>Informações basicas</Text>
        <Select
          name="tipoUsuario"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={input.TipoUsuario}
          label="Tipo Usuário"
          onChange={onChange}
        >
          <MenuItem value={0}>Pessoa Juridica</MenuItem>
          <MenuItem value={1}>Pessoa Fisica</MenuItem>
        </Select>
        {cadastro}
      </Box>
    </div>
  );
}
export default FormCadastroInfoBasicas;
