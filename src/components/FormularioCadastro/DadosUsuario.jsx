import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosUsuario({ aoEnviar }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({
                email, senha,
            });
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
            />
            <Button
                color="primary"
                variant="contained"
                type="submit">
                Cadastrar
            </Button>
        </form>);
}

export default DadosUsuario;