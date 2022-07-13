import React from "react";

import styled from 'styled-components'

import areaImage from '../../assets/listaOfertas/areaOferta.png'
import heartImg from '../../assets/listaOfertas/heart.png';



const DivArea = styled.div`
    width: 480px;
    height: 180px;
    display: flex;
    margin-left: -460px
`

const AreaImage = styled.img`
    width: 100%;
    height: 100%;
    margin-left: 390px;
    margin-top: -100px;
`

const HeartImage1 = styled.img`
    width: 40px;
    height: 20px;
    margin-top: -75px;
    margin-left: -40px;
`
function Offer() {
    return (
        <div>
             <DivArea>
                    <AreaImage src={areaImage}/>
                    <HeartImage1 src={heartImg}/>
                    <AreaImage src={areaImage}/>
                    <HeartImage1 src={heartImg}/>
            </DivArea>  
        </div>
    )
}

export default Offer;