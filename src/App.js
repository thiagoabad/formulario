import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { Container, Typography } from "@material-ui/core";

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

const cpfsInvalidos = ["00000000000", "11111111111", "22222222222", "33333333333", "44444444444", "55555555555", "66666666666", "77777777777", "88888888888", "99999999999"]

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography
        variant="h3"
        component="h1"
        align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} validarCpf={validarCpf} />
    </Container>
  );
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { cpf: { invalido: true, texto: "CPF deve ter 11 dígitos" } };
  } else {
      var Soma;
      var Resto;
      Soma = 0;
      if (cpfsInvalidos.includes(cpf)) return { cpf: { invalido: true, texto: "CPF inválido" } };

      for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(cpf.substring(9, 10))) return { cpf: { invalido: true, texto: "CPF inválido" } };

      Soma = 0;
      for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if ((Resto === 10) || (Resto === 11)) Resto = 0;
      if (Resto !== parseInt(cpf.substring(10, 11))) return { cpf: { invalido: true, texto: "CPF inválido" } };
      return { cpf: { invalido: false, texto: "" } };
  }

}

export default App;
