//variaveis
const form = document.getElementById("formEmpresa");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/;


const nomeInput = document.querySelector("#name")
const cnpjInput = document.getElementById('cnpj')
const porteSelect = document.getElementById('porte')
const historiaTextarea = document.getElementById('historia')

const cepInput = document.getElementById('cep')
const cepComplemento = document.querySelector('.cep-complemento')

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

//VALIDAÇÃO CADASTRO EMPRESA!!

/*
form.addEventListener("submit", (event) => {
    //event.preventDefault(); não deixa envia o formulario
    event.preventDefault();
    console.log("botao clicado")

    console.log("O nome digitado foi " + nomeInput.value)
    //Verifica se o nome esta vazio
    if (nomeInput.value === "") {
        alert("Por Favor, preencha o seu nome");
        return;
    }

    if (emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert("Por Favor, preencha o seu email");
        return;
    }

    //se todos os campos estiverem corretamente preenchidos, envie o form com o " form.submit() "   
    //form.submit()

});

function isEmailValid(email) {
    //cria regex para validar
    const emailRegex = new RegExp(
        //usuario12@host.com.br
        // /^[a-A-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );
    if (emailRegex.test(email)) {
        return true;
    }

    return false;

}

*/

//EMPRESA--------------------------------------------

//imagem da empresa
function empresaImg() {

    $.ajax({
        url: "https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/empresa/v2/image/download/",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {


            for (var i = 0; i < response.length; i++) {

                $('.img').append(' <div class="img"> <img src="data:image/png;base64,' + response[i].fotoBase64 + '"> </div> ');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    cnpjValidate()
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

function cnpjValidate() {
    if (campos[1].value.length < 18) {

        setError(1);

    } else {

        removeError(1)

    }
}

function sobreValidate() {
    if (campos[2].value.length <= 5) {

        setError(2);

    } else {

        removeError(2)

    }
}

function cepValidate() {
    if (campos[3].value.length < 9) {

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

function mainPasswordValidate() {
    if (campos[5].value.length < 8) {
        setError(5);
    } else {
        removeError(5);
        comparePassword();
    }
}

function comparePassword() {
    if (campos[6].value == campos[5].value && campos[5].value.length >= 8) {

        removeError(6)
    } else {
        setError(6)
    }
}



/* const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
console.log(day);
console.log(month);
console.log(year); */


function empresaCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();
    $("#preloader").show();

    var name = $("#name").val();
    name = name.replace(/ /g, "_");

    var cnpj = $("#cnpj").val();

    /* restirar a mascara de cnpj */

    /* cnpj = cnpj.replace(".", "");
    cnpj = cnpj.replace(".", "");
    cnpj = cnpj.replace("/", "");
    cnpj = cnpj.replace("-", ""); */

    var porte = $("#porte").val();
    var historia = $("#historia").val();


    var numero = $("#numero").val();

    /* restirar a mascara do numero */
    numero = numero.replace("(", "");
    numero = numero.replace(")", "");
    numero = numero.replace(" ", "");
    numero = numero.replace("-", "");

    var email = $("#email").val();
    var password = $("#password").val();
    var confirmSenha = $("#confirmPassword").val();
    var cep = $("#cep").val();


    if (password != confirmSenha) {
        //alert("As senha devem ser compativeis!!")
        return;
    }

    /* restirar a mascara de cep */
    /* cep = cep.replace("-", ""); */

    var rua = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();
    var fotoPerfil = $("#uploadImg").val();
    var statusEmpresa = "ATIVA"



    var request = {
        "nome": name,
        "cnpj": cnpj,
        "porte": porte,
        "sobre": historia,
        "telefone": numero,
        "email": email,
        "senha": password,
        "confirmSenha": confirmSenha,
        "cep": cep,
        "logradouro": rua,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade,
        "status_empresa": statusEmpresa,
        fotoBase64: fotoPerfil
    }

    console.log("1")


    // Verificar se uma imagem foi selecionada
    var inputFile = document.getElementById('uploadImg');
    var file = inputFile.files[0];
    console.log("2")
    if (file) {
        console.log("3")
        var formData = new FormData();
        formData.append('imagem', file);
        console.log("4")
        // Adicione outros dados ao FormData, se necessário
        Object.entries(request).forEach(([key, value]) => {
            formData.append(key, value);
            console.log("5")
        });
        console.log("6")
        // Envie a solicitação com imagem
        $.ajax({
            url: 'https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/empresa',
            type: "POST",
            crossDomain: true,
            data: JSON.stringify(request),
            contentType: "application/json",
            dataType: "json",
      
            success: function (response) {
                console.log(response);

                uploadImagemE(response.id, event);
                // Lógica para redirecionar ou lidar com o sucesso
            },
            error: function (xhr, status) {
                console.log(xhr);
                console.log(status);
                // Lógica para lidar com erros
                console.log("5")

                console.log(xhr);
                console.log("6")
                console.log(status);
                console.log("7")

                $("#preloader").hide();
                let jsonObject = JSON.parse(xhr.responseText);
                let objects = jsonObject.erros;

                let str = JSON.stringify(objects, null, 4);

                var dataJSON = JSON.parse(str);

                //console.log("O nome: "+ dataJSON.nome);
                if (dataJSON !== null) {
                    event.preventDefault();

                    if (confirmSenha !== password) {
                        event.preventDefault();
                        setError(5);
                        setError(6);
                    } else {
                        removeError(5);
                        removeError(6);
                    }

                    if ('nome' in dataJSON == true) {
                        nomeInput.style.border = "1px solid rgb(218, 21, 21)";
                        document.getElementById("--name--").style.opacity = '1';
                        /* spans.style.opacity = '1';  o opacity não funciona aqui */
                    }
                    if ('cnpj' in dataJSON == true) {
                        //a propriedade "style" esta colorido, enquanto não devia!!!
                        cnpjInput.style.border = "1px solid rgb(218, 21, 21)";
                        document.getElementById("--cnpj--").style.opacity = '1';
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

                    console.log(" DADOS CADASTRADOS ")
                    console.log(" nome " + name)
                    console.log(" cnpj " + cnpj)
                    console.log(" porte " + porte)
                    console.log(" sobre " + historia)
                    console.log(" telefone " + numero)
                    console.log(" email " + email)
                    console.log(" senha  " + password)
                    console.log(" cep " + cep)
                    console.log(" logradouro " + rua)
                    console.log(" bairro " + bairro)
                    console.log(" uf " + uf)
                    console.log(" cidade " + cidade)
                    console.log(" fotoPerfil " + fotoPerfil)

                }
            }
        });
    } else {
        // Envie a solicitação sem imagem
        $.ajax({
            url: "https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/empresa",
            type: "POST",
            crossDomain: true,
            data: JSON.stringify(request),
            contentType: "application/json",
            dataType: "json",
            success: function (response) {
                console.log(response);
                location.href = "/z-Novo_TCC/Login/login.html";
                // Lógica para redirecionar ou lidar com o sucesso
            },
            error: function (xhr, status) {
                console.log(xhr);
                console.log(status);
                // Lógica para lidar com erros
                console.log("5")

                console.log(xhr);
                console.log("6")
                console.log(status);
                console.log("7")

                $("#preloader").hide();
                let jsonObject = JSON.parse(xhr.responseText);
                let objects = jsonObject.erros;

                let str = JSON.stringify(objects, null, 4);

                var dataJSON = JSON.parse(str);

                //console.log("O nome: "+ dataJSON.nome);
                if (dataJSON !== null) {
                    event.preventDefault();

                    if (confirmSenha !== password) {
                        event.preventDefault();
                        setError(5);
                        setError(6);
                    } else {
                        removeError(5);
                        removeError(6);
                    }

                    if ('nome' in dataJSON == true) {
                        nomeInput.style.border = "1px solid rgb(218, 21, 21)";
                        document.getElementById("--name--").style.opacity = '1';
                        /* spans.style.opacity = '1';  o opacity não funciona aqui */
                    }
                    if ('cnpj' in dataJSON == true) {
                        //a propriedade "style" esta colorido, enquanto não devia!!!
                        cnpjInput.style.border = "1px solid rgb(218, 21, 21)";
                        document.getElementById("--cnpj--").style.opacity = '1';
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

                    console.log(" DADOS CADASTRADOS ")
                    console.log(" nome " + name)
                    console.log(" cnpj " + cnpj)
                    console.log(" porte " + porte)
                    console.log(" sobre " + historia)
                    console.log(" telefone " + numero)
                    console.log(" email " + email)
                    console.log(" senha  " + password)
                    console.log(" cep " + cep)
                    console.log(" logradouro " + rua)
                    console.log(" bairro " + bairro)
                    console.log(" uf " + uf)
                    console.log(" cidade " + cidade)
                    console.log(" fotoPerfil " + fotoPerfil)

                }
            }
        });
    }

    //AJAX ESTÁ DANDO ERRO na validação!!!!
    /* $.ajax({
        url: "https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/empresa",
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

            //location.href redireciona para a tela escolhida após o submit.
            uploadImagemE(response.id, event);


        },

        error: function (xhr, status) {
            console.log("5")

            console.log(xhr);
            console.log("6")
            console.log(status);
            console.log("7")

            $("#preloader").hide();
            let jsonObject = JSON.parse(xhr.responseText);
            let objects = jsonObject.erros;

            let str = JSON.stringify(objects, null, 4);

            var dataJSON = JSON.parse(str);

            //console.log("O nome: "+ dataJSON.nome);
            if (dataJSON !== null) {
                event.preventDefault();

                if (confirmSenha !== password) {
                    event.preventDefault();
                    setError(5);
                    setError(6);
                } else {
                    removeError(5);
                    removeError(6);
                }

                if ('nome' in dataJSON == true) {
                    nomeInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--name--").style.opacity = '1';
                    
                }
                if ('cnpj' in dataJSON == true) {
                    //a propriedade "style" esta colorido, enquanto não devia!!!
                    cnpjInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--cnpj--").style.opacity = '1';
                    
                }
                if ('sobre' in dataJSON == true) {
                    historiaTextarea.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--sobre--").style.opacity = '1';
                    
                }
                if ('cep' in dataJSON == true) {
                    cepInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--cep--").style.opacity = '1';
                    
                }
                if ('email' in dataJSON == true) {
                    emailInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--email--").style.opacity = '1';
                    
                }
                if ('senha' in dataJSON == true) {
                    passwordInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--senha--").style.opacity = '1';
                }
                if ('confirmSenha' in dataJSON == true) {
                    confirm_passwordInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--confirmSenha--").style.opacity = '1';
                    
                }

                //old validation
                
                if ('cnpj' in dataJSON == true) {
                    cnpjInput.style.border = "1px solid rgb(201, 19, 19)";
                    document.getElementById("--cnpj").append("Digite um CNPJ válido");
                } else {
                    nomeInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
                    document.getElementById("--cnpj").remove();
                }
                

                console.log(" DADOS CADASTRADOS ")
                console.log(" nome " + name)
                console.log(" cnpj " + cnpj)
                console.log(" porte " + porte)
                console.log(" sobre " + historia)
                console.log(" telefone " + numero)
                console.log(" email " + email)
                console.log(" senha  " + password)
                console.log(" cep " + cep)
                console.log(" logradouro " + rua)
                console.log(" bairro " + bairro)
                console.log(" uf " + uf)
                console.log(" cidade " + cidade)
                console.log(" fotoPerfil " + fotoPerfil)

            }

            //alert(str)

            //---F
        }
    }); */


}


function uploadImagemE(id, event) {
    console.log("entrou no upload imagem, id:  " + id)
    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
    data.append('file', foto);
    console.log("entrou no upload imagem, foto: " + data)
    jQuery.ajax({
        url: 'https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/empresa/v2/image/upload/' + id,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function (data) {
            //alert("Empresa cadastrada com sucesso!");
            //location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + id;
            location.href = "/z-Novo_TCC/Login/login.html";
        },
        error: function (xhr, status) {
            console.log("6")
            console.log('Erro ao cadastrar a Empresa: ' + status);
        }

    });
}