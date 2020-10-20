import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { Container, Typography } from '@material-ui/core';

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { validarCpf, validarSenha } from './models/cadastro'

function App() {
    return (
        <Container component="article" maxWidth="sm">
            <Typography
                variant="h3"
                component="h1"
                align="center">
        Formulário de cadastro
            </Typography>
            <FormularioCadastro aoEnviar={aoEnviarForm} validacoes={{cpf: validarCpf, senha: validarSenha}} />
        </Container>
    );
}

function aoEnviarForm(dados) {
    console.log(dados);
}

export default App;
