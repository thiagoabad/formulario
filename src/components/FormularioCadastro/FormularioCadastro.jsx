import React from 'react';
import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core';

function FormularioCadastro() {

    return (
        <form>
            <TextField id="nome" label="Nome" variant="outlined" margin="normal" fullWidth />
            <TextField id="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />
            <TextField id="cpf" label="CPF" variant="outlined" margin="normal" fullWidth />

            <FormControlLabel
                control={
                    <Switch
                        defaultChecked="true"
                        name="promocoes"
                        color="primary"
                    />
                }
                label="Promoções"
            />
            <FormControlLabel
                control={
                    <Switch
                        defaultChecked="true"
                        name="novidades"
                        color="primary"
                    />
                }
                label="Novidades"
            />

            <Button color="primary" variant="contained" type="submit">Cadastrar</Button>
        </form>
    )

}

export default FormularioCadastro;