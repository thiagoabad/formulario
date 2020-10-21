import React, { useContext, useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import ValidacoesCadastro from '../../context/ValidacoesCadastro';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erros, setErros] = useState({ senha: { invalido: false, texto: '' } });

    const validacoes = useContext(ValidacoesCadastro);

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

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (possoEnviar()){
                aoEnviar({
                    email, senha,
                });
            }
        }}
        >
            <TextField
                id="email"
                label="email"
                type="email"
                name="email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => { setEmail(event.target.value); }}
            />
            <TextField
                id="senha"
                label="senha"
                name="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth
                required
                onChange={(event) => { setSenha(event.target.value); }}
                onBlur={validarCampos}
                error={erros.senha.invalido}
                helperText={erros.senha.texto}
            />
            <Button
                color="primary"
                variant="contained"
                type="submit">
                Próximo
            </Button>
        </form>);
}

export default DadosUsuario;