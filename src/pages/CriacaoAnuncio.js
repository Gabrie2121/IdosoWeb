import React,  { useState } from "react";
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

import style from './../styles/criacaoAnuncio.css';

import Header from "../components/Header/";

import aliceImage from '../assets/criacaoOfertas/alice.png';
import campoDescricao from '../assets/criacaoOfertas/areaDescricao.png';
import editarFoto from '../assets/criacaoOfertas/iconeEditar.png';
import MaskedInput from '../../src/components/User/MaskedInput';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker'


import Uppy from '@uppy/core';
import '@uppy/core/dist/style.css';
import '@uppy/drag-drop/dist/style.css';
import { DragDrop } from '@uppy/react';


import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';


import styled from 'styled-components';


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
    margin-left: 40%;
`

const DivBody = styled.div`
    margin-top: 50px;
    width: 80%;
    height: 600px;
    display: flex;
    flex-direction: row;
    margin-left: 10%;
`
const DivDescription = styled.div`
   width: 30%;
`
const DivCampoFoto = styled.div`
    width: 100%;
    height: 35%;
`

const ProfieImage1 = styled.img`
    width: 150px;
    height: 150px;
    margin-left: 90px;
    margin-top: 30px;
`

const EditarFoto = styled.img`
    width: 30px;
    height: 30px;
    margin-left: -38px;
    margin-top: 140px;
    position: absolute;
`

const ButttonEditarFoto = styled.button`
    width: 50px;
    height: 50px;
    margin-left: -40px;
    border-radius: 30px;
    background-color: #A9F0A6;
    border: 0px solid transparent;
`

const DivCampoDescricao = styled.div`
    width: 100%;
    height: 60%;
`

const DivSpanDescri = styled.div`
    width: 20%;
    height: 5%;
    margin-left: -30px;
`

const SpanDescricao = styled.span`
    margin-top: 40px;
    margin-left: 30px;
    font-size: 15pt;
    font-weight: bold;
    color: gray;
`

const DivAreaDescri = styled.div`
    width: 80%;
    height: 90%;
    margin-left: 380px;
    margin-top: -30px;
`

const SpanBoxDescricao = styled.span`
    width: 360px;
    height: 200px;
    position: absolute;
    margin-top: 60px;
    margin-left: -380px;
    font-size: 12pt;
    font-weight: 500;
    color: gray;
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
    width: 540px;
    height: 100%;
    display: flex;
`

const DivNome = styled.div`
    margin-top: 130px;
`

const DivCpf = styled.div`
    margin-top: 240px;
    margin-left: -209px;
`

const DivNas = styled.div`
    margin-top: 340px;
    margin-left: -197px;
`

const DivIdade = styled.div`
    margin-top: 340px;
    margin-left: 29px;
`

const SpanParentesco = styled.span`
    margin-top: 430px;
    margin-left: 0px;
    position: absolute;
    font-weight: 100;
    color: gray;
`

const DivSelect = styled.div`
    margin-top: 460px;
    margin-left: -345px;

`

const DivRadios = styled.div`
    width: 300px;
    margin-top: 460px;
    margin-left: 40px;
`

const DivSobrenome = styled.div`
    margin-top: 120px;
    margin-left: -70px;
`

const DivRadiosGenero = styled.div`
    margin-top: 220px;
    margin-left: -298px;
`

const DivRadiosDoencas = styled.div`
    margin-top: 300px;
    margin-left: -255px;
`

const DivFooter = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    margin-left: 0%;
    align-items: center;
`

const DivDragDrop = styled.div`
    margin-top: 380px;
    margin-left: -240px;
`

