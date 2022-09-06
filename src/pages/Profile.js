import React from "react";
import Header from "../components/Header";
import ProfileUser from "../components/ProfileUser";






function Profile() {
    return (
        <div>
            <Header
                two="HISTORICO DE CONTRATOS"
                three="CRIAR OFERTA"
                four="LOGOUT"
                linkOne="/"
                linkTwo="/criacaoanuncio"
                linkThree="criacaoanuncio"
                linkFour="/"
            />
            <ProfileUser />
        </div>
    );
}
export default Profile;