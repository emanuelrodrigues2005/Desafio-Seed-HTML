
function validacaoCadastro(){    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;

    const errorNome = document.getElementById('errorNome');
    const errorEmail = document.getElementById('errorEmail');
    const errorSenha = document.getElementById('errorSenha');
    const errorConfirm = document.getElementById('errorConfirm');

    const nomeValido = /^[a-zA-Z\s]+$/;
    const emailValid = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/;
    const senhaValida = senha.length >= 6;
    let validarNome;
    let validarEmail;
    let validarSenha;
    let validarConfirm;

    if(!nomeValido.test(nome)){ 
        errorNome.style.display = 'flex';
        validarNome = false;
    }
    else{
        errorNome.style.display = 'none'
        validarNome = true;
    }

    if(!emailValid.test(email)){
        errorEmail.style.display = 'flex';
        validarEmail = false;
    }
    else{
        errorEmail.style.display = 'none';
        validarEmail = true;
    }

    if(!senhaValida){
        errorSenha.style.display = 'flex';
        validarSenha = false;
    }
    else{
        errorSenha.style.display = 'none';
        validarSenha = true;
    }

    if(senha != confirm){
        errorConfirm.style.display = 'flex';
        validarConfirm = false;
    }
    else{
        errorConfirm.style.display = 'none';
        validarConfirm = true;
    }

    if(validarNome && validarEmail && validarSenha && validarConfirm){
        window.location.href = 'login.html';
    }
}

function validacaoLogin(){
    const emailLogin = document.getElementById('emailLogin').value;
    const passwordLogin = document.getElementById('passwordLogin').value;
    const loginErro = document.getElementById('loginErro');
    const form = document.getElementById('formLogin');

    const desktop = '1330px';
    const mobile = '450px';

    let validarEmailLogin;
    let validarSenhaLogin;

    const emailValid = /^[^\s@]+@[^\s@]+.[^\s@]{2,}$/;
    const senhaValida = passwordLogin.length >= 6;

    if(!emailValid.test(emailLogin)){
        validarEmailLogin = false;
    }
    else{
        validarEmailLogin = true;
    }

    if(!senhaValida){
        validarSenhaLogin = false;
    }
    else{
        validarSenhaLogin = true;
    }

    if(validarEmailLogin && validarSenhaLogin){
        window.location.href = 'home.html';
    }
    else{
        loginErro.classList.remove('oculto');
        loginErro.classList.add('mostrarErro');
        form.style.display = 'none';
        console.log(loginErro);
    }
}

function tryAgain(){
    window.location.href = 'login.html';
}