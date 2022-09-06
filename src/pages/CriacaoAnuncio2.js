import React from "react";

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

import aliceImage from '../assets/criacaoOfertas/alice.png';
import campoDescricao from '../assets/criacaoOfertas/areaDescricao.png';
import editarFoto from '../assets/criacaoOfertas/iconeEditar.png';


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
    width: 100%;
    height: 60%;
`

const DivSpanDescri = styled.div`
    width: 100%;
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
    width: 100%;
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

const DivLogradouro= styled.div`
    margin-top: 260px;
    margin-left: -1173px;
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
const DivRadiosMoradia = styled.div`
    width: 500px;
    margin-top: 490px;
    margin-left: -825px;
`

const DivFooter = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 50px;
    display: flex;
    margin-left: 0%;
    align-items: center;
`

function CriacaoAnuncio2() {

    const [frequencia, setFrequencia] = React.useState('');

    const handleChange = (event) => {
        setFrequencia(event.target.value);
    };

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
                        <DivCep>
                            <TextField id="cepTextField" label="CEP" variant="outlined"/>
                        </DivCep>
                        <DivEstado>
                            <TextField id="cpfTextField" label="Estado" variant="outlined"/>
                        </DivEstado>
                        <DivCidade>
                            <TextField id="cidadeTextField" label="Cidade" variant="outlined"/>
                        </DivCidade>
                        <DivRadios>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label-doenca">Período</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel id="matutinoRadio" value="Matutino" control={<Radio  color="success" />} label="Matutino" />
                                        <FormControlLabel id="vespertinoRadio" value="Vespertino"  control={<Radio  color="success" />} label="Vespertino" />
                                        <FormControlLabel id="noturnoRadio" value="Noturno"  control={<Radio  color="success" />} label="Noturno" />
                                    </RadioGroup>
                                </FormControl>
                        </DivRadios>
                        <DivLogradouro>
                            <TextField id="logradouroTextField" label="Logradouro" variant="outlined"/>
                        </DivLogradouro>
                        <SpanFrequecia>Frequência</SpanFrequecia>
                        <DivSelect>
                            <FormControl fullWidth id="FormControl">
                                <Select
                                    value={frequencia}
                                    label="Frequência"
                                    id="parentescoSelect"
                                    onChange={handleChange} 
                                >
                                    <MenuItem value={1}>Dia sim e dia não</MenuItem>
                                    <MenuItem value={2}>Uma vez na semana</MenuItem>
                                    <MenuItem value={3}>Duas vezes na semana</MenuItem>
                                    <MenuItem value={4}>Final de semana</MenuItem>
                                </Select>
                            </FormControl>
                        </DivSelect>
                        <DivComplemento>
                            <TextField id="complementoTextField" label="Complemento" variant="outlined"/>
                        </DivComplemento>
                        <DivApelido>
                            <TextField id="apelidoTextField" label="Apelido" variant="outlined"/>
                        </DivApelido>
                        <DivPagamento>
                            <TextField id="pagamentoTextField" label="Pagamento base por dia" variant="outlined"/>
                        </DivPagamento>
                        <DivRadiosMoradia>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label-doenca">Moram juntos?</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel  id="simRadioOption" value="Sim" control={<Radio  color="success" />} label="Sim" />
                                        <FormControlLabel id="naoRadioOption" value="Nao"  control={<Radio  color="success" />} label="Não" />
                                    </RadioGroup>
                                </FormControl>
                        </DivRadiosMoradia>
                        <Button  id="criarAnuncioButton" variant="contained" >Criar anúncio</Button>
                    </Column>
                </DivForm>
            </DivBody>
            <DivFooter>
                <Button component={Link} to="/CriacaoAnuncio" id="numberOneReverseButton" variant="contained" >1</Button>
                <Button id="numberTwoReverseButton" variant="contained" disabled>2</Button>
            </DivFooter>
        </div>
    )
}

export default CriacaoAnuncio2;