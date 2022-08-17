import React, { useState } from 'react';
import styled from 'styled-components'
import '../../styles/global.css';
import foto from '../../assets/UserDefault.png'

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import { useAuth } from '../../providers/auth';


const ImageUser = styled.img`
    width: 25%;
    height: 25%;
    borderRadius: 100;
    borderColor: "white";
    borderWidth:1;
`
function FormCadastro() {

    const { Usuario, setUsuario } = useAuth();

    const [input, setInput] = useState({
        Email: Usuario.Email,
        Password: Usuario.Password,
        ConfirmPassword: Usuario.ConfirmPassword,
        NotifyEmail:Usuario.NotifyEmail,
        Nome: Usuario.Nome,
        Sobrenome: Usuario.Sobrenome,
        CPF: Usuario.CPF,
        DataNascimento: Usuario.DataNascimento,
        TipoUsuario: Usuario.TipoUsuario,
        Sexo: Usuario.Sexo,
        CEP: Usuario.CEP,
        UF: Usuario.UF,
        Logradouro: Usuario.Logradouro,
        Complemento: Usuario.Complemento,
        Apelido: Usuario.Apelido,
    });
    

    const [valuesPassword, setPassword] = useState({
        showPassword: false,
        showPasswordConfirm: false
    });

    const [error, setError] = useState({
        password: '',
        confirmPassword: ''
    })

    const handleClickShowPassword = () => {
        setPassword({
            ...valuesPassword,
            showPassword: !valuesPassword.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleClickShowConfirmPassword = () => {
        setPassword({
            ...valuesPassword,
            showconfirmPassword: !valuesPassword.showconfirmPassword,
        });
    };

    const handleMouseDownConfirmPassword = (event) => {
        event.preventDefault();
    };


    const validateprops = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {
                case "password":
                    if (Usuario.confirmPassword && value !== Usuario.confirmPassword) {
                        stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                    } else {
                        stateObj["confirmPassword"] = Usuario.confirmPassword ? "" : error.confirmPassword;
                    }
                    break;

                case "confirmPassword":
                    if (Usuario.password && value !== Usuario.password) {
                        stateObj[name] = "Password and Confirm Password does not match.";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    function onChange(ev) {
        const { name, value } = ev.target;

        if ([name] == 'email') {
            setInput({ ...input, Email:value });            
        }
        else if([name]=='password'){
            setInput({  ...input, Password:value });
        }
        else if([name]=='confirmPassword'){
            setInput({  ...input,ConfirmPassword:value });
        }
        else if([name]=='notifyEmail'){
            setInput({ ...input, NotifyEmail:value });
        }
        setUsuario(input);
        localStorage.setItem('Usuario', JSON.stringify(input));
    }

    return (
        <div>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <ImageUser src={foto} />
                    <TextField name="email" required id="outlined-required" label="Alterar E-mail"  onChange={onChange} value={(input.Email)} />
                    <FormGroup>
                        <FormControlLabel control={<Checkbox name="notifyEmail" defaultChecked color="success"  onChange={onChange} value={(input.NotifyEmail)} />} label="Receber notificações no e-mail" />
                    </FormGroup>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                        <OutlinedInput
                            name="password"
                            id="outlined-adornment-password"
                            type={valuesPassword.showPassword ? 'text' : 'password'}
                            onChange={onChange} 
                            onBlur={validateprops}
                            value={(input.Password)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {valuesPassword.showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-Confirmpassword">Confirmar Senha</InputLabel>
                        <OutlinedInput
                            name="confirmPassword"
                            id="outlined-adornment-Confirmpassword"
                            type={valuesPassword.showconfirmPassword ? 'text' : 'password'}
                            onChange={onChange}
                            onBlur={validateprops}
                            value={(input.ConfirmPassword)}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowConfirmPassword}
                                        onMouseDown={handleMouseDownConfirmPassword}
                                        edge="end"
                                    >
                                        {valuesPassword.showconfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="confirmPassword"
                        />
                    </FormControl>
                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                </Box>
        </div>
    );
}
export default FormCadastro;