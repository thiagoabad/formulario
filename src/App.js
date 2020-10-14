import React from 'react';
import './App.css';
import 'fontsource-roboto';
import { Container } from "@material-ui/core";

import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';

function App() {
  return (
    <Container>
      <h1>Formulario de cadastro</h1>
      <FormularioCadastro></FormularioCadastro>
    </Container>
  );
}

export default App;
