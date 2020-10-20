import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';

function DadosEntrega({ aoEnviar }) {

    const [cep, setCep] = useState(0);
    const [endereco, setEndereco] = useState('');
    const [numero, setNumero] = useState(0);
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({
                cep, endereco, numero, cidade, estado,
            });
        }}
        >
            <TextField
                id="cep"
                label="CEP"
                name="cep"
                type="number"
                variant="outlined"
                margin="normal"
                onChange={(event) => { setCep(event.target.value); }}
            />
            <TextField
                id="endereco"
                label="Endereço"
                name="endereco"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setEndereco(event.target.value); }}
            />
            <TextField
                id="numero"
                label="Número"
                name="numero"
                type="number"
                variant="outlined"
                margin="normal"
                onChange={(event) => { setNumero(event.target.value); }}
            />
            <TextField
                id="cidade"
                label="Cidade"
                name="cidade"
                type="text"
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setCidade(event.target.value); }}
            />
            <TextField
                id="estado"
                label="Estado"
                name="estado"
                type="text"
                variant="outlined"
                margin="normal"
                onChange={(event) => { setEstado(event.target.value); }}
            />
            <Button
                color="primary"
                variant="contained"
                type="submit"
                fullWidth>
                Finalizar Cadastro
            </Button>
        </form>);
}

export default DadosEntrega;