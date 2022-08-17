import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header/";

import styled from 'styled-components'
import { IoIosArrowDown } from "react-icons/io";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";



import logoIdoso from '../assets/fotohome.png'
import nossaMissao from '../assets/NossaMissao.png'
import todoCuidado from '../assets/TodoCuidado.png'
import nossoServico from '../assets/NossoServico.png'
import imageOne from '../assets/ImageOne.png'
import imageTwo from '../assets/ImageTwo.png'
import imageThree from '../assets/ImageThree.png'



const DivFoto = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
`
const Logo = styled.img`
    height: auto; 
`
const DivInformacoes = styled.div`
   width:50%;
   height: 100px;
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   align-items: center;
   background-color: #5BB159;
   border-radius: 20px;
   position: relative;
`


const SpanInformacoes = styled.div`
    width: 100vw;
    height: auto;
    font-size: 15px;
    overflow-wrap: break-word;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ImageInformacoes = styled.img`
    width: 60px;
    height: auto;
    padding: 20px;

`

const DivRedonda = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 80px;
`

const SpanRedonda = styled(Link)`
    background-color: #92CB90 ;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #FFF;
    scroll-behavior: smooth;
`

const DivDadOne = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    justify-content: center;
`
const DivChildrenOne = styled.div`
    width: 70vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

const DivLittleChildren = styled.div`
    width: 30vw;
    height: auto;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;   
`

const ImageQuemSomos = styled.img`
    

`

const Text = styled.label`
    font-style: normal;
    color: #000;
    font-family: 'Montserrat', sans-serif;
`

const TextSecond = styled.label`
    font-style: normal;
    color: black;
    font-size: 15px;
    font: 400 'Montserrat', sans-serif;
`

const DivDadTwo = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: start;
    align-items: center;
    justify-content: center;
`

const DivChildrenTwo = styled.div`
    width: 70vw;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row-reverse;
`
const TextSecondTwo = styled.label`
    font-style: normal;
    color: black;
    font-size: 15px;
    font: 400 'Montserrat', sans-serif;
`

const FooterIdoso = styled.footer`
    width: 100%;
    height: 15%;
    background-color: #5BB159;
    position: absolute;
    margin-top: 10%;
    display: flex;
    align-items: center;
    justify-content: center;
`
const DivChildrenFooter = styled.div`
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const DivLittleChildrenFooter = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-evenly;
`

const DivIconFooterOne = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

const DivIconFooterTwo = styled.div`
    width: 93%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
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
                <SpanRedonda  to="/">
                    <IoIosArrowDown size={30} />
                </SpanRedonda>
            </DivRedonda>

            <DivDadOne>
                <DivChildrenOne>
                    <ImageQuemSomos src={imageOne} />
                    <DivLittleChildren>
                        <Text>QUEM SOMOS</Text>
                        <TextSecond>
                            A IDoso é uma plataforma totalmente gratuita, que busca levar a melhor
                            experiência para seus usuários na hora
                            de buscar um(a) cuidador(a) para as pessoas que necessitam.
                        </TextSecond>
                    </DivLittleChildren>
                </DivChildrenOne>
            </DivDadOne>


            <DivDadTwo>
                <DivChildrenTwo>
                    <ImageQuemSomos src={imageTwo} />
                    <DivLittleChildren>
                        <Text>EM QUEM ESTAMOS FOCADOS?</Text>
                        <TextSecondTwo>
                            Nossas soluções estão focadas no público idoso, que precisa de cuidados com mais atenção.
                        </TextSecondTwo>
                    </DivLittleChildren>
                </DivChildrenTwo>
            </DivDadTwo>

            <DivDadOne>
                <DivChildrenOne>
                    <ImageQuemSomos src={imageThree} />
                    <DivLittleChildren>
                        <Text>NOSSA MISSÃO</Text>
                        <TextSecond>
                            Nossas soluções estão focadas no público idoso, que precisa de cuidados com mais atenção.
                        </TextSecond>
                    </DivLittleChildren>
                </DivChildrenOne>
            </DivDadOne>

            <FooterIdoso>
                <DivChildrenFooter>
                    <DivIconFooterOne>
                        <MdEmail size={30} />
                        contato@idoso.com
                    </DivIconFooterOne>
                    <DivIconFooterTwo>
                        <MdLocationOn size={30} />
                        Av. Paulista, 127
                    </DivIconFooterTwo>


                </DivChildrenFooter>

                <DivLittleChildrenFooter>
                    <BsInstagram size={30} />
                    <BsFacebook size={30} />
                    <BsLinkedin size={30} />
                </DivLittleChildrenFooter>
            </FooterIdoso>
        </div>
    );
}

export default HomeInstitucional;