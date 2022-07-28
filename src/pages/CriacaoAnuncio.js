import React from "react";

import TextField from '@mui/material/TextField';

import Select from '@mui/material/Select';
import MenuItem  from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel  from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel  from "@mui/material/FormControlLabel";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';

import style from './../styles/criacaoAnuncio.css';

import Header from "../components/Header/";

import aliceImage from '../assets/criacaoOfertas/alice.png';
import editarFoto from '../assets/criacaoOfertas/iconeEditar.png';
import campoDescricao from '../assets/criacaoOfertas/areaDescricao.png';


import styled from 'styled-components'


const DivTitle = styled.div`
    margin-top: 60px;
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    // background-color: orange;
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
    // background-color: gray;
    margin-left: 10%;
`
const DivDescription = styled.div`
   width: 30%;
//    background-color: blue;
`
const DivCampoFoto = styled.div`
    width; 100%;
    height: 35%;
    // background-color: pink;
`


const ProfieImage1 = styled.img`
    width: 150px;
    height: 150px;
    margin-left: 160px;
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
    width; 100%;
    height: 60%;
    // background-color: orange;
`

const DivSpanDescri = styled.div`
    width; 100%;
    height: 5%;
    // background-color: white;
`

const SpanDescricao = styled.span`
    margin-top: 40px;
    margin-left: 30px;
    font-size: 15pt;
    color: #000000;
`

const DivAreaDescri =  styled.div`
    width; 100%;
    height: 90%;;
    // background-color: red;
`

const ImgCampoDescricao = styled.img`
    width: 400px;
    height: 270px;
    margin-left: 30px;
    margin-top: 20px;
`
const SpanBoxDescricao = styled.span`
    width: 360px;
    height: 200px;
    position: absolute;
    margin-top: 60px;
    margin-left: -380px;
    font-size: 12pt;
    color: #000000;
`

const DivForm = styled.div`
    width: 70%;
    height: 100%;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
    background-color: purple;
`

const Column = styled.div`
    width: 540px;
    height: 100%;
    display: flex;
    background-color: pink;
`

const DivNome = styled.div`
    margin-top: 130px;
`

const DivCpf = styled.div`
    margin-top: 240px;
    margin-left: -209px;
`

const DivNas = styled.div`
    margin-top: 360px;
    margin-left: -197px;
`

const DivIdade = styled.div`
    margin-top: 360px;
    margin-left: 29px;
`

const DivSelect = styled.div`
    margin-top: 460px;
    margin-left: -345px;

`

const DivRadios = styled.div`
    width: 300px;
    margin-top: 460px;
    margin-left: 80px;
`

const DivSobrenome = styled.div`
    margin-top: 120px;
    margin-left: 100px;
`

const DivRadiosGenero = styled.div`
    margin-top: 220px;
    margin-left: -300px;
`

const DivRadiosDoencas = styled.div`
    margin-top: 300px;
    margin-left: -245px;
`

const DivFooter = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    background-color: yellow;
    margin-left: 0%;
    align-items: center;
`

function CriacaoAnuncio() {
    return (
        <div>
            <Header/>
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
                            <ImgCampoDescricao src={campoDescricao} />
                            <SpanBoxDescricao>
                                Minha mãe, é uma senhora muito doce e  paciente.  Preciso que alguém faça companhia para ela nos períodos da tarde, ela perdeu meu pai recentemente. Precisa de atenção redobrada, por conta dos remédios.
                            </SpanBoxDescricao>
                        </DivAreaDescri>                  
                    </DivCampoDescricao>
                </DivDescription>
                <DivForm>
                    <Column>
                        <DivNome>
                            <TextField style={style.nomeTextField} id="nomeTextField" label="Nome" variant="outlined"/>
                        </DivNome>
                        <DivCpf>
                            <TextField style={style.cpfTextField} id="cpfTextField" label="CPF" variant="outlined"/>
                        </DivCpf>
                        <DivNas>
                            <TextField style={style.nasTextField} id="nasTextField" label="Data Nascimento" variant="outlined"/>
                        </DivNas>
                        <DivIdade>
                            <TextField style={style.idadeTextField} id="idadeTextField" label="Idade" variant="outlined"/>
                        </DivIdade>
                        <DivSelect>
                        <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Grau de parêntesco</InputLabel>
                            <Select
                                value="text"
                                label="Grau de parêntesco"
                                style={style.idadeTextField} 
                                id="parentescoSelect" 
                            >
                                 <MenuItem>Mae</MenuItem>
                                 <MenuItem>Tia</MenuItem>
                                 <MenuItem>Avo</MenuItem>
                                 <MenuItem>Tia avo</MenuItem>
                                 <MenuItem>Prima</MenuItem>
                            </Select>
                            </FormControl>
                            </DivSelect>
                            <DivRadios>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label-doenca">PCD</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                        defaultValue="Nao"
                                    >
                                        <FormControlLabel style={style.simRadio} id="simRadio" value="Sim" control={<Radio  color="success" />} label="Sim" />
                                        <FormControlLabel style={style.naoRadio} id="naoRadio" value="Nao"  control={<Radio  color="success" />} label="Nao" />
                                    </RadioGroup>
                                </FormControl>
                            </DivRadios>
                            <DivSobrenome>
                                <TextField style={style.sobrenomeTextField} id="sobrenomeTextField" label="Sobrenome" variant="outlined"/>
                            </DivSobrenome>
                            <DivRadiosGenero>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gênero</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="Masculino" control={<Radio color="success" />} label="Masculino" />
                                        <FormControlLabel style={style.femininoRadio} id="femininoRadio" value="Feminino" control={<Radio color="success" />} label="Feminino" />
                                    </RadioGroup>
                                </FormControl>
                            </DivRadiosGenero>
                            <DivRadiosDoencas>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Doença ou disturbio diagnosticado</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="Sim" control={<Radio color="success" />} label="Sim" />
                                        <FormControlLabel style={style.naoRadio} id="naoRadio" value="Nao" control={<Radio color="success" />} label="Nao" />
                                    </RadioGroup>
                                </FormControl>
                            </DivRadiosDoencas>
                    </Column>
                    <Column>
                        <SpanDescricao> Descrição</SpanDescricao>
                    </Column>
                </DivForm>
            </DivBody>
            <DivFooter>
                <SpanTitle>
                    Área de criação de anúncios
                </SpanTitle>
            </DivFooter>
        </div>
    )
}

export default CriacaoAnuncio;