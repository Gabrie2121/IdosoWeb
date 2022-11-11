import React, { useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

import { AiFillStar } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";

import ProfilePhoto from "../../assets/Profile.png";

import { Link } from "react-router-dom";
import CardPeople from "../Card";
import Header from "../Header";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FiFilter } from "react-icons/fi";
import { Button, IconButton, Rating, Stack, TextField } from "@mui/material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


const DivDad = styled.div`
  width: 100vw;
  height: 92vh;
  margin-top: 20px;
  display: flex;
`;

const DivDataProfile = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const DivDataProfileChildren = styled.div`
  width: 90%;
  height: 29.3%;
  background-color: #5bb159;
  border-radius: 30px;
  flex-direction: column;
  display: flex;
  align-items: flex-start;
`;

const DivDataProfileLittleOne = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 9px;
`;

const DivPhoto = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

const ImageProfile = styled.img`
  image-resolution: initial;
`;

const DivText = styled.div`
  width: 26%;
  min-height: 200px;
  height: 100px;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const DivLocation = styled.div`
  width: 42%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const TextCity = styled.text`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
`;

const DivValuation = styled.div`
  width: 100%;
  height: 60%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
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
  width: 72%;
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

const DivDataDescriptionChildren = styled.div`
  width: 90%;
  height: 65%;
  background-color: #5bb159;
  border-radius: 30px;
  flex-direction: column;
  display: flex;
  align-items: flex-end;
`;

const DivOpenOffers = styled.div`
  width: 68%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DivOpenOffersChildren = styled.div`
  width: 90%;
  max-height: 95%;
  background-color: #5bb159;
  border-radius: 30px;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar-track {
    background-color: #f4f4f4;
  }
  ::-webkit-scrollbar {
    width: 6px;
    background: #f4f4f4;
  }
  ::-webkit-scrollbar-thumb {
    background: #dad7d7;
  }
`;

const DivDataDescriptionTextOne = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const DivTextDescription = styled.text`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 30px;
`;

const DivDataDescriptionTextTwo = styled.div`
  width: 100%;
  height: 70%;
  min-height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivTextDescriptionSecond = styled.text`
  width: 90%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
`;

const DivTextSelectFilter = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
`;

const LinkFilter = styled(Link)`
  text-decoration: none;
  color: #fff;
`;

const DivLink = styled.div`
  width: 97%;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const modalStyle = {
  position: "absolute",
  top: "35%",
  left: "85%",
  transform: "translate(-50%, -50%)",
  width: 200,
  height: 150,
  bgcolor: "#76BE74",
  p: 4,
  borderRadius: 3,
};

const SpanAvaliacao = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000;
  font-weight: 100;
`;

const DivIcone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 1px 0;
`;

const DivNomeAvaliado = styled.div`
  margin-top: 15px;
  display: flex;
  gap: 10px;
`;

const SpanNomeAvaliado = styled.input`
  font-size: 10pt;
  font-weight: 100;
  color: black;
`;

