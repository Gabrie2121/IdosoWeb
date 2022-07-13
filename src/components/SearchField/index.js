import React from "react";

import './../../styles/listaOfertas.css';

import barraPesquisa from '../../assets/listaOfertas/barraPesquisa.png'

import styled from 'styled-components'

const DivField = styled.div`
    width: 450px;
    height: 50px;
    display: flex;
`

const ImgInput = styled.img`
    width: 100%;
    height: 100%;
`

const InfoInput = styled.input`
    width: 450px;
    height: 40px;
    border: none;
    background: transparent;
    outline: none;
    margin-top: 1%;
    margin-left: -400px;
    color: #A5A5A5;
`

function SearchField() {
    return (
        <div>
            <DivField>
                <ImgInput src={barraPesquisa} />
                    <InfoInput placeholder="Localizar por nome, idade..." placeholderTextColor="#FFF" >
                    </InfoInput>
            </DivField>
        </div>
    )
}

export default SearchField;