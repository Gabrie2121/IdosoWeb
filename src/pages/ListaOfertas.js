import React from "react";
import { Link } from 'react-router-dom';

import Header from "../components/Header/";
import SearchField from "../components/SearchField/";
import OfferFilter from "../components/OfferFilter/";
import Offer from "../components/Offer/";

import styled from 'styled-components'

import starImgCompleta from '../assets/listaOfertas/estrelasCompletas.png';
import starImgIncompleta from '../assets/listaOfertas/estrelasNaoCompletas.png';
import aliceImage from '../assets/listaOfertas/ofertas/alice.png';
import bernadoImage from '../assets/listaOfertas/ofertas/bernado.png';
import brunoImage from '../assets/listaOfertas/ofertas/bruno.png';
import camilaImage from '../assets/listaOfertas/ofertas/camila.png';
import davidImage from '../assets/listaOfertas/ofertas/david.png';
import eduardaImage from '../assets/listaOfertas/ofertas/eduarda.png'
import areaLaudo from '../assets/listaOfertas/areaLaudos.png';


import polygonSelection from '../assets/listaOfertas/polygonSelection.png';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FavoriteIcon from '@mui/icons-material/Favorite';

import styleAvaliacaoModal from './../styles/modalAvaliacao.css';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const DivBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
`

const DivSearch = styled.div`
    width: 70%;
    height: 100px;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
`

const Items = styled.div`
    width: 100%;
    overflow-wrap: break-word;
    display: flex;
`

const SpanListaOfertas = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
`

const DivFilters = styled.div`
    width: 70%;
    height: 100px;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
`

const DivOfferFilter = styled.div`
    width: 120px;
    height: 30px;
    background-color: #5BB159;
    border: 0px solid transparent;
    border-radius: 15px;
    margin-left: -265px;
`

const SpanFilterValueDistance = styled.span`
    font-size: 9pt;
    position: absolute;
    margin-left: 21px;
    margin-top: 8px;
`
const SpanFilterValuePCD = styled.span`
    font-size: 12pt;
    position: absolute;
    margin-top: 7px;
    margin-left: 45px;
`

const ItemFilter = styled.div`
    width: 200px;
    overflow-wrap: break-word;
    display: flex;
`
const SpanFilterDistance = styled.span`
    width: 200px;
    overflow-wrap: break-word;
    display: flex;
    margin-left: -248px;
    margin-top: 50px;
    position: absolute;
    color: #878787;
`

const SpanFilterPCD = styled.span`
    width: 200px;
    overflow-wrap: break-word;
    display: flex;
    margin-left: -225px;
    margin-top: 50px;
    position: absolute;
    color: #878787;
`
const SpanFilterGenre = styled.span`
    width: 200px;
    overflow-wrap: break-word;
    display: flex;
    margin-left: -240px;
    margin-top: 50px;
    position: absolute;
    color: #878787;
`
const SpanFilterPayment = styled.span`
    width: 200px;
    overflow-wrap: break-word;
    display: flex;
    margin-left: -272px;
    margin-top: 50px;
    position: absolute;
    color: #878787;
`

const SelectImage = styled.img`
    width: 13px;
    height: 12px;
    margin-top: 10px;
    margin-left: -20px;
`
const SelectImageComponent = styled.img`
    width: 13px;
    height: 12px;
    position: absolute;
    margin-top: 10px;
    margin-left: -170px;
`

const DivOffers = styled.div`
    width: 70%;
    height: 190px;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

const ItemOffer = styled.div`
    width: 1200px;
    overflow-wrap: break-word;
    display: flex;
    margin-top: 170px;
`

const DivButton = styled.div``

const AccessButtton1 = styled.button`
    width: 100px;
    height: 25px;
    background-color: #5BB159;
    border: 0px solid transparent;
    border-radius: 4px;
    margin-left: 275px;
`

const ProfieImage1 = styled.img`
    width: 90px;
    height: 90px;
    margin-left: -440px;
    margin-top: -70px;
