import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

import logoIdoso from '../../assets/logo.png'




const NavBar = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #5BB159;
    height: 8vh;
`
const Opcoes = styled.div`
    list-style: none;
    display: flex;
    margin-left: 50%;
`

const OpcoesHeader = styled(Link)`
    letter-spacing: 3px;
    margin-left: 32px;
    text-decoration: none;
    color: #FFF;
    &:hover { 
        color: #F3F1F1;
        opacity:0.8;
        transition: right .10s linear;
    }
`

const Logo = styled.img`
    width: 12%;
    display: flex;
`



function Header() {
    return (
        <header>
            <NavBar>
                <Logo src={logoIdoso} />
                <Opcoes>
                    <OpcoesHeader to="/">QUEM SOMOS</OpcoesHeader>
                    <OpcoesHeader to="/">CONTATO</OpcoesHeader>
                    <OpcoesHeader to="/">LOGIN</OpcoesHeader>
                    <OpcoesHeader to="/">CADASTRO</OpcoesHeader>
                </Opcoes>
            </NavBar>
        </header>
    );
}

export default Header;