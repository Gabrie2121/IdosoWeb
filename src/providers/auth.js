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
        TipoUsuario:1,
        Sexo:'M',
        CEP:'',
        UF:'',
        Cidade:'',
        Logradouro:'',
        Complemento:'',
        Apelido:'',
        NomeEmpresa:'',
        CNPJ:'',
        SituacaoTributaria:'',
        Formacao:'',
        UFEmpresa:'',
        InscricaoEstadual:''
    });

    return (
        <AuthContext.Provider value={{ Usuario, setUsuario }}>
            {props.children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);