`

const ProfieImageModal = styled.img`
    width: 140px;
    height: 140px;
    margin-left: 10px;
    margin-top: 20px;
`

const SpanName1 = styled.span`
    font-size: 18pt;
    margin-left: 5px;
    margin-top: -75px;
    color: #000000;
`
const StarImage1 = styled.img`
    width: 150px;
    height: 25px;
    margin-left: -280px;
    margin-top: -40px;
`

const SpanPayment1 = styled.span`
    margin-top: -33px;
    margin-left: 310px;
    position:absolute;
    font-size: 12pt;
    color: #000000;
`

const KmSpan1 = styled.span`
    margin-left: -145px;
    margin-top: -5px;
    font-size: 11pt;
    color: #000000;
`

const SpanAccess1 = styled.span`
    font-size: 8pt;
    margin-left: 202px;
    margin-top: 5px;

`

const SpanPcd1 = styled.div`
    margin-top: 50px;
    margin-left: -320px;
    color: #878787;
    font-size: 8pt;
`
const DivPcd1 = styled.div`
    width: 60px;
    height: 25px;
    background-color: #76BE74;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: -37px;
`

const SpanPcdValue1 = styled.span`
    margin-left: 16px;
    font-size: 10pt; 
    
`
const SpanTime1 = styled.div`
    margin-top: 50px;
    margin-left: 40px;
    color: #878787;
    font-size: 8pt;
`
const DivTime1 = styled.div`
    width: 90px;
    height: 25px;
    background-color: #76BE74;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: -60px;
`

const SpanTimeValue1 = styled.span`
    margin-left: 19px;
    font-size: 10pt;
`

// style segunda

const AccessButtton2 = styled.button`
    width: 100px;
    height: 25px;
    background-color: #5BB159;
    border: 0px solid transparent;
    border-radius: 4px;
    margin-left: 925px;
    margin-top: 1px;
`

const ProfieImage2 = styled.img`
    width: 90px;
    height: 90px;
    margin-left: -450px;
    margin-top: -70px;
`

const SpanName2 = styled.span`
    font-size: 18pt;
    margin-left: 5px;
    margin-top: -75px;
    color: #000000;
`
const StarImage2 = styled.img`
    width: 150px;
    height: 25px;
    margin-left: -280px;
    margin-top: -40px;
`

const SpanPayment2 = styled.span`
    margin-top: -33px;
    margin-left: 1165px;
    position:absolute;
    font-size: 12pt;
    color: #000000;
`

const KmSpan2 = styled.span`
    margin-left: -145px;
    margin-top: -5px;
    font-size: 11pt;
    color: #000000;
`

const SpanAccess2 = styled.span`
    font-size: 8pt;
    margin-left: 211px;
    margin-top: 5px;
`

const SpanPcd2 = styled.div`
    margin-top: 50px;
    margin-left: -320px;
    color: #878787;
    font-size: 8pt;
`
const DivPcd2 = styled.div`
    width: 60px;
    height: 25px;
    background-color: #76BE74;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: -37px;
`

const SpanPcdValue2 = styled.span`
    margin-left: 16px;
    font-size: 10pt; 
    
`
const SpanTime2 = styled.div`
    margin-top: 50px;
    margin-left: 40px;
    color: #878787;
    font-size: 8pt;
`
const DivTime2 = styled.div`
    width: 90px;
    height: 25px;
    background-color: #76BE74;
    border-radius: 20px;
    margin-top: 20px;
    margin-left: -60px;
`

const SpanTimeValue2 = styled.span`
    margin-left: 19px;
    font-size: 10pt; 
`

// Modal

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 550,
    height: 550,
    bgcolor: 'background.paper',
    p: 4,
    borderRadius: 3, 
  };

  const DivHeaderModal = styled.div`
    width: 100%;
    height: 240px;
  `

  const DivProfieImageModal = styled.div`
    width: 30%;
    height: 100%;
 `

 const DivProfileHeader = styled.div`
    width: 70%;
    height: 100%;
    margin-left: 30%;
    margin-top: -240px;
 `
 const DivCloseButton = styled.div`
    width: 100%;
    height: 10%;
