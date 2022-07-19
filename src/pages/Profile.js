import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

import { AiFillStar } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";



import ProfilePhoto from "../assets/Profile.png";



const DivDad = styled.div`
    width: 100vw;
    height: 92vh;
    margin-top: 20px;
    display: flex;
`


const DivDataProfile = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`

const DivDataProfileChildren = styled.div`
    width: 90%;
    height: 29.3%;
    background-color: #5BB159;
    border-radius: 30px;
    flex-direction: column;
    display: flex;
    align-items: flex-start;
`

const DivDataProfileLittleOne = styled.div`
    width: 90%;
    height: 50%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 9px;
`

const DivPhoto = styled.div`
    width: 20%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
`

const ImageProfile = styled.img`
    image-resolution: initial;
`

const DivText = styled.div`
    width: 26%;
    min-height: 200px;
    height: 100px;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const DivLocation = styled.div`
    width: 42%;
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const TextCity = styled.text`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400; 
    font-size: 15px;
`

const DivValuation = styled.div`
    width: 100%;
    height: 60%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`

const DivStars = styled.div`
    width: 70%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const DivTextStar = styled.div`
    width: 72%;
    height: 20%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400; 
    font-size: 15px;
`

const DivDataDescriptionChildren = styled.div`
    width: 90%;
    height: 65%;
    background-color: #5BB159;
    border-radius: 30px;
    flex-direction: column;
    display: flex;
    align-items: flex-end;
`

const DivOpenOffers = styled.div`
    width: 68%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const DivOpenOffersChildren = styled.div`
    width: 80%;
    height: 95%;
    background-color: #5BB159;
    border-radius: 30px;
`

const DivDataDescriptionTextOne = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DivTextDescription = styled.text`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 30px;
`

const DivDataDescriptionTextTwo = styled.div`
    width: 100%;
    height: 70%;
    min-height: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const DivTextDescriptionSecond = styled.text`
    width: 90%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    font-size: 25px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400; 
`




function Profile() {
    return (
        <div>
            <Header />
            <DivDad>
                <DivDataProfile>
                    <DivDataProfileChildren>
                        <DivDataProfileLittleOne>
                            <DivPhoto>
                                <ImageProfile src={ProfilePhoto} />
                            </DivPhoto>
                            <DivText>José Nascimento</DivText>
                            <DivLocation>
                                <MdOutlineLocationOn size={30} fill={"#FFF"} />
                                <TextCity>São Paulo</TextCity>
                            </DivLocation>
                        </DivDataProfileLittleOne>
                        <DivValuation>
                            <DivStars>
                                <AiFillStar size={30} fill={"#FFC700"}/>
                                <AiFillStar size={30} fill={"#FFC700"}/>
                                <AiFillStar size={30} fill={"#FFC700"}/>
                                <AiFillStar size={30} fill={"#FFC700"}/>
                                <AiFillStar size={30} fill={"#FFC700"}/>
                            </DivStars>
                            <DivTextStar>(5,0 em avaliação)</DivTextStar>
                        </DivValuation>

                    </DivDataProfileChildren>

                    <DivDataDescriptionChildren>
                        <DivDataDescriptionTextOne>
                            <DivTextDescription>Bio</DivTextDescription>
                        </DivDataDescriptionTextOne>

                        <DivDataDescriptionTextTwo>
                            <DivTextDescriptionSecond>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                                type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                It was popularised in the 1960s with the release of Letraset sheets containing
                                Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </DivTextDescriptionSecond>
                        </DivDataDescriptionTextTwo>
                    </DivDataDescriptionChildren>


                </DivDataProfile>

                <DivOpenOffers>
                    <DivOpenOffersChildren>

                    </DivOpenOffersChildren>
                </DivOpenOffers>

            </DivDad>
        </div>
    );
}

export default Profile;