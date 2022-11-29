import React from "react";
import Header from "../components/Header";
import ProfileUserJuridica from "../components/ProfileUserJuridica";






function ProfileUserJ() {
    return (
        <div>
            <Header
                one="HISTORICO DE TRABALHOS"
                two="LOGOUT"
                three=""
                four=""
                linkOne="/historicotrabalhos"
                linkTwo="/"
                linkThree="/"
                linkFour="/"
            />
            <ProfileUserJuridica />
        </div>
    );
}
export default ProfileUserJ;