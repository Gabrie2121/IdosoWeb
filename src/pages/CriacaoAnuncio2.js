import React, { useState } from "react";
import axios from 'axios';
import { useIdoso } from '../providers/idoso';

import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';


import Header from "../components/Header/";

import MaskedInput from '../../src/components/User/MaskedInput';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useNavigate } from "react-router-dom";


import styled from 'styled-components';
import CriacaoAnuncio from "./CriacaoAnuncio";


const DivTitle = styled.div`
    margin-top: 60px;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
`
const SpanTitle = styled.span`
    font-size: 20pt;
    color: #666666;
    justify-content: center;
    margin-left: 38%;
`

const DivBody = styled.div`
    margin-top: 50px;
    width: 80%;
    height: 600px;
    margin-left: 20%;
`

const DivForm = styled.div`
    width: 70%;
    height: 100%;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
`

const Column = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`

const DivCep = styled.div`
    margin-top: 130px;
`

const DivEstado = styled.div`
    margin-top: 130px;
    margin-left: 60px;
`

const DivCidade = styled.div`
    margin-top: 130px;
    margin-left: 60px;
`


const DivRadios = styled.div`
    width: 500px;
    margin-top: 130px;
    margin-left: 40px;
`

const DivLogradouro = styled.div`
    margin-top: 260px;
    margin-left: -1220px;
`

const DivSelect = styled.div`
    margin-top: 260px;
    margin-left: 40px;

`
const SpanFrequecia = styled.span`
    margin-top: 230px;
    margin-left: 480px;
    position: absolute;
    font-weight: 100;
    color: gray;
`

const DivComplemento = styled.div`
    margin-top: 380px;
    margin-left: -716px;
`

const DivApelido = styled.div`
    margin-top: 380px;
    margin-left: 38px;
`

const DivPagamento = styled.div`
    margin-top: 380px;
    margin-left: 55px;
`
const DivFooterOptions = styled.div`
    width: 500px;
    margin-top: 490px;
    margin-left: -825px;
    display: flex;
    flex-direction: row;
`

const DivRadiosMoradia = styled.div`
    width: 420px;
    margin-left: 10px;
    
`
const DivDataAnuncio = styled.div`
    width: 550px;
    flex-direction: row;
    margin-left: 20px;
    display: flex;
`

const DivHorarios = styled.div`
    position: absolute;
    width: 350px;
    margin-left: 550px;
    display: flex;
    flex-direction: row;
`
const DivDataInicial = styled.div`
    width: 160px;
    display: flex;
    flex-direction: row;
`

const DivDataFinal = styled.div`
    position: absolute;
    width: 160px;
    margin-left: 175px;
    display: flex;
    flex-direction: row;
`

const DivHorarioInicial = styled.div`
    width: 175px;
    display: flex;
    flex-direction: row;
`

const DivHorarioFinal = styled.div`
    position: absolute;
    width: 175px;
    margin-left: 175px;
    display: flex;
    flex-direction: row;
`

const DivSpanDas = styled.div`
    width: 55px;
    margin-left: 10px;
`

const SpanDas = styled.span`
    font-weight: 100;
    position: absolute;
    margin-top: 15px;
    margin-left: 20px;
    color: gray;
`
const DivTextInicial = styled.div`
    width: 120px;
    margin-left: 20px;
    font-weight: 100;
`

const DivSpanAs = styled.div`
    width: 55px;
`

const SpanAs = styled.span`
    font-weight: 100;
    position: absolute;
    margin-top: 15px;
    margin-left: 20px;
    color: gray;
`

const DivTextFinal = styled.div`
    width: 120px;
    margin-left: 20px;
    font-weight: 100;
`


const DivFooter = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`

