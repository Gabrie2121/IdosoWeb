import React, { useState } from 'react';
import styled from 'styled-components'
import '../../styles/global.css';
import { useAuth } from '../../providers/auth';
import '../../styles/global.css';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MaskedInput from '../User/MaskedInput';

const Text = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
`

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
        InscricaoEstadual: Usuario.InscricaoEstadual
    });


    function onChange(ev) {
        const { name, value } = ev.target;
        if ([name] == 'nomeFantasia') {
            setInput({ ...input, NomeFantasia: value });
        }
        else if ([name] == 'cnpj') {          
            setInput({ ...input, Documento: value });
        }
        else if ([name] == 'tipoUsuario') {
            setInput({ ...input, TipoUsuario: value });
        }
        else if ([name] == 'ufEmpresa') {
            setInput({ ...input, UFEmpresa: value });
        }
        else if ([name] == 'situacaoTributaria') {
            setInput({ ...input, SituacaoTributaria: value });
        }
        else if ([name] == 'inscricaoEstadual') {
            setInput({ ...input, InscricaoEstadual: value });
        }
        else if ([name] == 'formacao') {
            setInput({ ...input, Formacao: value });
        }
        setUsuario(input);
    }

    return (

        <div >
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', m: 1 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m: 1 }}>
                    <TextField name="nomeFantasia" required id="outlined-required" label="Nome Fantasia" onChange={onChange} value={(input.NomeFantasia)} />
                    <MaskedInput name="cnpj"  mask="99.999.999/9999-99" value={(input.Documento)} onChange={onChange} label="CNPJ"/>
                    <TextField name="ufEmpresa" required id="outlined-required" label="UF" onChange={onChange} value={(input.UFEmpresa)} />
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', m:1 }}>                  
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', m:1}}>
                    <TextField name="inscricaoEstadual" required id="outlined-required" label="Inscrição Estadual" onChange={onChange} value={(input.InscricaoEstadual)} />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Situação Tributária(ICMS)</InputLabel>
                            <Select
                                name='situacaoTributaria'
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={(input.SituacaoTributaria)}
                                label="Situação Tributária(ICMS)"
                                onChange={onChange}
                            >
                                <MenuItem value={'I'}>Isento</MenuItem>
                                <MenuItem value={'O'}>Prefiro não informar</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField name="formacao" required id="outlined-required" label="Formação" onChange={onChange} value={(input.Formacao)} />
                    </Box>
                </Box>
            </Box>
        </div>
    );
}
export default FormCadastroInfoBasicasPJ;