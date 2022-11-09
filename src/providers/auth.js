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
        Documento:'',
        TipoUsuario:'FISICA',
        Sexo:'M',
        CEP:'',
        UF:'',
        Cidade:'',
        Logradouro:'',
        Complemento:'',
        Apelido:'',
        NomeEmpresa:'',
        SituacaoTributaria:'',
        Formacao:'',
        UFEmpresa:'',
        InscricaoEstadual:'',
        NomeFantasia:'',
        Celular:''
    });

    return (
        <AuthContext.Provider value={{ Usuario, setUsuario }}>
            {props.children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);



