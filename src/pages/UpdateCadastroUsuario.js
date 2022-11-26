import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import CadastroEndereco from "../components/User/CadastroEndereco";
import CadastroInfoBasica from "../components/User/CadastroInfoBasicas";
import { useAuth } from "../providers/auth";
import axios from "axios";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";


function UsuarioCadastro() {

  var idUsuario = localStorage.getItem("idUsuario");
  const { Usuario, setUsuario } = useAuth();


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



  const [form, setForm] = useState(0);

  let formUser = 0;
 if (form === 0) {
    formUser = <CadastroInfoBasica />;
  } else {
    formUser = <CadastroEndereco />;
  }
  
  return (
    <div>
      <Header
        one="HOME"
        two="LOGIN"
        three=""
        four=""
        linkOne="/"
        linkTwo="/login"
        linkThree="/"
        linkFour="/"
      />
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
          {formUser}
          <Box
            sx={{ "& > :not(style)": { display: "inline-flex", m: 1, p: 1 } }}
          >
            <Button
              name="One"
              variant="contained"
              sx={{
                borderRadius: 100,
                borderWidth: 1,
                backgroundColor: "#5BB159",
              }}
              onClick={() => setForm(0)}
            >
              1
            </Button>
            <Button
              name="Two"
              variant="contained"
              sx={{
                borderRadius: 100,
                borderWidth: 1,
                backgroundColor: "#5BB159",
              }}
              onClick={() => setForm(1)}
            >
              2
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default UsuarioCadastro;
