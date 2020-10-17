import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Button, TextField, FormControlLabel, Switch,
} from '@material-ui/core';

function FormularioCadastro({ aoEnviar, validarCpf }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { invalido: false, texto: '' } });

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            aoEnviar({
                nome, sobrenome, cpf, novidades, promocoes,
            });
        }}
        >
            <TextField
                id="nome"
                label="Nome"
                value={nome}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setNome(event.target.value); }}
            />
            <TextField
                id="sobrenome"
                label="Sobrenome"
                value={sobrenome}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setSobrenome(event.target.value); }}
            />
            <TextField
                id="cpf"
                label="CPF"
                value={cpf}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setCpf(event.target.value); }}
                onBlur={(event) => {
                    setErros(validarCpf(event.target.value));
                }}
                error={erros.cpf.invalido}
                helperText={erros.cpf.texto}
            />

            <FormControlLabel
                control={(
                    <Switch
                        checked={promocoes}
                        name="promocoes"
                        color="primary"
                        onChange={(event) => { setPromocoes(event.target.checked); }}
                    />
                )}
                label="Promoções"
            />
            <FormControlLabel
                control={(
                    <Switch
                        checked={novidades}
                        name="novidades"
                        color="primary"
                        onChange={(event) => { setNovidades(event.target.checked); }}
                    />
                )}
                label="Novidades"
            />

            <Button color="primary" variant="contained" type="submit" disabled={erros.cpf.invalido}>Cadastrar</Button>
        </form>
    );
}

FormularioCadastro.propTypes = {
    aoEnviar: PropTypes.func.isRequired,
    validarCpf: PropTypes.object.isRequired,
};

export default FormularioCadastro;
