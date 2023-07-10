//variaveis
const form = document.getElementById("formUsuario");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/; */


const nomeInput = document.querySelector("#name")
const cpfInput = document.getElementById('cpf')
const escolaridadeSelect = document.getElementById('escolaridade')
const dataInput = document.getElementById('data')
const historiaTextarea = document.getElementById('historiaUsuario')

const cepInput = document.getElementById('cep')

const ruaInput = document.getElementById('rua')
const bairroInput = document.getElementById('bairro')
const cidadeInput = document.getElementById('cidade')
const ufInput = document.getElementById('uf')

const imgInput = document.getElementById('uploadImg')

const numeroInput = document.getElementById('numero')

const emailInput = document.getElementById("email")
const passwordInput = document.getElementById('password')
const confirm_passwordInput = document.getElementById('confirmPassword')




//FINAL VARIAVEIS


//Data hoje 

/* function dateToday() {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(day+"/"+month+"/"+year)
} */



form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    cpfValidate()
    dateValidate()
    sobreValidate()
    cepValidate()
    emailValidate()
    mainPasswordValidate()
    comparePassword()
})
function setError(index) {
    campos[index].style.border = '1px solid rgb(218, 21, 21)';
    spans[index].style.opacity = '1';
}
function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.opacity = '0';
}

function nameValidate() {
    if (campos[0].value.length < 3) {

        setError(0);

    } else {

        removeError(0)

    }
}

function cpfValidate() {
    if (campos[1].value.length < 14) {

        setError(1);

    } else {

        removeError(1)

    }
}
function dateValidate() {
    if (campos[2].value.length < 10) {

        setError(2);

    } else {

        removeError(2)

    }
}

function sobreValidate() {
    if (campos[3].value.length < 5) {

        setError(3);

    } else {

        removeError(3)

    }
}

function cepValidate() {
    if (campos[4].value.length < 9) {

        setError(4);

    } else {

        removeError(4)

    }
}

function emailValidate() {

    const email = $('#email').val();


    if (!validEmail(email)) {
        setError(5)
    } else {
        removeError(5)
    }
    return false;
}

function validEmail(email) {
    return email.match(
        emailRegex
        /* /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ */
    );
};

function mainPasswordValidate() {
    if (campos[6].value.length < 8) {
        setError(6);
    } else {
        removeError(6);
        comparePassword();
    }
}
function comparePassword() {
    if (campos[7].value == campos[6].value && campos[6].value.length >= 8) {

        removeError(7)
    } else {
        setError(7)
    }
}




//USUARIO--------------------------------------------
function usuarioCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();

    var name = $("#name").val();
    var cpf = $("#cpf").val();

    /* restirar a mascara de cpf */
    cpf = cpf.replace(".", "")
    cpf = cpf.replace(".", "")
    cpf = cpf.replace("-", "")

    var escolaridade = $("#escolaridade").val();
    var data = $("#data").val();

    /* restirar a mascara da data */
    data = data.replace("/", "")
    data = data.replace("/", "")

    var sobre = $("#historiaUsuario").val();
    var numero = $("#numero").val();

    /* restirar a mascara de telefone */
    numero = numero.replace("(", "")
    numero = numero.replace(")", "")
    numero = numero.replace(" ", "")
    numero = numero.replace("-", "")

    var email = $("#email").val();
    var password = $("#password").val();
    var confirmSenha = $("#confirmPassword").val();
    var cep = $("#cep").val();

    /* restirar a mascara de cep */
    cep = cep.replace("-", "")

    var logradouro = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();
    var fotoPerfil = $("#uploadImg").val();


    var request = {
        "nome": name,
        "cpf": cpf,
        "escolaridade": escolaridade,
        "nascimento": data,
        "sobre": sobre,
        "telefone": numero,
        "email": email,
        "senha": password,
        "confirmSenha": confirmSenha,
        "cep": cep,
        "logradouro": logradouro,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade,
        "fotoBase64": fotoPerfil
    }


    $.ajax({
        url: "https://blueworks.onrender.com/usuario",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(request),
        contentType: "application/json",
        dataType: "json",

        success: function (response) {
            //var resp = JSON.parse(response)
            console.log("2")
            console.log(response);
            console.log("3")

            uploadImagem(response.id, event);
            console.log("4")
        },
        error: function (xhr, status) {
            console.log("5")

            console.log(xhr);
            console.log("6")
            console.log(status);
            console.log("7")

            let jsonObject = JSON.parse(xhr.responseText);
            let objects = jsonObject.erros;

            let str = JSON.stringify(objects, null, 4);

            var dataJSON = JSON.parse(str);


            if (dataJSON !== null) {
                event.preventDefault();

                if (confirmSenha !== password) {
                    event.preventDefault();
                    setError(6);
                    setError(7);
                } else {
                    removeError(6);
                    removeError(7);

                }

                if ('nome' in dataJSON == true) {
                    nomeInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--name--").style.opacity = '1';
                    /* spans.style.opacity = '1';  o opacity não funciona aqui */
                }
                if ('cpf' in dataJSON == true) {
                    //a propriedade "style" esta colorido, enquanto não devia!!!
                    cpfInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--cpf--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('data' in dataJSON == true) {
                    dataInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--data--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('sobre' in dataJSON == true) {
                    historiaTextarea.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--sobre--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('cep' in dataJSON == true) {
                    cepInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--cep--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('email' in dataJSON == true) {
                    emailInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--email--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('senha' in dataJSON == true) {
                    passwordInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--senha--").style.opacity = '1';
                }
                if ('confirmSenha' in dataJSON == true) {
                    confirm_passwordInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--confirmSenha--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }


                //old validation
                /* 
                if ('cnpj' in dataJSON == true) {
                    cnpjInput.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--cnpj").append("Digite um CNPJ válido");
                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--cnpj").remove();
                }
                */
            }
            //alert(str)

        }
    });

    console.log(" DADOS CADASTRADOS ")
    console.log(" nome " + name)
    console.log(" cpf " + cpf)
    console.log(" escolaridade " + escolaridade)
    console.log(" Data " + data)
    console.log(" sobre " + sobre)
    console.log(" telefone " + numero)
    console.log(" email  " + email)
    console.log(" senha  " + password)
    console.log(" cep " + cep)
    console.log(" logradouro " + logradouro)
    console.log(" bairro " + bairro)
    console.log(" uf " + uf)
    console.log(" cidade " + cidade)
    console.log(" fotoPerfil " + fotoPerfil)

}

function uploadImagem(id, event) {

    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
    data.append('file', foto);


    jQuery.ajax({
        url: 'https://blueworks.onrender.com/usuario/v2/image/upload/' + id,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function (data) {
            //alert("Usuario cadastrado com sucesso!");
        }
    });
}