const LinkSeleccion = styled(Link)`
  text-decoration: none;
  color: #fff;
  display: flex;
  gap: 10px;
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

const modalStyleCandidatura = {
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

function ProfileUserOfertasAbertoFisica() {
  const [open, setOpen] = React.useState(false);
  const [openCandidatura, setOpenCandidatura] = React.useState(false);

  const [usuario, setUsuario] = React.useState({});
  const [anuncios, setAnuncios] = React.useState([]);

  const handleOpen = () => setOpen(true);
  const handleOpenCandidatura = () => setOpenCandidatura(true);

  const handleClose = () => setOpen(false);
  const handleCloseCandidatura = () => setOpenCandidatura(false);


  const handleInformation = () => {
    axios
      .get(`http://localhost:9999/idoso/home/${1}`, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setUsuario(res.data);
        setAnuncios(res.data.anunciosAberto);
      })
      .catch((error) => {
        console.log("Whoops! Houve um erro.", error.message || error);
      });
  };

  useEffect(() => {
    handleInformation();
  }, []);

  return (
    <div>
      <Header
        two="HISTORICO DE CONTRATOS"
        three="CRIAR OFERTA"
        four="LOGOUT"
        linkOne="/"
        linkTwo="/criacaoanuncio"
        linkThree="criacaoanuncio"
        linkFour="/"
      />
      <DivDad>
        <DivDataProfile>
          <DivDataProfileChildren>
            <DivDataProfileLittleOne>
              <DivPhoto>
                <ImageProfile src={ProfilePhoto} />
              </DivPhoto>
              <DivText>{usuario.nome}</DivText>
              <DivLocation>
                <MdOutlineLocationOn size={30} fill={"#FFF"} />
                <TextCity>{usuario.cidade}</TextCity>
              </DivLocation>
            </DivDataProfileLittleOne>
            <DivValuation>
              <DivStars>
                <AiFillStar size={30} fill={"#FFC700"} />
                <AiFillStar size={30} fill={"#FFC700"} />
                <AiFillStar size={30} fill={"#FFC700"} />
                <AiFillStar size={30} fill={"#FFC700"} />
                <AiFillStar size={30} fill={"#FFC700"} />
              </DivStars>
              <DivTextStar>{`(${usuario.avaliacao} em avaliação)`}</DivTextStar>
            </DivValuation>
          </DivDataProfileChildren>

          <DivDataDescriptionChildren>
            <DivDataDescriptionTextOne>
              <DivTextDescription>Bio</DivTextDescription>
              <HiPencilAlt size={24} />
            </DivDataDescriptionTextOne>

            <DivDataDescriptionTextTwo>
              <DivTextDescriptionSecond>
                {usuario.biografia}
              </DivTextDescriptionSecond>
            </DivDataDescriptionTextTwo>
          </DivDataDescriptionChildren>
        </DivDataProfile>

        <DivOpenOffers>
          <DivOpenOffersChildren>
            <DivLink>
              <LinkFilter to onClick={handleOpen} id="escolherOpcoes">
                <FiFilter size={30} />
              </LinkFilter>
            </DivLink>
            <DivTitle>Ofertas em Aberto</DivTitle>
            {anuncios.map((anuncio) => {
              console.log(anuncio);
              return (
                <CardPeople
                  namePeople={anuncio.nomePrestador}
                  pricePeople={`${anuncio.valorHora},00`}
                  avaliacaoPeople={`(${anuncio.avaliacao} em avaliação)`}
                  formacaoPeople={anuncio.curso}
                />
              );
            })}
          </DivOpenOffersChildren>
        </DivOpenOffers>

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={modalStyle}>
            <SpanAvaliacao>Escolhe uma Opção</SpanAvaliacao>

            <DivNomeAvaliado>
              <LinkSeleccion to="/profile-fisica-ofertas-aberto">
                <SpanNomeAvaliado type="checkbox" />
                Ofertas em Aberto
              </LinkSeleccion>
            </DivNomeAvaliado>

            <DivNomeAvaliado>
              <LinkSeleccion to="/profile-fisica-oferta-atual">
                <SpanNomeAvaliado type="checkbox" />
                Oferta Atual
              </LinkSeleccion>
            </DivNomeAvaliado>

            <DivNomeAvaliado>
              <Button onClick={handleOpenCandidatura} id="avaliarButton" variant="contained">Avaliar
                <SpanNomeAvaliado type="checkbox" />
                Candidatos
              </Button>
            </DivNomeAvaliado>
          </Box>
        </Modal>
      </DivDad>

      <Modal
        open={openCandidatura}
        onClose={handleCloseCandidatura}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyleCandidatura}>
          <SpanAvaliacao>
            Avaliação
          </SpanAvaliacao>

        </Box>
      </Modal>
    </div>
  );
}

export default ProfileUserOfertasAbertoFisica;