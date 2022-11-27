import React, { useState, createContext, useContext } from 'react'

export const IdosoContext = createContext({});

export const IdosoProvider = (props) => {
    const [Idoso, setIdoso] = useState({
        Nome: '',
        Descricao: '',
        Sobrenome: '',
        CPF: '',
        Genero: '',
        DataNascimento: '',
        Idade: '', 
        DoencaDisturbioConfirmacao: '',
        Parentesco: '',
        Frequencia: '',
        PCD: '',
        CEP: '',
        Estado: '',
        Cidade: '',
        Logradouro: '',
        Complemento:'',
        Apelido: '',
        MoramJuntos: '',
        Periodo: '',
        Pagamento: '',
        Repetir: '',
        DataInicial: '',
        DataFinal: '',
        HoraInicial: '',
        HoraFinal: '',
    });
    return (
        <IdosoContext.Provider value={{ Idoso, setIdoso }}>
            {props.children}
        </IdosoContext.Provider>
    );
};
console.log('',IdosoProvider);
export const useIdoso = () => useContext(IdosoContext);