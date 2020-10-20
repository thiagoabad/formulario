const cpfsInvalidos = ['00000000000', '11111111111', '22222222222', '33333333333', '44444444444', '55555555555', '66666666666', '77777777777', '88888888888', '99999999999'];

function validarCpf(cpf) {
    if (cpf.length !== 11) {
        return { invalido: true, texto: 'CPF deve ter 11 dígitos' };
    } else {
        var Soma;
        var Resto;
        Soma = 0;
        if (cpfsInvalidos.includes(cpf)) return { invalido: true, texto: 'CPF inválido' };

        for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(cpf.substring(9, 10))) return { invalido: true, texto: 'CPF inválido' };

        Soma = 0;
        for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
        Resto = (Soma * 10) % 11;

        if ((Resto === 10) || (Resto === 11)) Resto = 0;
        if (Resto !== parseInt(cpf.substring(10, 11))) return { invalido: true, texto: 'CPF inválido' };
        return { invalido: false, texto: '' };
    }

}

function validarSenha(senha) {
    if (senha.length < 4 || senha.length > 72 ) {
        return { invalido: true, texto: 'Senha deve ter entre 4 e 72 dígitos' };
    } else {
        return { invalido: false, texto: '' };
    }
}

export {validarCpf, validarSenha};