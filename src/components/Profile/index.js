import React from "react";

import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import styled from 'styled-components'

import ProfileImage from '../../assets/FavoritosAndProfile/ProfileArea.png';

const DivProfileItem = styled.div`
    width: 100%;
    height: 200px;
    // background-color: purple;
    margin-top: 230px;
`
const ImageProfile = styled.img`
   width: 1440px;
   height: 200px;
`
const DivAreaFoto = styled.div`
    width: 130px;
    height: 130px;
    border-radius: 65px;
    background-color: gray;
    margin-top: -170px;
    margin-left: 50px;
`

const DivRating = styled.div`
    margin-left: 190px;
    margin-top: -99px;
`
const DivButtons = styled.div`
    width: 200px;
    margin-top: -50px;
    margin-left: 800px;
    flex-direction: column;
`

function Profile() {

    return (
        <div>
            <DivProfileItem>
                <ImageProfile src={ProfileImage} />
                <DivRating>
                <Stack spacing={1}>
                <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} readOnly />
                </Stack>
                </DivRating>
                <DivButtons>
                <Stack spacing={-1.5}>
                     <Button variant="text" color="success">Abrir chat</Button>
                    <Button variant="text" color="success">Ver perfil</Button>
                </Stack>         
                </DivButtons>
            </DivProfileItem>
        </div>
    )
}

export default Profile;