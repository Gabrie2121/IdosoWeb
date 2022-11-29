import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

import logoIdoso from '../../assets/logo.png'


const HeaderStyle = styled.header`
    width: 100%;
    height: auto;
`

const NavBar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #5BB159;
    width: 100%;
    height: 8vh;
`
const Opcoes = styled.div`
    list-style: none;
    display: flex;
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
    cursor: pointer;
`


function Header(props) {
    return (
        <HeaderStyle props>
            <NavBar>
                <Logo className="logo" onClick={()=>window.location.href = 'http://localhost:3000/'} src={logoIdoso} />
                <Opcoes>
                    <OpcoesHeader to={`${props.linkOne.toLowerCase()}`}>{props.one}</OpcoesHeader>
                    <OpcoesHeader to={`${props.linkTwo.toLowerCase()}`}>{props.two}</OpcoesHeader>
                    <OpcoesHeader to={`${props.linkThree.toLowerCase()}`}>{props.three}</OpcoesHeader>
                    <OpcoesHeader to={`${props.linkFour.toLowerCase()}`}>{props.four}</OpcoesHeader>
                </Opcoes>
            </NavBar>
        </HeaderStyle>
    );
}

export default Header;