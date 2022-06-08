import React from "react";
import Header from "../components/Header/";

import styled from 'styled-components'

import logoIdoso from '../assets/fotohome.png'

const DivTodoFoto = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const DivFoto = styled.div`
    width: 60%;
    height: 80%;
`
const Imagem = styled.img`
    width: fit-content;
`


function HomeInstitucional() {
    return (
        <div>
            <Header />
            <DivTodoFoto>
                <DivFoto>
                    <Imagem src={logoIdoso}/>
                </DivFoto>
            </DivTodoFoto>

        </div>
    );
}

export default HomeInstitucional;