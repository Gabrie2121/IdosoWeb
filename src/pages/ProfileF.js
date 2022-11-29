import React from "react";
import Header from "../components/Header";
import ProfileUserFisica from "../components/ProfileUserFisica";






function ProfileUserF() {
    return (
        <div>
            <Header
                two="HISTORICO DE CONTRATOS"
                three="CRIAR OFERTA"
                four="LOGOUT"
                linkOne="/"
                linkTwo="/historicocontratos"
                linkThree="/criacaoanuncio"
                linkFour="/"
            />
            <ProfileUserFisica />
        </div>
    );
}
export default ProfileUserF;