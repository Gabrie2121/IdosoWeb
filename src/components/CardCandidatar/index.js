import React, { useCallback, useEffect, useMemo } from "react";
import styled from "styled-components";

import axios from "axios";

import { AiFillStar } from "react-icons/ai";

import TodoCuidado from "../../assets/TodoCuidado.png";
import aliceImage from '../../assets/Prestador.png';

import { Button, IconButton, Rating, Stack, TextField } from "@mui/material";
import Modal from '@mui/material/Modal';
import { Box } from "@mui/system";

import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const WrapperCard = styled.div`
  min-width: 100%;
  min-height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardDiv = styled.div`
  width: 90%;
  height: 39%;
  border: solid 1px #e7e7e7;
  border-radius: 19px;
  margin: 10px 0;
`;

const DivPhoto = styled.div`
  min-width: 100%;
  min-height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin: 10px 0;
  gap: 7px;
`;

const ImageProfile = styled.img`
  image-resolution: initial;
  width: 25%;
  margin: 0 10px;
`;

const DivText = styled.div`
  min-width: 50%;
`;

const DivValuation = styled.div`
  width: 80%;
  height: 40%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const DivStars = styled.div`
  width: 70%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const DivTextStar = styled.div`
  width: 71%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`;

const DivFormação = styled.div`
  width: 68%;
  height: 20%;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  margin: 10px 0;
`;
const DivTextFormacao = styled.text`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #76be74;
  border-radius: 10px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
`;

const DivPrice = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
  color: #000;
  font-family: "Montserrat";
  font-style: bold;
  font-weight: 500;
`;

const DivWhatsApp = styled.button`
  width: 20%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border: solid 1px #a9f0a6;
  border-radius: 50px;
  background-color: #a9f0a6;
`;

const DivWhatsAppPai = styled.div`
  width: 150%;
  display: flex;
  margin: 5px 0;
`;


const DivTitle = styled.h1`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 10px;
`;

const DivRating = styled.div`
    margin-left: 220px;
    margin-top: 19px;
`

const DivComentario = styled.div`
    margin-top: 40px;
`

const SpanComentario = styled.span`
    font-size: 18pt;
    font-weight: 100;
    color: black;
`

const DivTextField = styled.div`
    margin-top: 10px;
`
const SpanTexto = styled.span`
  width: 500px;
  margin-top: -220px;
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

const ProfieImageModal = styled.img`
    width: 140px;
    height: 140px;
    margin-left: 10px;
    margin-top: 20px;
`



function CardCandidatar(props) {
  const [anuncioIds, setAnuncioIds] = React.useState([]);


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const idPrestador = localStorage.getItem("idUsuario")

  const idsAnuncios = () => {
    axios.get(`http://localhost:9999/prestador/anuncioIds`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      setAnuncioIds(res.data);
    })
      .catch((error) => {
        console.log("Whoops! Houve um erro.", error.message || error);
      })
  }

  const handleAceitarCandidatar = () => {
    anuncioIds.findIndex((anuncioId) => {
      axios
        .patch(`http://localhost:9999/idoso/candidaturas/aceitar/${anuncioId.id}`, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("Post", res.data);
        })
        .catch((error) => {
          console.log("Whoops! Houve um erro.", error.message || error);
        });
    })

  }

  const idAnunciosCallback = () => {
    idsAnuncios()
  }

  // useMemo(() => {
  //   idAnunciosCallback()
  // }, []);

  return (
    <div>


      <WrapperCard>
        <DivTitle>{props.titleJuridica}</DivTitle>

        <CardDiv>
          <DivPhoto>
            <ImageProfile src={TodoCuidado} />

            <DivText>{props.nameJuridica}</DivText>

            <DivPrice>{props.priceJuridica}</DivPrice>
          </DivPhoto>
          <DivValuation>
            <DivStars>
              <AiFillStar size={30} fill={"#FFC700"} />
              <AiFillStar size={30} fill={"#FFC700"} />
              <AiFillStar size={30} fill={"#FFC700"} />
              <AiFillStar size={30} fill={"#FFC700"} />
              <AiFillStar size={30} fill={"#FFC700"} />
            </DivStars>

            <DivTextStar>{props.avaliacaoPeople}</DivTextStar>

            <DivFormação>
              <DivTextFormacao>{props.pcd}</DivTextFormacao>
              <DivTextFormacao>{props.periodo}</DivTextFormacao>
            </DivFormação>
          </DivValuation>

          <DivWhatsAppPai onClick={handleOpen}>
            <DivWhatsApp>Ver candidatura</DivWhatsApp>
          </DivWhatsAppPai>
        </CardDiv>

      </WrapperCard>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <DivHeaderModal>
            <DivProfieImageModal>
              <ProfieImageModal src={TodoCuidado} />
            </DivProfieImageModal>
            <DivProfileHeader>
              <DivCloseButton>
                <DivIcone>
                  <IconButton onClick={handleClose} id="iconeFechar">
                    <HighlightOffIcon id="iconClose" fontSize="large" />
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
                        <Rating id="estrelasIcon" name="half-rating-read" defaultValue={4.5} precision={0.5} />
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
                  {/* <DivReportModal>
                    <DivReportSpan>
                      <SpanReport>
                        Laudos
                      </SpanReport>
                    </DivReportSpan>
                    <DivAreaReport>
                      <ReportImg src="" />
                    </DivAreaReport>
                  </DivReportModal> */}
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
              <Button onClick={handleAceitarCandidatar} id="aceitarButton" variant="contained">Aceitar Oferta</Button>
            </DivEnviarAvaliacao>
          </DivBodyModal>

        </Box>
      </Modal>
    </div>
  );
}

export default CardCandidatar;
