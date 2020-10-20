import React, { useState } from 'react';
import {
    Button, TextField, FormControlLabel, Switch,
} from '@material-ui/core';

function DadosPessoais({ aoEnviar, validacoes }) {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [cpf, setCpf] = useState('');
    const [promocoes, setPromocoes] = useState(true);
    const [novidades, setNovidades] = useState(true);
    const [erros, setErros] = useState({ cpf: { invalido: false, texto: '' } });

    function validarCampos(event){
        const {name, value} = event.target;
        const novoEstado = {...erros};
        novoEstado[name] = validacoes[name](value);
        setErros(novoEstado);
    }

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
                name="nome"
                value={nome}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setNome(event.target.value); }}
            />
            <TextField
                id="sobrenome"
                label="Sobrenome"
                name="sobrenome"
                value={sobrenome}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setSobrenome(event.target.value); }}
            />
            <TextField
                id="cpf"
                label="CPF"
                name="cpf"
                value={cpf}
                variant="outlined"
                margin="normal"
                fullWidth
                onChange={(event) => { setCpf(event.target.value); }}
                onBlur={validarCampos}
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

            <Button color="primary" variant="contained" type="submit">Cadastrar</Button>
        </form>
    );
}

export default DadosPessoais;