`

    const DivName = styled.div`
        width: 100%;
        height: 10%;
    `

    const DivHeaderBody = styled.div`
        width: 100%;
        height: 80%;
        display: flex;
        flex-direction: row;
    `

    const DivRatingFilter = styled.div`
        width: 67%;
        height: 100%;
    `
    const DivRatingModal = styled.div`
        width: 100%;
        height: 50%;
        background-color: white;
        display: flex;
        flex-direction: row;
    `
    const DivFilterModal = styled.div`
        width: 100%;
        height: 50%;
    `
    const SpanPcdModal = styled.div`
    margin-top: 10px;
    margin-left: 15px;
    color: #878787;
    font-size: 8pt;
    `
    const DivPcdModal = styled.div`
        width: 60px;
        height: 25px;
        background-color: #76BE74;
        border-radius: 20px;
    `

    const SpanPcdValueModal = styled.span`
        margin-left: 16px;
        font-size: 10pt; 
        
    `

    const SpanTimeModal = styled.div`
    margin-top: -13px;
    margin-left: 92px;
    color: #878787;
    font-size: 8pt;
    `

    const DivTimeModal = styled.div`
        width: 90px;
        height: 25px;
        background-color: #76BE74;
        border-radius: 20px;
        margin-top: -47px;
        margin-left: 70px;
    `

    const SpanTimeValueModal = styled.span`
        margin-left: 15px;
        font-size: 10pt;
    `

    const SpanAgeModal = styled.div`
    margin-top: 9px;
    margin-left: 195px;
    color: #878787;
    font-size: 8pt;
    `

    const DivAgeModal = styled.div`
        width: 80px;
        height: 25px;
        background-color: #76BE74;
        border-radius: 20px;
        margin-top: -47px;
        margin-left: 166px;
    `

    const SpanAgeValueModal = styled.span`
        margin-left: 17px;
        font-size: 10pt;
    `


    const DivPaymentReport = styled.div`
        width: 33%;
        height: 100%;
    `

    const DivPaymentModal = styled.div`
        width: 100%;
        height: 30%;
    `

    const SpanPayment = styled.span`
    font-size: 15pt;
    font-weight: 100;
    color: black;
  `
    const DivReportModal = styled.div`
        width: 100%;
        height: 70%;
    `

    const DivReportSpan = styled.div`
        width: 100%;
        height: 20%;
    `

    const SpanReport = styled.span`
        font-size: 13pt;
        color: #000000;
        font-weight: 100;
    `

    const DivAreaReport = styled.div`
        width: 100%;
        heigth: 80%; 
    `
    const ReportImg = styled.img`
        width: 125px;
        height: 105px;
    `

  const DivBodyModal = styled.div`
    width: 100%;
    height: 260px;
    margin-top:-20px;
  `


  const SpanAvaliacao = styled.span`
    margin-left: 0px;
    margin-top: -100px;
    margin-bottom: 40px;
    font-size: 17pt;
    color: #000000;
    font-weight: 100;
  `
  
  const DivIcone = styled.div`
    position: absolute;
    margin-top: -20px;
    margin-left: 350px;
  `

  const DivNomeAvaliado = styled.div`
    margin-top: 20px;
  `

  const SpanNomeAvaliado = styled.span`
    margin-left: 170px;
    font-size: 18pt;
    font-weight: 100;
    color: black;
  `

  const DivRating = styled.div`
    width: 100%;
    height: 100%;
    margin-left: 10px;
    margin-top: 10px;
    position: absolute;
`

const DivComentario = styled.div`
    margin-top: 40px;
`


const DivTextField = styled.div`
    margin-top: 10px;
`

const SpanTexto = styled.span`
  width: 500px;
  margin-top: -180px;
  margin-left: 30px;
  font-size: 12pt;
  font-weight: 100;
  color: black;
  position: absolute;
  