function CriacaoAnuncio() {

    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 1 },
        autoProceed: true,
    })

    uppy.on('complete', (result) => {
        const url = result.successful[0].uploadURL
    })

    //Connection

    const { Idoso, setIdoso } = useIdoso();
    
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
        HoraInicial: Idoso.HoraInicial,
        HoraFinal: Idoso.HoraFinal,
    });

        function onChange(ev) {
            const { name, value } = ev.target;
            if ([name] == 'nome') {
                setInput({ ...input, Nome: value });
            }
            else if ([name] == 'descricao') {
                setInput({ ...input, Descricao: value });
            }
            else if ([name] == 'sobrenome') {
                setInput({ ...input, Sobrenome: value });
            }
            else if ([name] == 'cpf') {          
                setInput({ ...input, CPF: value });
            }
            else if ([name] == 'datanascimento') {          
                setInput({ ...input, DataNascimento: value });
            }
            else if ([name] == 'idade') {
                setInput({ ...input, Idade: value });
            }
            else if ([name] == 'parentesco') {
                setInput({ ...input, Parentesco: value });
            }
            else if ([name] == 'pcd') {
                setInput({ ...input, PCD: value });
            }
            else if ([name] == 'genero') {
                setInput({ ...input, Genero: value });
            }
            else if ([name] == 'doencadisturbio') {
                setInput({ ...input, DoencaDisturbioConfirmacao: value });
            }
            setIdoso(input);
        }

    return (
        <div>
           <Header
                one="MEU PERFIL"
                two="FAVORITOS"
                three="LOGOUT"
                four=""
                linkOne=""
                linkTwo=""
                linkThree=""
                linkFour=""
            />
            <DivTitle>
                <SpanTitle>
                    Área de criação de anúncios
                </SpanTitle>
            </DivTitle>
            <DivBody>
                <DivDescription>
                    <DivCampoFoto>
                        <ProfieImage1 src={aliceImage} />
                        <ButttonEditarFoto />
                        <EditarFoto src={editarFoto} />
                    </DivCampoFoto>
                    <DivCampoDescricao>
                        <DivSpanDescri>
                            <SpanDescricao> Descrição</SpanDescricao>
                        </DivSpanDescri>
                        <DivAreaDescri>
                            <SpanBoxDescricao>
                               <TextField  
                                    id="descricaoField" 
                                    name="descricao" 
                                    onChange={onchange} 
                                    multiline
                                />
                            </SpanBoxDescricao>
                        </DivAreaDescri>
                    </DivCampoDescricao>
                </DivDescription>
                <DivForm>
                    <Column>
                        <DivNome>
                            <TextField id="nomeTextField" label="Nome" variant="outlined" name="nome" onChange={onChange} value={(input.Nome)}/>
                        </DivNome>
                        <DivCpf>
                            <MaskedInput id="cpfTextField" label="CPF" mask="999.999.999-99"  name="cpf" onChange={onChange} value={(input.CPF)}/>
                        </DivCpf>
                        <DivNas>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    mask="____-__-__"
                                    label="Data de Nascimento"
                                    value={(input.DataNascimento)}
                                    onChange={(newValue) => {
                                        setIdoso({ ...Idoso, DataNascimento: newValue });
                                        setInput({ ...input, DataNascimento: newValue });
                                    }}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </DivNas>
                        <DivIdade>
                            <TextField id="idadeTextField" label="Idade" variant="outlined" name="idade"  onChange={onChange} value={(input.Idade)}/>
                        </DivIdade>
                        <SpanParentesco>Grau de parêntesco</SpanParentesco>
                        <DivSelect>
                            <FormControl fullWidth>
                                <Select
                                    label="Grau de parêntesco"
                                    style={style.idadeTextField}
                                    id="parentescoSelect"
                                    name="parentesco"
                                    onChange={onChange} value={(input.Parentesco)}
                                >
                                    {/* Consertar opcoes passadas aqui e o que o back aceita*/}
                                    <MenuItem value="MAE" selected>Mãe</MenuItem>
                                    <MenuItem value="TIA">Tia</MenuItem>
                                    <MenuItem value="AVO">Avó</MenuItem>
                                    <MenuItem value="TIAAVO">Tia avó</MenuItem>
                                    <MenuItem value="PRIMA">Prima</MenuItem>
                                </Select>
                            </FormControl>
                        </DivSelect>
                        <DivRadios>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label-doenca">PCD</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    id="row-radio-buttons-group"
                                    defaultValue="Nao"
                                    name="pcd"
                                    onChange={onChange} value={(input.PCD)}
                                >
                                    <FormControlLabel id="simRadio" value="true" control={<Radio color="success" />} label="Sim" />
                                    <FormControlLabel id="naoRadio" value="false" control={<Radio color="success" />} label="Não" />
                                </RadioGroup>
                            </FormControl>
                        </DivRadios>
                    </Column>
                    <Column>
                        <DivSobrenome>
                            <TextField id="sobrenomeTextField" label="Sobrenome" variant="outlined" name="sobrenome" onChange={onChange} value={(input.Sobrenome)}/>
                        </DivSobrenome>
                        <DivRadiosGenero>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gênero</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    id="row-radio-buttons-group"
                                    name="genero"
                                    onChange={onChange} value={(input.Genero)}
                                >
                                    <FormControlLabel value="M" id="masculinoRadio" control={<Radio color="success" />} label="Masculino" />
                                    <FormControlLabel id="femininoRadio" value="F" control={<Radio color="success" />} label="Feminino" />
                                </RadioGroup>
                            </FormControl>
                        </DivRadiosGenero>
                        <DivRadiosDoencas>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Doença ou disturbio diagnosticado</FormLabel>
                                <RadioGroup
                                    row
                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                    id="row-radio-buttons-group"
                                    defaultValue="Nao"
                                    name="doencadisturbio"
                                    onChange={onChange} value={(input.DoencaDisturbioConfirmacao)}
                                >
                                    <FormControlLabel id="simRadio" value="true" control={<Radio color="success" />} label="Sim" />
                                    <FormControlLabel id="naoRadio" value="false" control={<Radio color="success" />} label="Não" />
                                </RadioGroup>
                            </FormControl>
                        </DivRadiosDoencas>
                        <DivDragDrop>
                            <DragDrop
                                width="200px"
                                height="200px"
                                id="dragdrop"
                                uppy={uppy}
                                locale={{
                                    strings: {
                                        // Text to show on the droppable area.
                                        // `%{browse}` is replaced with a link that opens the system file selection dialog.
                                        dropHereOr: 'Drop here or %{browse}',
                                        // Used as the label for the link that opens the system file selection dialog.
                                        browse: 'browse',
                                    },
                                }}
                            />
                        </DivDragDrop>
                    </Column>
                </DivForm>
            </DivBody>
            <DivFooter>
                <Button id="numberOneButton" variant="contained" disabled>1</Button>
                <Button component={Link} to="/criacaoanucio2" id="numberTwoButton" variant="contained">2</Button>
            </DivFooter>
        </div>
    )
}

export default CriacaoAnuncio;