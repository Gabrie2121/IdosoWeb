import React from "react";

import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';


import Select from '@mui/material/Select';
import MenuItem  from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel  from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel  from "@mui/material/FormControlLabel";
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Button from '@mui/material/Button';

import style from './../styles/criacaoAnuncio.css';

import Header from "../components/Header/";

import aliceImage from '../assets/criacaoOfertas/alice.png';
import editarFoto from '../assets/criacaoOfertas/iconeEditar.png';
import campoDescricao from '../assets/criacaoOfertas/areaDescricao.png';

import Uppy from '@uppy/core'
import { DragDrop } from '@uppy/react'
import '@uppy/core/dist/style.css'
import '@uppy/drag-drop/dist/style.css'


import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'


import styled from 'styled-components'


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
    width; 100%;
    height: 35%;
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
`

const DivSpanDescri = styled.div`
    width; 100%;
    height: 5%;
`

const SpanDescricao = styled.span`
    margin-top: 40px;
    margin-left: 30px;
    font-size: 15pt;
    font-weight: bold;
    color: gray;
`

const DivAreaDescri =  styled.div`
    width; 100%;
    height: 90%;
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

    const [ parentesco, setParentesco] = React.useState('');

    const handleChange = (event) => {
        setParentesco(event.target.value);
    }

    const uppy = new Uppy({
        meta: { type: 'avatar' },
        restrictions: { maxNumberOfFiles: 1 },
        autoProceed: true,
    })
    
    uppy.on('complete', (result) => {
        const url = result.successful[0].uploadURL
      })
  

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
                            <TextField id="nomeTextField" label="Nome" variant="outlined"/>
                        </DivNome>
                        <DivCpf>
                            <TextField id="cpfTextField" label="CPF" variant="outlined"/>
                        </DivCpf>
                        <DivNas>
                            <TextField id="nasTextField" label="Data Nascimento" variant="outlined"/>
                        </DivNas>
                        <DivIdade>
                            <TextField  id="idadeTextField" label="Idade" variant="outlined"/>
                        </DivIdade>
                        <SpanParentesco>Grau de parêntesco</SpanParentesco>
                        <DivSelect>
                        <FormControl fullWidth>
                            <Select
                                value={parentesco}
                                label="Grau de parêntesco"
                                style={style.idadeTextField} 
                                id="parentescoSelect" 
                                onChange={handleChange} 
                            >
                                 <MenuItem value={1}>Mãe</MenuItem>
                                 <MenuItem value={2}>Tia</MenuItem>
                                 <MenuItem value={3}>Avó</MenuItem>
                                 <MenuItem value={4}>Tia avó</MenuItem>
                                 <MenuItem value={5}>Prima</MenuItem>
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
                                        <FormControlLabel id="simRadio" value="Sim" control={<Radio  color="success" />} label="Sim" />
                                        <FormControlLabel  id="naoRadio" value="Nao"  control={<Radio  color="success" />} label="Não" />
                                    </RadioGroup>
                                </FormControl>
                            </DivRadios>
                    </Column>
                    <Column>
                        <DivSobrenome>
                            <TextField  id="sobrenomeTextField" label="Sobrenome" variant="outlined"/>
                        </DivSobrenome>
                        <DivRadiosGenero>
                            <FormControl>
                                <FormLabel id="demo-row-radio-buttons-group-label">Gênero</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="Masculino" id="masculinoRadio" control={<Radio color="success" />} label="Masculino" />
                                        <FormControlLabel id="femininoRadio" value="Feminino" control={<Radio color="success" />} label="Feminino" />
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
                                        <FormControlLabel id="simRadio" value="Sim" control={<Radio color="success" />} label="Sim" />
                                        <FormControlLabel id="naoRadio" value="Nao" control={<Radio color="success" />} label="Não" />
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
                <Button  id="numberOneButton" variant="contained" disabled>1</Button>
                <Button component={Link} to="/CriacaoAnuncio2" id="numberTwoButton" variant="contained">2</Button>
            </DivFooter>
        </div>
    )
}

export default CriacaoAnuncio;