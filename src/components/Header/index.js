import React from "react";
import {Link} from 'react-router-dom';
import logoIdoso from '../../assets/logo.png'

import styled from 'styled-components'


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

const OpcoesHeader = styled.li`
    letter-spacing: 3px;
    margin-left: 32px;
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
                    <OpcoesHeader>QUEM SOMOS</OpcoesHeader>
                    <OpcoesHeader>CONTATO</OpcoesHeader>
                    <OpcoesHeader>LOGIN</OpcoesHeader>
                    <OpcoesHeader><Link to="/Cadastro">CADASTRO</Link ></OpcoesHeader>
                </Opcoes>
            </NavBar>
        </header>
    );
}

export default Header;