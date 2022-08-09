import React, { useState, createContext, useContext } from 'react'

export const AuthContext = createContext({});


export const AuthProvider = (props) => {
    const [Usuario, setUsuario] = useState({
        Email: 'bmlfaisca',
        Password: '123',
        ConfirmPassword: '123',
        NotifyEmail: false,
        Nome:'brendo',
        Sobrenome:'Faisca',
        DataNascimento:'',
        CPF:'480.225.428-81',
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