`
const DivEnviarAvaliacao = styled.div`
    margin-left: 180px; 
    margin-top: 20px;
`

function ListaOfertas() {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Header
                one="MEU PERFIL"
                two="FAVORITOS"
                three="LISTA DE OFERTAS"
                four="LOGOUT"
                linkOne="/profile"
                linkTwo="/favoritos"
                linkThree="/criacaoanuncio"
                linkFour="/"
            />
            <DivBody>
                <DivSearch>
                    <Items>
                        <SpanListaOfertas>
                            Lista de ofertas
                        </SpanListaOfertas>
                    </Items>
                    <Items>
                        <SearchField />
                    </Items>
                    <Items>
                        <IconButton id="iconeFavorito" disabled>
                            <FavoriteIcon />
                        </IconButton>
                        <Button id="favoritosButton" component={Link} to="/Favoritos" variant="text">Favoritos</Button>
                    </Items>
                </DivSearch>
                <DivFilters>
                    <ItemFilter>
                        {/* <OfferFilter/> */}
                        <DivOfferFilter>
                            <SpanFilterValueDistance>
                                10km - 40 km
                            </SpanFilterValueDistance>
                        </DivOfferFilter>
                        <SpanFilterDistance>
                            Distância
                        </SpanFilterDistance>
                        <SelectImage src={polygonSelection} />
                    </ItemFilter>
                    <ItemFilter>
                        {/* <OfferFilter/> */}
                        <DivOfferFilter>
                            <SpanFilterValuePCD>
                                Não
                            </SpanFilterValuePCD>
                        </DivOfferFilter>
                        <SelectImage src={polygonSelection} />
                        <SpanFilterPCD style={ListaOfertas.pcd}>
                            PCD
                        </SpanFilterPCD>
                    </ItemFilter>
                    <ItemFilter>
                        <OfferFilter />
                        <SpanFilterGenre>
                            Gênero
                        </SpanFilterGenre>
                        <SelectImageComponent src={polygonSelection} />
                    </ItemFilter>
                    <ItemFilter>
                        <OfferFilter />
                        <SpanFilterPayment>
                            Valor a ser pago
                        </SpanFilterPayment>
                        <SelectImageComponent src={polygonSelection} />
                    </ItemFilter>
                </DivFilters>
                <DivOffers>
                    <ItemOffer>
                        <Offer />
                        {/* Primeira Oferta */}
                        <AccessButtton1 />
                        <ProfieImage1 src={aliceImage} />
                        <SpanName1>
                            Alice Dolores dos Santos
                        </SpanName1>
                        <StarImage1 src={starImgIncompleta} />
                        <SpanPayment1>
                            R$ 100,00
                        </SpanPayment1>
                        <KmSpan1>
                            15km
                        </KmSpan1>
                        <DivButton>
                            <Button onClick={handleOpen} variant="contained" id="acessarAnuncioButton">Acessar anúncio</Button>
                        </DivButton>                     
                        <SpanPcd1>
                            PCD
                        </SpanPcd1>
                        <DivPcd1>
                            <SpanPcdValue1>
                                Não
                            </SpanPcdValue1>
                        </DivPcd1>
                        <SpanTime1>
                            Período
                        </SpanTime1>
                        <DivTime1>
                            <SpanTimeValue1>
                                Matutino
                            </SpanTimeValue1>
                        </DivTime1>
                        {/* Segunda Oferta */}
                        <AccessButtton2 />
                        <ProfieImage2 src={bernadoImage} />
                        <SpanName2>
                            Bernado Jones S. Silvino
                        </SpanName2>
                        <StarImage2 src={starImgCompleta} />
                        <SpanPayment2>
                            R$ 70,00
                        </SpanPayment2>
                        <KmSpan2>
                            11km
                        </KmSpan2>
                        <SpanAccess2>
                            Acessar anúncio
                        </SpanAccess2>
                        <SpanPcd2>
                            PCD
                        </SpanPcd2>
                        <DivPcd2>
                            <SpanPcdValue2>
                                Não
                            </SpanPcdValue2>
                        </DivPcd2>
                        <SpanTime2>
                            Período
                        </SpanTime2>
                        <DivTime2>
                            <SpanTimeValue2>
                                Vespertino
                            </SpanTimeValue2>
                        </DivTime2>
                    </ItemOffer>
                </DivOffers>
                <DivOffers>
                    <ItemOffer>
                        <Offer />
                        {/* Primeira Oferta */}
                        <AccessButtton1 />
                        <ProfieImage1 src={brunoImage} />
                        <SpanName1>
                            Bruno M. Luis de Oliveira
                        </SpanName1>
                        <StarImage1 src={starImgIncompleta} />
                        <SpanPayment1>
                            R$ 150,00
                        </SpanPayment1>
                        <KmSpan1>
                            34km
                        </KmSpan1>
                        <SpanAccess1>
                            Acessar anúncio
                        </SpanAccess1>
                        <SpanPcd1>
                            PCD
                        </SpanPcd1>
                        <DivPcd1>
                            <SpanPcdValue1>
                                Não
                            </SpanPcdValue1>
                        </DivPcd1>
                        <SpanTime1>
                            Período
                        </SpanTime1>
                        <DivTime1>
                            <SpanTimeValue1>
                                Noturno
                            </SpanTimeValue1>
                        </DivTime1>
                        {/* Segunda Oferta */}
                        <AccessButtton2 />
                        <ProfieImage2 src={camilaImage} />
                        <SpanName2>
                            Camila Katharine Gomes
                        </SpanName2>
                        <StarImage2 src={starImgIncompleta} />
                        <SpanPayment2>
                            R$ 210,00
                        </SpanPayment2>
                        <KmSpan2>
                            20km
                        </KmSpan2>
                        <SpanAccess2>
                            Acessar anúncio
                        </SpanAccess2>
                        <SpanPcd2>
                            PCD
                        </SpanPcd2>
                        <DivPcd2>
                            <SpanPcdValue2>
                                Não
                            </SpanPcdValue2>
                        </DivPcd2>
                        <SpanTime2>
                            Período
                        </SpanTime2>
                        <DivTime2>
                            <SpanTimeValue2>
                                Matutino
                            </SpanTimeValue2>
                        </DivTime2>
                    </ItemOffer>
                </DivOffers>
                <DivOffers>
                    <ItemOffer>
                        <Offer />
                        {/* Primeira Oferta */}
                        <AccessButtton1 />
                        <ProfieImage1 src={davidImage} />
                        <SpanName1>
                            David S. Mariano Paulino
                        </SpanName1>
                        <StarImage1 src={starImgIncompleta} />
                        <SpanPayment1>
                            R$ 180,00
                        </SpanPayment1>
                        <KmSpan1>
                            20km
                        </KmSpan1>
                        <SpanAccess1>
                            Acessar anúncio
                        </SpanAccess1>
                        <SpanPcd1>
                            PCD
                        </SpanPcd1>
                        <DivPcd1>
                            <SpanPcdValue1>
                                Não
                            </SpanPcdValue1>
                        </DivPcd1>
                        <SpanTime1>
                            Período
                        </SpanTime1>
                        <DivTime1>
                            <SpanTimeValue1>
                                Matutino
                            </SpanTimeValue1>
                        </DivTime1>
                        {/* Segunda Oferta */}
                        <AccessButtton2 />
                        <ProfieImage2 src={eduardaImage} />
                        <SpanName2>
                            Eduarda Beatriz C. Souza
                        </SpanName2>
                        <StarImage2 src={starImgCompleta} />
                        <SpanPayment2>
                            R$ 95,00
                        </SpanPayment2>
                        <KmSpan2>
                            20km
                        </KmSpan2>
                        <SpanAccess2>
                            Acessar anúncio
                        </SpanAccess2>
                        <SpanPcd2>
                            PCD
                        </SpanPcd2>
                        <DivPcd2>
                            <SpanPcdValue2>
                                Não
                            </SpanPcdValue2>
                        </DivPcd2>
                        <SpanTime2>
                            Período
                        </SpanTime2>
                        <DivTime2>
                            <SpanTimeValue2>
                                Matutino
                            </SpanTimeValue2>
                        </DivTime2>
                    </ItemOffer>
                </DivOffers>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                    <DivHeaderModal>
                        <DivProfieImageModal>
                            <ProfieImageModal src={aliceImage} />
                        </DivProfieImageModal>
                        <DivProfileHeader>
                            <DivCloseButton>
                                <DivIcone>
                                    <IconButton onClick={handleClose} id="iconeFechar">
                                        <HighlightOffIcon id="iconClose" fontSize ="large"/>
                                    </IconButton>
                                </DivIcone>
                            </DivCloseButton>
                            <DivName>
                                <SpanAvaliacao>
                                    Alice Dolores dos Santos
                                </SpanAvaliacao>
                            </DivName>
                            <DivHeaderBody>
                                <DivRatingFilter>
                                    <DivRatingModal>
                                        <DivRating>
                                            <Stack spacing={1}>
                                                <Rating id="estrelasIcon"  name="half-rating-read" defaultValue={4.5} precision={0.5}/>
                                            </Stack>
                                        </DivRating>
                                    </DivRatingModal>
                                    <DivFilterModal>
                                        <DivPcdModal>
                                            <SpanPcdValueModal>
                                                Não
                                            </SpanPcdValueModal>
                                        </DivPcdModal>
                                        <SpanPcdModal>
                                            PCD
                                        </SpanPcdModal>
                                        <SpanTimeModal>
                                            Período
                                        </SpanTimeModal>
                                        <DivTimeModal>
                                            <SpanTimeValueModal>
                                                Matutino
                                            </SpanTimeValueModal>
                                        </DivTimeModal>
                                        <SpanAgeModal>
                                            Idade
                                        </SpanAgeModal>
                                        <DivAgeModal>
                                            <SpanAgeValueModal>
                                                74 anos
                                            </SpanAgeValueModal>
                                        </DivAgeModal>
                                    </DivFilterModal>
                                </DivRatingFilter>
                                <DivPaymentReport>
                                    <DivPaymentModal>
                                        <SpanPayment>
                                            R$ 100,00
                                        </SpanPayment>                 
                                    </DivPaymentModal>
                                    <DivReportModal>
                                        <DivReportSpan>
                                            <SpanReport>
                                                Laudos
                                            </SpanReport>
                                        </DivReportSpan>
                                        <DivAreaReport>
                                            <ReportImg src={areaLaudo} />
                                        </DivAreaReport>
                                    </DivReportModal>
                                </DivPaymentReport>
                            </DivHeaderBody>
                        </DivProfileHeader>     
                        <DivNomeAvaliado>
                        </DivNomeAvaliado>
                    </DivHeaderModal>
                    <DivBodyModal>
                        <DivComentario>
                        </DivComentario>
                        <DivTextField>
                            <TextField
                                id="outlined-multiline-static"
                                multiline
                                rows={8}
                                inputProps={
                                    { readOnly: true, }
                                }
                            />  
                        </DivTextField>
                        <SpanTexto>
                             Minha mãe, é uma senhora muito doce e  paciente.  Preciso que alguém faça companhia para ela nos períodos da tarde, ela perdeu meu pai recentemente. Precisa de atenção redobrada, por conta dos remédios.
                        </SpanTexto>
                        <DivEnviarAvaliacao>
                            <Button onClick={handleOpen} id="aceitarButton" variant="contained">Aceitar Oferta</Button>  
                        </DivEnviarAvaliacao>       
                    </DivBodyModal>  
                    </Box>
                </Modal>
            </DivBody>
        </div>
    )
}

export default ListaOfertas;