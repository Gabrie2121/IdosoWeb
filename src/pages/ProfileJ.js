import React from "react";
import Header from "../components/Header";
import ProfileUserJuridica from "../components/ProfileUserJuridica";






function ProfileUserJ() {
    return (
        <div>
            <Header
                two="HISTORICO DE TRABALHOS"
                three="CRIAR OFERTA"
                four="LOGOUT"
                linkOne="/"
                linkTwo="/historicotrabalhos"
                linkThree="/criacaoanuncio"
                linkFour="/"
            />
            <ProfileUserJuridica />
        </div>
    );
}
export default ProfileUserJ;