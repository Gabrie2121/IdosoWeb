import React from "react";

import Header from "../components/Header/";
import SearchField from "../components/SearchField/";
import OfferFilter from "../components/OfferFilter/";

import styled from 'styled-components'

import heartImg from '../assets/listaOfertas/heart.png';


const DivBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: pink;
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

const SpanListaOfertas = styled.span`
    display: flex;
    justify-content: center;
    color: #666666;
    font-size: 20pt;
` 
const HeartImage = styled.img`
    width: 30px;
    margin-top: 0px;
    margin-left: 71px;
    position: absolute;
`

const SpanFavorites = styled.span`
    color: #878787;
    margin-left: 15%;
    margin-top: 30px;
    font-size: 12pt;
` 

const DivFilters = styled.div`
    width: 70%;
    height: 100px;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
` 

const ItemFilter = styled.div`
    width: 200px;
    overflow-wrap: break-word;
    display: flex;
`
const SpanFilter = styled.span`
    width: 200px;
    overflow-wrap: break-word;
    display: flex;
    margin-left: -370px;
    margin-top: 50px;
`

const DivOffers = styled.div`
    width: 70%;
    height: 100px;
    align-items: center;
    flex-direction: row;
    display: flex;
    justify-content: center;
    backgroud-color: gray;
`

function ListaOfertas() {
    return (
        <div>
            <Header/>
            <DivBody>
                <DivSearch>
                    <Items>
                        <SpanListaOfertas>
                            Lista de ofertas
                        </SpanListaOfertas>
                    </Items>
                    <Items>
                        <SearchField/>
                    </Items>
                    <Items>
                        <HeartImage src={heartImg} />
                        <SpanFavorites>
                            Favoritos
                        </SpanFavorites>
                    </Items>     
                </DivSearch>
                <DivFilters>
                    <ItemFilter>
                        <OfferFilter/>
                        <SpanFilter>
                            Exemplo
                        </SpanFilter>
                    </ItemFilter>
                    <ItemFilter>
                        <OfferFilter/>
                        <SpanFilter>
                            Exemplo
                        </SpanFilter>
                    </ItemFilter>
                    <ItemFilter>
                        <OfferFilter/>
                        <SpanFilter>
                            Exemplo
                        </SpanFilter>
                    </ItemFilter>
                    <ItemFilter>
                        <OfferFilter/>
                        <SpanFilter>
                            Exemplo
                        </SpanFilter>
                    </ItemFilter>
                </DivFilters>
                <DivOffers>

                </DivOffers>
            </DivBody>
        </div>
    )
}

export default ListaOfertas;