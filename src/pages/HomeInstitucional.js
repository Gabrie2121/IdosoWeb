import React from "react";
import Header from "../components/Header/";

import styled from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";

import logoIdoso from '../assets/fotohome.png'
import nossaMissao from '../assets/NossaMissao.png'
import todoCuidado from '../assets/TodoCuidado.png'
import nossoServico from '../assets/NossoServico.png'
import imageOne from '../assets/ImageOne.png'


const DivFoto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const Logo = styled.img`
    width: fit-content;
    
`
const DivInformacoes = styled.div`
   width:40%;
   height: 90px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   background-color: #5BB159;
   border-radius: 20px;
   margin-top: 27%;
   position: absolute;
`

const SpanInformacoes = styled.span`
    font-size: 15px;
    overflow-wrap: break-word;
    display: flex;
     
`

const ImageInformacoes = styled.img`
    width: 60px;
    padding-left: 50px;
    margin-right: 10px;
`

const DivRedonda = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 80px;
`

const SpanRedonda = styled.span`
    background-color: #92CB90 ;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DivGrid = styled.div`
    margin-top: 100px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 50vh 50vh 40vh;  
    grid-gap: 50px 50px;
    grid-template-areas: "spanOne labelOne"
                         "labelTwo spanTwo"
                         "spanThree labelThree"   
    ;
    justify-content: center;
    align-items: center;
`

const SpanGridOne = styled.span`
      grid-area: spanOne;
`

const SpanGridTwo = styled.span`
    grid-area: spanTwo;
`

const SpanGridThree = styled.span`
    grid-area: spanThree;
    
`

const LabelOne = styled.label`
    font-size: larger;
    color: black;
    font-size: 20px;
    grid-area: labelOne;
`

const LabelTwo = styled.label`
    font-size: larger;
    color: black;
    font-size: 20px;
    grid-area: labelTwo;
`
const LabelThree = styled.label`
    font-size: larger;
    color: black;
    font-size: 20px;
    grid-area: labelThree;
`
const LabelText = styled.label`
    color: #000000;
    font-size: 15px;
`

const ImageQuemSomos = styled.img`
    padding-left: 50px;
    margin-right: 10px;
`


function HomeInstitucional() {
    return (
        <div>
            <Header />
            <DivFoto>
                <Logo src={logoIdoso} />
                <DivInformacoes>
                    <SpanInformacoes>
                        <ImageInformacoes src={nossaMissao} />
                        Nossa missão é ajudar
                    </SpanInformacoes>
                    <SpanInformacoes>
                        <ImageInformacoes src={todoCuidado} />
                        Todo cuidado e parceria com a melhor idade
                    </SpanInformacoes>
                    <SpanInformacoes>
                        <ImageInformacoes src={nossoServico} />
                        Nosso serviço é totalmente gratuito
                    </SpanInformacoes>
                </DivInformacoes>
            </DivFoto>
            <DivRedonda>
                <SpanRedonda>
                    <IoIosArrowDown size={30} />
                </SpanRedonda>
            </DivRedonda>
            <DivGrid>
                <SpanGridOne>
                    <ImageQuemSomos src={imageOne} />
                </SpanGridOne>
                <LabelOne>
                    QUEM SOMOS?
                    <LabelText>
                        A IDoso é uma plataforma totalmente gratuita,
                        que busca levar a melhor experiência para seus
                        usuários na hora de buscar um(a) cuidador(a) para as pessoas que necessitam.
                    </LabelText>
                </LabelOne>

                <SpanGridTwo>
                    <ImageQuemSomos src={imageOne} />
                </SpanGridTwo>

                <LabelTwo>
                    EM QUEM
                    ESTAMOS FOCADOS?
                    <LabelText>
                        A IDoso é uma plataforma totalmente gratuita,
                        que busca levar a melhor experiência para seus
                        usuários na hora de buscar um(a) cuidador(a) para as pessoas que necessitam.
                    </LabelText>
                </LabelTwo>


                <SpanGridThree>
                    <ImageQuemSomos src={imageOne} />
                </SpanGridThree>
                <LabelThree>
                    EM QUEM
                    ESTAMOS FOCADOS?
                    <LabelText>
                        A IDoso é uma plataforma totalmente gratuita,
                        que busca levar a melhor experiência para seus
                        usuários na hora de buscar um(a) cuidador(a) para as pessoas que necessitam.
                    </LabelText>
                </LabelThree>
            </DivGrid>
        </div>
    );
}

export default HomeInstitucional;