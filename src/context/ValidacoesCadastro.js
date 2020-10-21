import React from 'react';

const ValidacoesCadastro = React.createContext(
    {cpf: semValidacao, senha: semValidacao, cep: semValidacao}
);

function semValidacao(dados){
    return {invalido: false, texto: ""};
}

export default ValidacoesCadastro;