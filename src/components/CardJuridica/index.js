import React, { useEffect } from "react";
import styled from "styled-components";

import axios from "axios";

import { AiFillStar } from "react-icons/ai";

import TodoCuidado from "../../assets/TodoCuidado.png";

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
const DivTextKm = styled.div`
  width: 55%;
  height: 20%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  color: #000;
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
`;

function CardJuridica(props) {

  const idPrestador = localStorage.getItem("idUsuario")
  const idsCandidatura = {
    prestadorId: idPrestador,
  }

  const handleCandidatar = (id) => {
    axios
      .post(`http://localhost:9999/prestador/candidatar/${id}`, JSON.stringify(idsCandidatura), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log("Post", res.data.anuncioId);
      })
      .catch((error) => {
        console.log("Whoops! Houve um erro.", error.message || error);
      });

  }

  return (
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

        <DivWhatsAppPai id={props.id} onClick={() => handleCandidatar(props.id)}>
          <DivWhatsApp>Candidatar-se</DivWhatsApp>
        </DivWhatsAppPai>
      </CardDiv>
    </WrapperCard>
  );
}

export default CardJuridica;
