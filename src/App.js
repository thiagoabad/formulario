import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { Container, Typography } from '@material-ui/core';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCpf, validarSenha, validarCep } from './models/cadastro';
import ValidacoesCadastro from './context/ValidacoesCadastro';

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography
                variant="h3"
                component="h1"
                align="center">
        Formulário de cadastro
            </Typography>
            <ValidacoesCadastro.Provider
                value={{cpf: validarCpf, senha: validarSenha, cep: validarCep}}
            >
                <FormularioCadastro aoEnviar={aoEnviarForm}/>
            </ValidacoesCadastro.Provider>
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log(dados);
}

export default App;
