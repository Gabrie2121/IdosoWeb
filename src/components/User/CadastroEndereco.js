import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../providers/auth";
import "../../styles/global.css";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import axios from "axios";
import { Link } from "react-router-dom";
import MaskedInput from "../User/MaskedInput";

const Text = styled.span`
  display: flex;
  justify-content: center;
  color: #666666;
  font-size: 20pt;
`;

const LinkPersonalization = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

function FormCadastroEndereco() {
  var idUsuario = localStorage.getItem("idUsuario");

  var textButton = "";

  if (idUsuario > 0) {
    textButton = "Alterar";
  } else {
    textButton = "Cadastrar";
  }

  const navigate = useNavigate();

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
    Cidade: Usuario.Cidade,
    Logradouro: Usuario.Logradouro,
    Complemento: Usuario.Complemento,
    Apelido: Usuario.Apelido,
    SituacaoTributaria: Usuario.SituacaoTributaria,
    Formacao: Usuario.Formacao,
    UFEmpresa: Usuario.UFEmpresa,
    InscricaoEstadual: Usuario.InscricaoEstadual,
    Celular: Usuario.Celular,
    Biografia: Usuario.Biografia,
    NomeFantasia: Usuario.NomeFantasia,
    RazaoSocial: Usuario.RazaoSocial

  });

  function onChange(ev) {
    const { name, value } = ev.target;

    if ([name] == "CEP") {
      setInput({ ...input, CEP: value });
    } else if ([name] == "UF") {
      setInput({ ...input, UF: value });
    } else if ([name] == "Cidade") {
      setInput({ ...input, Cidade: value });
    } else if ([name] == "Logradouro") {
      setInput({ ...input, Logradouro: value });
    } else if ([name] == "Complemento") {
      setInput({ ...input, Complemento: value });
    } else if ([name] == "Apelido") {
      setInput({ ...input, Apelido: value });
    }
    setUsuario(input);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const endereco = {
      id: 1,
      cep: Usuario.CEP,
      uf: Usuario.UF,
      cidade: Usuario.Cidade,
      logradouro: Usuario.Logradouro,
      complemento: Usuario.Complemento,
      apelido: Usuario.Apelido,
      principal: true,
    };

    var user;

    if (Usuario.TipoUsuario == "FISICA") {
      const profileEntities = [{ nome: "IDOSO" }];

      const userFisica = {
        id: idUsuario,
        username: Usuario.Email,
        password: Usuario.Password,
        tipoPessoa: Usuario.TipoUsuario,
        nome: Usuario.Nome,
        sobrenome: Usuario.Sobrenome,
        nDoc: Usuario.Documento,
        dataNasc: Usuario.DataNascimento,
        genero: Usuario.Sexo,
        celular: Usuario.Celular,
        email: Usuario.Email,
        foto: "asdf",
        endereco: endereco,
        profileEntities: profileEntities,
        biografia : Usuario.Biografia
      };

      user = userFisica;
    } else {
      const profileEntities = [{ nome: "PRESTADOR" }];

      const certificados = ["asd", "asd"];

      const userJuridica = {
        id: idUsuario,
        username: Usuario.Email,
        password: Usuario.Password,
        tipoPessoa: Usuario.TipoUsuario,
        nDoc: Usuario.Documento,
        celular: Usuario.Celular,
        email: Usuario.Email,
        foto: "asdf",
        razaoSocial: Usuario.RazaoSocial,
        nomeFantasia: Usuario.NomeFantasia,
        ie: Usuario.InscricaoEstadual,
        endereco: endereco,
        profileEntities: profileEntities,
        certificados: certificados,
        biografia : Usuario.Biografia,
        razaoSocial: Usuario.RazaoSocial,
        curso: Usuario.Formacao,
        celular: Usuario.Celular   
      };

      user = userJuridica;
    }

    console.log("user", user);

    try {
      if (idUsuario > 0) {
        axios
          .put(
            "http://localhost:9999/open/atualizar/usuario",
            JSON.stringify(user),
            { headers: { "Content-Type": "application/json"} }
          )
          .then((res) => {
            console.log(res);
            console.log(res.data);
            alert("Cadastro atualizado com sucesso!");

            if (user.tipoPessoa == "FISICA") {
              navigate("/profile-fisica");
            } else {
              navigate("/profile-juridica");
            }
          })
          .catch((error) => {
            // Trate o erro aqui.
            alert(error.message);
            console.log("Whoops! Houve um erro.", error.message || error);
          });
      } else {
        axios
          .post(
            "http://localhost:9999/open/cadastro/usuario",
            JSON.stringify(user),
            { headers: { "Content-Type": "application/json" } }
          )
          .then((res) => {
            console.log(res);
            console.log(res.data);
            localStorage.setItem("idUsuario", res.data.id);
            alert("Usuario cadastrado com sucesso!");

            if (user.tipoPessoa == "FISICA") {
              navigate("/profile-fisica");
            } else {
              navigate("/profile-juridica");
            }
          })
          .catch((error) => {
            // Trate o erro aqui.
            alert(error.message);
            console.log("Whoops! Houve um erro.", error.message || error);
          });
      }
    } catch (err) {
      console.log('ERRO ',err);
    }
  };

  const checkCEP = (e) => {
    console.log("teste cep");
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setInput({ ...input, UF: data.UF });
        setInput({ ...input, Cidade: data.Cidade });
        setInput({ ...input, Logradouro: data.Logradouro });
      });
  };

  return (
    <div>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Text>Endereço</Text>
      </Box>

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
          }}
        >
          <MaskedInput
            name="CEP"
            mask="99999-999"
            value={input.CEP}
            onChange={onChange}
            label="CEP"
            onBlur={checkCEP}
          />
          <TextField
            name="UF"
            required
            id="outlined-required"
            label="UF"
            onChange={onChange}
            value={input.UF}
            inputProps={{ maxLength: 2 }}
          />
          <TextField
            name="Cidade"
            required
            id="outlined-required"
            label="Cidade"
            onChange={onChange}
            value={input.Cidade}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <TextField
            name="Logradouro"
            required
            id="outlined-required"
            label="Logradouro"
            onChange={onChange}
            value={input.Logradouro}
          />
          <TextField
            name="Complemento"
            required
            id="outlined-required"
            label="Complemento"
            onChange={onChange}
            value={input.Complemento}
          />
          <TextField
            name="Apelido"
            required
            id="outlined-required"
            label="Apelido"
            onChange={onChange}
            value={input.Apelido}
          />
        </Box>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
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
          {textButton}
        </Button>
      </Box>
    </div>
  );
}

export default FormCadastroEndereco;
