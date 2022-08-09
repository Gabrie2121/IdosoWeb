import React, { useState } from 'react';
import Header from "../components/Header";
import CadastroLogin from "../components/Usuario/CadastroLogin";
import CadastroInfoBasica from "../components/Usuario/CadastroInfoBasicas";
import CadastroEndereco from "../components/Usuario/CadastroEndereco";
import { useAuth } from '../providers/auth';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function UsuarioCadastro() {
    
    const [form, setForm] = useState(0);

    let formUser=1;
    if (form == 0) {
        formUser = <CadastroLogin />       
    }
    else if(form==1) {
        formUser = <CadastroInfoBasica />
    }
    else{
        formUser = <CadastroEndereco />
    }

    return (
            
        <div>
            <Header />            
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" component="form" sx={{ '& .MuiTextField-root': { m: 1,p:1, width: '25ch' }, }}  >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {formUser}              
            <Box sx={{ "& > :not(style)": { display: 'inline-flex', m: 1, p:1 } }}>
                <Button name="One" variant="contained" sx={{ borderRadius: 100, borderWidth: 1, backgroundColor: "#5BB159" }} onClick={() => setForm(0)}>1</Button>
                <Button name="Two" variant="contained" sx={{ borderRadius: 100, borderWidth: 1, backgroundColor: "#5BB159" }} onClick={() => setForm(1)}>2</Button>
                <Button name="Three" variant="contained" sx={{ borderRadius: 100, borderWidth: 1, backgroundColor: "#5BB159" }} onClick={() => setForm(2)}>3</Button>
            </Box>
            </Box>  
            </Box>               
        </div>
        
    );
   
}

export default UsuarioCadastro;