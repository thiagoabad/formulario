import React from 'react';
import { Button, TextField } from '@material-ui/core';

function FormularioCadastro() {

    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" fullWidth/>
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" fullWidth/>
            <TextField id="cpf" label="CPF" variant="outlined" fullWidth/>

            <label>Promoções</label>
            <input id="outlined-basic" type="checkbox" />

            <label>Novidades</label>
            <input id="outlined-basic" type="checkbox" />

            <Button color="primary" variant="contained" type="submit">Cadastrar</Button>
        </form>
    )

}

export default FormularioCadastro;