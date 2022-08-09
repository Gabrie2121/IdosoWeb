import React, { useState } from 'react';
import styled from 'styled-components'
import '../../styles/global.css';
import { useAuth } from '../../providers/auth';
import '../../styles/global.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Text = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
` 

function FormCadastroInfoBasicas() {

    const { Usuario, setUsuario } = useAuth();

    const [input, setInput] = useState({
        Nome: Usuario.Nome,
        Sobrenome: Usuario.Sobrenome,
        CPF: Usuario.CPF,
        DataNascimento: Usuario.DataNascimento,
        TipoUsuario: Usuario.TipoUsuario,
        Sexo: Usuario.Sexo
    });


    function onChange(ev) {
        const { name, value } = ev.target;

        if ([name] == 'nome') {
            setInput({ ...Usuario, nome: value });
        }
        else if ([name] == 'cpf') {
            setInput({ ...Usuario, cpf: value });
        }
        else if ([name] == 'tipoUsuario') {
            setInput({ ...Usuario, TipoUsuario: value });
        }
        else if ([name] == 'sexo') {
            setInput({ ...Usuario, Sexo: value });
        }
        setUsuario(input);
        localStorage.setItem('Usuario', JSON.stringify(input));
    }

    return (

        <div >
             <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
             <Text>Informações basicas</Text>
             </Box>
           
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', m:1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center',m:1 }}>
                    <TextField name="nome" required id="outlined-required" label="Nome" onChange={onChange} value={(input.Nome)} />
                    <TextField name="sobrenome" required id="outlined-required" label="Sobrenome" onChange={onChange} value={(input.Sobrenome)} />

                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            label="Data de Nascimento"
                            value={(input.DataNascimento)}
                            onChange={(newValue) => {
                                setInput({ ...Usuario, DataNascimento: newValue });}}
                            renderInput={(params) => <TextField {...params} />}
                        />
                    </LocalizationProvider>

                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TextField name="cpf" required id="outlined-required" label="CPF" onChange={onChange} value={(input.CPF)} />
                    <TextField name="celular" required id="outlined-required" label="Celular" onChange={onChange} value={(input.Celular)} />
                    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', m:2 }}>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tipo Usuário</InputLabel>
                            <Select
                                name='tipoUsuario'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={input.TipoUsuario}
                                label="Tipo Usuário"
                                onChange={onChange}
                            >
                                <MenuItem value={0}>Pessoa Juridica</MenuItem>
                                <MenuItem value={1}>Pessoa Fisica</MenuItem>
                            </Select>
                        </FormControl>                      
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sexo</InputLabel>
                            <Select
                                name='sexo'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={input.TipoUsuario}
                                label="Genero"
                                onChange={onChange}
                            >
                                <MenuItem value={0}>Masculino</MenuItem>
                                <MenuItem value={1}>Feminino</MenuItem>
                                <MenuItem value={2}>Prefiro não informar</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default FormCadastroInfoBasicas;