//variaveis
const formEmpres = document.getElementById("formEmpresa");
const camposEmpres = document.querySelectorAll(".required");
const spansEmpres = document.querySelectorAll(".exception");
const emailRegexEmpres = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/;


const nomeInputEmpres = document.querySelector("#name")
const cnpjInputEmpres = document.getElementById('cnpj')
const porteSelectEmpres = document.getElementById('porte')
const historiaTextareaEmpres = document.getElementById('historia')

const cepInputEmpres = document.getElementById('cep')
const cepComplementoEmpres = document.querySelector('.cep-complemento')

const ruaInputEmpres = document.getElementById('rua')
const bairroInputEmpres = document.getElementById('bairro')
const cidadeInputEmpres = document.getElementById('cidade')
const ufInputEmpres = document.getElementById('uf')

const imgInputEmpres = document.getElementById('uploadImg')

const numeroInputEmpres = document.getElementById('numero')

const emailInputEmpres = document.getElementById("email")
//const passwordInputEmpres = document.getElementById('password')
const confirm_passwordInputEmpres = document.getElementById('confirmPassword')





formEmpres.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    cnpjValidate()
    sobreValidate()
    cepValidate()
    emailValidate()
    //mainPasswordValidate()
})
function setError(index) {
    camposEmpres[index].style.border = '1px solid rgb(218, 21, 21)';
    spansEmpres[index].style.opacity = '1';
}
function removeError(index) {
    camposEmpres[index].style.border = '';
    spansEmpres[index].style.opacity = '0';
}

function nameValidate() {
    if (camposEmpres[0].value.length < 3) {

        setError(0);

    } else {

        removeError(0)

    }
}

function cnpjValidate() {
    if (camposEmpres[1].value.length < 18) {

        setError(1);

    } else {

        removeError(1)

    }
}

function sobreValidate() {
    if (camposEmpres[2].value.length <= 5) {

        setError(2);

    } else {

        removeError(2)

    }
}

function cepValidate() {
    if (camposEmpres[3].value.length < 9) {

        setError(3);

    } else {

        removeError(3)

    }
}

function emailValidate() {

    const email = $('#email').val();


    if (!validEmail(email)) {
        setError(4)
    } else {
        removeError(4)
    }
    return false;
}

function validEmail(email) {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

/* function mainPasswordValidate() {
    if (camposEmpres[5].value.length < 8) {
        setError(5);
    } else {
        removeError(5);
    }
}

 */