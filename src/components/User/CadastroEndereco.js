import React, { useState } from 'react';
import styled from 'styled-components'
import '../../styles/global.css';
import { useAuth } from '../../providers/auth';
import '../../styles/global.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Text = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
` 

function FormCadastroEndereco() {

    const { Usuario, setUsuario } = useAuth();

    const [input, setInput] = useState({
        Email: Usuario.Email,
        Password: Usuario.Password,
        ConfirmPassword: Usuario.ConfirmPassword,
        NotifyEmail:Usuario.NotifyEmail,
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
    });

    function imprimeUsuario(){
        for (var [key, value] of Object.entries(Usuario)) {
            console.log(key + ' ' + value);
        }
    }


    function onChange(ev) {
        const { name, value } = ev.target;

        if ([name] == 'CEP') {
            setInput({ ...input, CEP: value });
        }
        else if ([name] == 'UF') {
            setInput({ ...input, UF: value });
        }
        else if ([name] == 'Cidade') {
            setInput({ ...input, Cidade: value });
        }
        else if ([name] == 'Logradouro') {
            setInput({ ...input, Logradouro: value });
        }
        else if ([name] == 'Complemento') {
            setInput({ ...input, Complemento: value });
        }
        else if ([name] == 'Apelido') {
            setInput({ ...input, Apelido: value });
        }
        setUsuario(input);
        localStorage.setItem('Usuario', JSON.stringify(input));
    }

    const checkCEP =(e)=>{
        const cep = e.target.value.replace(/\D/g,'');
        fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(res => res.json()).then(data => {
            console.log(data)
            setInput({ ...input, UF: data.UF});
            setInput({ ...input, Cidade: data.Cidade});
            setInput({ ...input, Logradouro: data.Logradouro});
            setInput(input);
        })
    }

    return (

        <div >
             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Text>Endereço</Text>
             </Box>
       
             <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', m:1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField name="CEP" required id="outlined-required" label="CEP" onChange={onChange} value={(input.CEP)} onBlur={checkCEP} />
                    <TextField name="UF" required id="outlined-required" label="UF" onChange={onChange} value={(input.UF)} />
                    <TextField name="Cidade" required id="outlined-required" label="Cidade" onChange={onChange} value={(input.Cidade)} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField name="logradouro" required id="outlined-required" label="Logradouro" onChange={onChange} value={(input.Logradouro)} />
                    <TextField name="Complemento" required id="outlined-required" label="Complemento" onChange={onChange} value={(input.Complemento)} />
                    <TextField name="Apelido" required id="outlined-required" label="Apelido" onChange={onChange} value={(input.Apelido)} />
                </Box>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Button name="One" variant="contained" sx={{ borderRadius: 100, borderWidth: 1, backgroundColor: "#5BB159" }} onClick={() => imprimeUsuario()}>Cadastrar</Button>
                </Box>
        </div>
    );
}
export default FormCadastroEndereco;