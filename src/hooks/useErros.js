import { useState } from 'react';

function useErros(validacoes){

    const estadoInicial = criarEstadoInicial(validacoes);

    const [erros, setErros] = useState(estadoInicial);

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

    function possoEnviar(){
        for (let campo in erros){
            if (erros[campo].invalido){
                return false;
            }
        }
        return true;
    }

    function criarEstadoInicial(validacoes){
        const estadoInicial = {};
        for (let campo in validacoes){
            estadoInicial[campo] = { invalido: false, texto: '' };
        }
        return estadoInicial;
    }

    return [erros, validarCampos, possoEnviar];
}

export default useErros;