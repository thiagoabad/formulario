import React, { Fragment, useEffect, useState } from 'react';
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core';
import DadosEntrega from './DadosEntrega';
import DadosPessoais from './DadosPessoais';
import DadosUsuario from './DadosUsuario';

function FormularioCadastro({ aoEnviar, validacoes }) {

    const [etapaAtual, setEtapaAtual] = useState(0);
    const [dadosColetados, setDados] = useState({});
    useEffect(() => {
        if (etapaAtual === formularios.length ) { aoEnviar(dadosColetados) };
    })

    const formularios = [
        <DadosUsuario aoEnviar={coletarDados} />,
        <DadosPessoais aoEnviar={coletarDados} />,
        <DadosEntrega aoEnviar={coletarDados} />,
        <Typography variant="h5">Obrigado por se cadastrar!</Typography>
    ]

    function coletarDados(dados){
        setDados({...dadosColetados, ...dados});
        proximo();
    }

    function proximo(){
        setEtapaAtual(etapaAtual + 1);
    }

    return(
        <Fragment>
            <Stepper activeStep={etapaAtual}>
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios[etapaAtual]}
        </Fragment>
    )
}

export default FormularioCadastro;