function CriacaoAnuncio2() {

    //Connection 

    const { Idoso, setIdoso } = useIdoso();
    const navigate = useNavigate();

    const [input, setInput] = useState({
        Nome: Idoso.Nome,
        Descricao: Idoso.Descricao,
        Sobrenome: Idoso.Sobrenome,
        CPF: Idoso.CPF,
        Genero: Idoso.Genero,
        DataNascimento: Idoso.DataNascimento,
        Idade: Idoso.Idade,
        DoencaDisturbioConfirmacao: Idoso.DoencaDisturbioConfirmacao,
        Parentesco: Idoso.Parentesco,
        Frequencia: Idoso.Frequencia,
        PCD: Idoso.PCD,
        CEP: Idoso.CEP,
        Estado: Idoso.Estado,
        Cidade: Idoso.Cidade,
        Logradouro: Idoso.Logradouro,
        Complemento: Idoso.Complemento,
        Apelido: Idoso.Apelido,
        MoramJuntos: Idoso.MoramJuntos,
        Periodo: Idoso.Periodo,
        Pagamento: Idoso.Pagamento,
        Repetir: Idoso.Repetir,
        DataInicial: Idoso.DataInicial,
        DataFinal: Idoso.DataFinal,
        HoraInicial: Idoso.HoraInicial,
        HoraFinal: Idoso.HoraFinal,

    });

    function onChange(ev) {
        const { name, value } = ev.target;
        if ([name] == "cep") {
            setInput({ ...input, CEP: value });
        }
        else if ([name] == 'estado') {
            setInput({ ...input, Estado: value });
        }
        else if ([name] == 'cidade') {
            setInput({ ...input, Cidade: value });
        }
        else if ([name] == 'periodo') {
            setInput({ ...input, Periodo: value });
        }
        else if ([name] == 'logradouro') {
            setInput({ ...input, Logradouro: value });
        }
        else if ([name] == 'frequencia') {
            setInput({ ...input, Frequencia: value });
        }
        else if ([name] == 'complemento') {
            setInput({ ...input, Complemento: value });
        }
        else if ([name] == 'apelido') {
            setInput({ ...input, Apelido: value });
        }
        else if ([name] == 'pagamento') {
            setInput({ ...input, Pagamento: value });
        }
        else if ([name] == 'moramjuntos') {
            setInput({ ...input, MoramJuntos: value });
        }
        else if ([name] == 'repetir') {
            setInput({ ...input, Repetir: value });
        }
        else if ([name] == 'datainicial') {
            setInput({ ...input, DataInicial: value });
        }
        else if ([name] == 'datafinal') {
            setInput({ ...input, DataFinal: value });
        }
        else if ([name] == 'horainicial') {
            setInput({ ...input, HoraInicial: value });
        }
        else if ([name] == 'horafinal') {
            setInput({ ...input, HoraFinal: value });
        }
        setIdoso(input);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const idPf = localStorage.getItem("idUsuario")

        const novo = {
            "usuario": {
                "id": idPf
            },
            "idoso": {
                "grauParentesco": Idoso.Parentesco,
                "nome": Idoso.Nome,
                "sobrenome": Idoso.Sobrenome,
                "cpf": Idoso.CPF,
                "genero": Idoso.Genero,
                "dataNasc": Idoso.DataNascimento,
                "idade": Idoso.Idade,
                "pcd": Idoso.PCD,
                "disturbio": Idoso.DoencaDisturbioConfirmacao,
                "endereco": {
                    "cep": Idoso.CEP,
                    "uf": Idoso.Estado,
                    "cidade": Idoso.Cidade,
                    "logradouro": Idoso.Logradouro,
                    "complemento": Idoso.Complemento,
                    "apelido": Idoso.Apelido,
                    "principal": true
                }
            },
            "periodo": Idoso.Periodo,
            "frequencia": Idoso.Frequencia,
            "pagamentoBase": Idoso.Pagamento,
            "dInicio": Idoso.DataInicial,
            "dFim": Idoso.DataFinal,
            "horaInicio": Idoso.HoraInicial,
            "horaFim": Idoso.HoraFinal,
            "moraJunto": Idoso.MoramJuntos,
            "descricao": Idoso.Descricao,
            "foto": "YWJjZGVm",
            "laudos": ["YWJjZGVm", "YWJjZGVm"]
        };

        console.log(novo);

        axios.post(`http://localhost:9999/anuncios/novo`, JSON.stringify(novo), { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res);
                console.log(res.data);
                alert("Anúncio criado com sucesso!");
                navigate("/profile-fisica");
            })
            .catch((error) => {
                // Trate o erro aqui.
                alert(error.message);
                console.log('Whoops! Houve um erro.', error.message || error)
            })
    };


    return (
        <div>
            <Header
                one="MEU PERFIL"
                two="LOGOUT"
                three=""
                four=""
                linkOne="/profile-fisica"
                linkTwo="/"
                linkThree=""
                linkFour=""
            />
            <DivTitle>
                <SpanTitle>
                    Área de criação de anúncios
                </SpanTitle>
            </DivTitle>
            <DivBody>
                <DivForm>
                    <Column>
                        <DivCep>
                            <MaskedInput id="cepTextField" mask="99999-999" label="CEP" name="cep" onChange={onChange} value={(input.CEP)} />
                        </DivCep>
                        <DivEstado>
                            <TextField id="cpfTextField" label="Estado" variant="outlined" name="estado" onChange={onChange} value={(input.Estado)} inputProps={{ maxLength: 2 }} />
                        </DivEstado>
                        <DivCidade>
                            <TextField id="cidadeTextField" label="Cidade" variant="outlined" name="cidade" onChange={onChange} value={(input.Cidade)} />
                        </DivCidade>
                        <DivRadios>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label-doenca">Período</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    id="row-radio-buttons-group"
                                    name="periodo"
                                    onChange={onChange} value={(input.Periodo)}
                                >
                                    <FormControlLabel id="matutinoRadio" value="MATUTINO" control={<Radio color="success" />} label="Matutino" />
                                    <FormControlLabel id="vespertinoRadio" value="VESPERTINO" control={<Radio color="success" />} label="Vespertino" />
                                    <FormControlLabel id="noturnoRadio" value="NOTURNO" control={<Radio color="success" />} label="Noturno" />
                                </RadioGroup>
                            </FormControl>
                        </DivRadios>
                        <DivLogradouro>
                            <TextField
                                id="logradouroTextField"
                                label="Logradouro" variant="outlined"
                                name="logradouro"
                                onChange={onChange} value={(input.Logradouro)}
                            />
                        </DivLogradouro>
                        <SpanFrequecia>Frequência</SpanFrequecia>
                        <DivSelect>
                            <FormControl fullWidth id="FormControl">
                                <Select
                                    label="Frequência"
                                    id="parentescoSelect"
                                    name="frequencia"
                                    onChange={onChange} value={(input.Frequencia)}
                                >
                                    <MenuItem value="UMDIA">Uma vez na semana</MenuItem>
                                    <MenuItem value="DOISDIAS">Duas vezes na semana</MenuItem>
                                    <MenuItem value="DIASIMNAO">Dia sim e dia não</MenuItem>
                                    <MenuItem value="SEGUNDASEXTA">Segunda à sexta</MenuItem>
                                    <MenuItem value="FINALSEMANA">Final de semana</MenuItem>
                                    <MenuItem value="TODOSDIAS">Todos os dias</MenuItem>
                                </Select>
                            </FormControl>
                        </DivSelect>
                        <DivComplemento>
                            <TextField
                                id="complementoTextField"
                                label="Complemento" variant="outlined"
                                name="complemento"
                                onChange={onChange} value={(input.Complemento)}
                            />
                        </DivComplemento>
                        <DivApelido>
                            <TextField
                                id="apelidoTextField"
                                label="Apelido" variant="outlined"
                                name="apelido"
                                onChange={onChange} value={(input.Apelido)}
                            />
                        </DivApelido>
                        <DivPagamento>
                            <MaskedInput
                                mask="999.99"
                                id="pagamentoTextField"
                                label="Pagamento base por dia"
                                name="pagamento"
                                onChange={onChange} value={(input.Pagamento)}
                            />
                        </DivPagamento>
                        <DivFooterOptions>
                            <DivRadiosMoradia>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label-doenca">Moram juntos?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        id="row-radio-buttons-group"
                                        defaultValue="Nao"
                                        name="moramjuntos"
                                        onChange={onChange} value={(input.MoramJuntos)}
                                    >
                                        <FormControlLabel id="simRadioOption" value="true" control={<Radio color="success" />} label="Sim" />
                                        <FormControlLabel id="naoRadioOption" value="false" control={<Radio color="success" />} label="Não" />
                                    </RadioGroup>
                                </FormControl>
                            </DivRadiosMoradia>
                            <DivDataAnuncio>
                                <DivDataInicial>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            mask="__-__-____"
                                            id="pagamentoTextField"
                                            label="Data inicial"
                                            name="datainicial"
                                            value={(input.DataInicial)}
                                            onChange={(newValue) => {
                                                setIdoso({ ...Idoso, DataInicial: newValue });
                                                setInput({ ...input, DataInicial: newValue });
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </DivDataInicial>
                                <DivDataFinal>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            mask="__-__-____"
                                            id="pagamentoTextField"
                                            label="Data final"
                                            name="datafinal"
                                            value={(input.DataFinal)}
                                            onChange={(newValue) => {
                                                setIdoso({ ...Idoso, DataFinal: newValue });
                                                setInput({ ...input, DataFinal: newValue });
                                            }}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </DivDataFinal>
                            </DivDataAnuncio>
                            <DivHorarios>
                                <DivHorarioInicial>
                                    <DivSpanDas>
                                        <SpanDas>Das</SpanDas>
                                    </DivSpanDas>
                                    <DivTextInicial>
                                        <MaskedInput
                                            mask="99:99"
                                            id="pagamentoTextField"
                                            label="Hora inicial"
                                            name="horainicial"
                                            onChange={onChange} value={(input.HoraInicial)}
                                        />
                                    </DivTextInicial>
                                </DivHorarioInicial>
                                <DivHorarioFinal>
                                    <DivSpanAs>
                                        <SpanAs>Às</SpanAs>
                                    </DivSpanAs>
                                    <DivTextFinal>
                                        <MaskedInput
                                            mask="99:99"
                                            id="pagamentoTextField"
                                            label="Hora final"
                                            name="horafinal"
                                            onChange={onChange} value={(input.HoraFinal)}
                                        />
                                    </DivTextFinal>
                                </DivHorarioFinal>
                            </DivHorarios>
                        </DivFooterOptions>
                        <Button
                            id="criarAnuncioButton"
                            variant="contained"
                            onClick={handleSubmit}
                        >
                            Criar anúncio
                        </Button>
                    </Column>
                </DivForm>
            </DivBody>
            <DivFooter>
                <Button component={Link} to="/CriacaoAnuncio" id="numberOneReverseButton" variant="contained" >1</Button>
                <Button id="numberTwoReverseButton" variant="contained" disabled>2</Button>
            </DivFooter>
        </div>
    );
}

export default CriacaoAnuncio2;