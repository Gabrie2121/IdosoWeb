import React, { useState, createContext, useContext } from 'react'

export const AuthContext = createContext({});


export const AuthProvider = (props) => {
    const [Usuario, setUsuario] = useState({
        Email: '',
        Password: '',
        ConfirmPassword: '',
        NotifyEmail: false,
        Nome:'',
        Sobrenome:'',
        DataNascimento:'',
        CPF:'',
        TipoUsuario:0,
        Sexo:0,
        CEP:'',
        UF:'',
        Cidade:'',
        Logradouro:'',
        Complemento:'',
        Apelido:''
    });

    return (
        <AuthContext.Provider value={{ Usuario, setUsuario }}>
            {props.children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);



