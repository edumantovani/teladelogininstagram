let inputEmail = document.querySelector('#email');
let inputSenha = document.querySelector('#password');
let btnEntrar = document.querySelector('#btnEntrar');

btnEntrar.addEventListener('click', entrar);

email.focus();

function validacaoLogin(){
    if(inputEmail.value !== '' && inputSenha.value.length >= 2){
        btnEntrar.classList.add('active');
        btnEntrar.removeAttribute('disabled');
    } else{
        btnEntrar.classList.remove('active');
    }
}

function entrar(e){
    e.preventDefault();
    inputEmail.focus();
    inputEmail.value = '';
    inputSenha.value = '';
    window.location.href = "loading.html";
}

