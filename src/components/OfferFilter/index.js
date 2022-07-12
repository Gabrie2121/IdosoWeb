import React from "react";

import polygonSelection from '../../assets/listaOfertas/polygonSelection.png';

import styled from 'styled-components'

const DivFilter = styled.div`
    width: 120px;
    height: 30px;
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    background-color: #878787;
    border: 0px solid transparent;
    border-radius: 15px;
    margin-left: -270px;
`

const SelectImage = styled.img`
    margin-top: -3px;
    margin-left: -20px;
`

function OfferFilter() {
    return (
        <div>
            <DivFilter>
                <Button title="example"/>
                    <SelectImage src= {polygonSelection}/>
            </DivFilter>
        </div>
    )
}

export default OfferFilter;