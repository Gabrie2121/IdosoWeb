import React from "react";

import styled from 'styled-components'

import Header from "../components/Header/";
import SearchField from "../components/SearchField/";
import Profile from "../components/Profile/";

import karina from '../assets/FavoritosAndProfile/Profiles/karina.png'
import leonardo from '../assets/FavoritosAndProfile/Profiles/leonardo.png'
import sergio from '../assets/FavoritosAndProfile/Profiles/sergio.png'
import heartImg from '../assets/listaOfertas/heart.png';

import Button from '@mui/material/Button';
import style from './../styles/Favoritos.css';


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

const SpanFavoritos = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
` 

const DivProfiles = styled.div`
    width: 75%;
    height: 200px;
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 100px;
    flex-direction: column;
`

const DivProfileItem = styled.div`
    width: 100%;
    height: 100%;
    overflow-wrap: break-word;
    display: flex;
    margin-top: 60px;
`

const SpanNome = styled.span`
    margin-top: 300px;
    margin-left: -1250px;
    color: black;
    font-size: 18pt;
`

const ProfileImage = styled.img`
    width: 130px;
    height: 130px;
    border-radius: 65px;
    margin-top: 265px;
    margin-left: 40px;
    position: absolute;
`

const HeartImage = styled.img`
    width: 30px;
    margin-top: 270px;
    margin-left: 1358px;
    position: absolute;
`

const DivButton = styled.div`
    margin-top: 350px;
    margin-left: 1260px;
    position: absolute;
`


function Favoritos() {

    return (
        <div>
            <Header/>
            <DivBody>
                <DivSearch>
                    <Items>
                        <SpanFavoritos>
                            Favoritos
                        </SpanFavoritos>
                    </Items>
                    <Items>
                        <SearchField/>
                    </Items>     
                </DivSearch>
                <DivProfiles>
                <DivProfileItem>
                    <Profile/>
                    <SpanNome>
                            Karina Alves
                    </SpanNome>
                    <ProfileImage src={karina}/>
                    <HeartImage src={heartImg} />
                    <DivButton>
                         <Button id="avaliadoButton" variant="contained" disabled>Avaliado</Button>
                     </DivButton>
                    </DivProfileItem>
                    <DivProfileItem>
                        <Profile/>
                        <SpanNome>
                            Leonardo Machado Junior
                        </SpanNome>
                        <ProfileImage src={leonardo}/>
                        <HeartImage src={heartImg} />
                        <DivButton>
                            <Button id="avaliarButton" variant="contained">Avaliar</Button>
                        </DivButton>
                    </DivProfileItem>
                    <DivProfileItem>
                        <Profile/>
                        <SpanNome>
                            Sergio Jessé Garcia
                        </SpanNome>
                        <ProfileImage src={sergio}/>
                        <HeartImage src={heartImg} />
                        <DivButton>
                            <Button id="avaliadoButton" variant="contained" disabled>Avaliado</Button>
                        </DivButton>
                    </DivProfileItem>
                </DivProfiles>
            </DivBody>
          
        </div>
    )
}

export default Favoritos;