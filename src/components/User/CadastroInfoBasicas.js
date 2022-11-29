import React, { useState,useEffect } from "react";
import styled from "styled-components";
import "../../styles/global.css";
import { useAuth } from "../../providers/auth";
import CadastroPF from "./CadInfoBasicaPF";
import CadastroPJ from "./CadInfoBasicaPJ";
import axios from "axios";

import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const Text = styled.span`
  display: flex;
  justify-content: center;
  color: #666666;
  font-size: 20pt;
`;

const TextInput = styled.span`
  color: #666666;
`;

function FormCadastroInfoBasicas() {
  const { Usuario, setUsuario } = useAuth();

  var idUsuario = localStorage.getItem("idUsuario");

  const [input, setInput] = useState({
    Email: Usuario.Email,
    Password: Usuario.Password,
    ConfirmPassword: Usuario.ConfirmPassword,
    NotifyEmail: Usuario.NotifyEmail,
    Nome: Usuario.Nome,
    Sobrenome: Usuario.Sobrenome,
    DOcumento: Usuario.Documento,
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
    UFEmpresa: Usuario.UFEmpresa,
    InscricaoEstadual: Usuario.InscricaoEstadual,
    Celular: Usuario.Celular
  });

  const carregaUsuario = () => {
    axios
      .get(`http://localhost:9999/idoso/getById/${idUsuario}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
    .then((res) => {
      console.log('resp',res.data);
      setUsuario({... Usuario, Email: res.data.email,Nome: res.data.nome, Sobrenome: res.data.sobrenome, 
                Documento: res.data.ndoc, Celular: res.data.celular, Sexo: res.data.genero, DataNascimento: res.data.dataNasc,
                CEP: res.data.endereco.cep, Logradouro: res.data.endereco.logradouro, Cidade: res.data.endereco.cidade, UF:res.data.endereco.uf,
                Complemento:res.data.endereco.complemento, Apelido: res.data.endereco.apelido, EnderecoId: res.data.EnderecoId});
      setInput({...input, Nome :res.data.nome})
    })
    .catch((error) => {
      // Trate o erro aqui.
      console.log("Whoops! Houve um erro.", error.message || error);
    });
  }

  useEffect(() => {
    if(idUsuario>0)
    {
      carregaUsuario();
    }
  }, []);



  var cadastro = <CadastroPF />;

  if (input.TipoUsuario == "JURIDICA") {
    cadastro = <CadastroPJ />;
  } else {
    cadastro = <CadastroPF />;
  }

  function onChange(ev) {
    const { name, value } = ev.target;
    if ([name] == "tipoUsuario") {
      setUsuario({ ...input, TipoUsuario: value });
      setInput({ ...input, TipoUsuario: value });
    }
  }

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Text>Informações basicas</Text>
        <br></br>
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            <TextInput>Tipo Pessoa</TextInput>
          </InputLabel>
          <Select
            name="tipoUsuario"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={input.TipoUsuario}
            label="Tipo Usuário"
            onChange={onChange}
          >
            <MenuItem value={"JURIDICA"}>Pessoa Juridica</MenuItem>
            <MenuItem value={"FISICA"}>Pessoa Fisica</MenuItem>
          </Select>
        </FormControl>
        {cadastro}
      </Box>
    </div>
  );
}
export default FormCadastroInfoBasicas;
