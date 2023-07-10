//variaveis
const form = document.getElementById("formVaga");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".exception");
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/* const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$/; */


const nomeInput = document.querySelector("#name")
const typeInput = document.getElementById('type')
const qtdaInput = document.getElementById('qtda')
const salarioInput = document.getElementById('salario')

const escolaridadeSelect = document.getElementById('escolaridadeVaga')

const areaInput = document.getElementById('area')
const exigenciasInput = document.getElementById('exigencia')
const valorizadoInput = document.getElementById('valorizado')
const tipoContratoSelect = document.getElementById('tipoContrato')

const cepInput = document.getElementById('cep')
const ruaInput = document.getElementById('rua')
const bairroInput = document.getElementById('bairro')
const cidadeInput = document.getElementById('cidade')
const ufInput = document.getElementById('uf')

const imgInput = document.getElementById('uploadImg')

const historiaTextarea = document.getElementById('historia-vaga')
const cnpjInput = document.getElementById('cnpj')
//const passwordInput = document.getElementById('password')



form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate()
    qtdaValidate()
    salarioValidate()
    areaValidate()
    exigenciaValidate()
    cnpjValidate()
    sobreValidate()
    cepValidate()
    //mainPasswordValidate()
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
function qtdaValidate() {
    if (campos[1].value < 1) {

        setError(1);

    } else {

        removeError(1)

    }
}
function salarioValidate() {
    if (campos[2].value.length < 6) {

        setError(2);

    } else {

        removeError(2)

    }
}
function areaValidate() {
    if (campos[3].value.length < 3) {

        setError(3);

    } else {

        removeError(3)

    }
}
function exigenciaValidate() {
    if (campos[4].value.length < 3) {

        setError(4);

    } else {

        removeError(4)

    }
}
function cepValidate() {
    if (campos[5].value.length < 9) {

        setError(5);

    } else {

        removeError(5)

    }
}
function sobreValidate() {
    if (campos[6].value.length < 5) {

        setError(6);

    } else {

        removeError(6)

    }
}


function cnpjValidate() {
    if (campos[7].value.length < 18) {

        setError(7);

    } else {

        removeError(7)

    }
}
/* 
function mainPasswordValidate() {
    if (campos[8].value.length < 8) {
        setError(8);
    } else {
        removeError(8);
    }
} */


//VAGAS--------------------------------------------




/* var idDaEmpresa = "";
$.ajax({
    url: "https://blueworks.onrender.com/empresa",
    type: "GET",
    crossDomain: true,
    contentType: "application/json",
    dataType: "json",
    success: function (response) {

        for (var i = 0; i < response.length; i++) {

            idDaEmpresa = response[i].id;

        }
        
        IdEmpresaCadVaga(idDaEmpresa)
    },
    error: function (xhr, status) {

        console.log(xhr);
        console.log(status);

    }
});

function IdEmpresaCadVaga(empresaId) {

    console.log("id da empresa " + empresaId);

} */
/* function IdEmpresaCadVaga(empresaId) {

    alert("id da empresa: " + empresaId);

    var idDaEmpresa = "";
    $.ajax({
        url: "https://blueworks.onrender.com/empresa",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
            for (var i = 0; i < response.length; i++) {
                idDaEmpresa = response[i].id;
            }
            IdEmpresaCadVaga(idDaEmpresa);


        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
        }
    });

} */

function IdEmpresaCadVaga(event) {
        /* empresaId = document.querySelector('.empresa-id-div').innerHTML.trim();
        alert("id empresa cadastro :  " + empresaId)
 */
        redirecionarParaCadastroVaga();

}

function redirecionarParaCadastroVaga() {
    window.location.href = '/z-Novo_TCC/cadastro/CadastroVaga.html';
}


var idEmpresaLogada = localStorage.getItem('idEmpresaLogada');
//alert("id no cadastro vaga " +idEmpresaLogada);

//var empresaID = new URLSearchParams(window.location.search).get('id'); 

//alert(empresaID)
function vagasCad(event) {
    event.preventDefault();
    //var x = $( "form" ).serialize();

    //alert("id no cadastro vaga " +idEmpresaLogada);
    //var empresa_id = empresaId;

    //alert(empresaId)



    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();

    if (month <= 9) {
        month = '0' + month;
    }


    //alert(" -- " + day + "/" + month + "/" + year + " -- ");

    var name = $("#name").val();
    var tipo = $("#type").val();
    var qtda = $("#qtda").val();
    var data = day + "/" + month + "/" + year;


    var salario = $("#salario").val();
    //alert("salario não formatado" + salario)

    /* restirar a mascara de salario */
    /* salario = salario.replace(".", "")
    salario = salario.replace(".", "")
    salario = salario.replace(",", "") */

    //alert("salario formatado" + salario)

    var escolaridade = $("#escolaridadeVaga").val();
    var area = $("#area").val();
    var exigencia = $("#exigencia").val();
    var valorizado = $("#valorizado").val();
    var tipoContrato = $("#tipoContrato").val();
    var sobre = $("#historia-vaga").val();
    var cnpj = $("#cnpj").val();
/* 
    if (cnpj) {

    } */

    //restirar a mascara de cnpj
    /* cnpj = cnpj.replace(".", "")
    cnpj = cnpj.replace(".", "")
    cnpj = cnpj.replace("/", "")
    cnpj = cnpj.replace("-", "") */

    //var senha = $("#password").val();


    var cep = $("#cep").val();

    /* restirar a mascara de cep */
    /* cep = cep.replace("-", "") */

    var logradouro = $("#rua").val();
    var bairro = $("#bairro").val();
    var uf = $("#uf").val();
    var cidade = $("#cidade").val();
    var fotoPerfil = $("#uploadImg").val();


    var statusVaga = "ATIVA"

    var request = {
        "id_empresa": idEmpresaLogada,
        "nome": name,
        "tipo": tipo,
        "qtda": qtda,

        "data_publicacao": data,

        "salario": salario,
        "escolaridade": escolaridade,
        "area": area,
        "exigencias": exigencia,
        "valorizado": valorizado,
        "contrato": tipoContrato,
        "sobre": sobre,
        "cnpj": cnpj,
        "status_vaga": statusVaga,
        "cep": cep,
        "logradouro": logradouro,
        "bairro": bairro,
        "uf": uf,
        "cidade": cidade,
        "fotoPerfil": fotoPerfil,
    }



    $.ajax({
        url: "https://blueworks.onrender.com/vagas",
        type: "POST",
        crossDomain: true,
        data: JSON.stringify(request),
        contentType: "application/json",
        dataType: "json",

        success: function (response) {
            //var resp = JSON.parse(response)
            console.log(response);
            uploadImagem(response.id, event);
            location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + idEmpresaLogada;
        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);

            let jsonObject = JSON.parse(xhr.responseText);
            let objects = jsonObject.erros;

            let str = JSON.stringify(objects, null, 4);

            var dataJSON = JSON.parse(str);

            if (dataJSON !== null) {
                event.preventDefault();

                if ('nome' in dataJSON == true) {
                    nomeInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--name--").style.opacity = '1';
                    /* spans.style.opacity = '1';  o opacity não funciona aqui */
                }
                if ('qtda' in dataJSON == true) {
                    qtdaInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--qtda--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('salario' in dataJSON == true) {
                    salarioInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--salario--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('area' in dataJSON == true) {
                    areaInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--area--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('exigencias' in dataJSON == true) {
                    exigenciasInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--exigencias--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('cep' in dataJSON == true) {
                    cepInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--cep--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('sobre' in dataJSON == true) {
                    historiaTextarea.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--sobre--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                if ('cnpj' in dataJSON == true) {
                    //a propriedade "style" esta colorido, enquanto não devia!!!
                    cnpjInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--cnpj--").style.opacity = '1';
                    /* spans.style.opacity = '1'; */
                }
                /* if ('senha' in dataJSON == true) {
                    passwordInput.style.border = "1px solid rgb(218, 21, 21)";
                    document.getElementById("--senha--").style.opacity = '1';
                } */



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




    /* console.log(" DADOS CADASTRADOS ")
    console.log(" nome " + name)
    console.log(" tipo " + tipo)
    console.log(" qtda " + qtda)
    console.log(" data " + data)
    console.log(" salario " + salario)
    console.log(" escolaridade " + escolaridade)
    console.log(" area " + area)
    console.log(" exigencia " + exigencia)
    console.log(" valorizado " + valorizado)
    console.log(" tipoContrato " + tipoContrato)
    console.log(" sobre " + sobre)
    console.log(" cnpj " + cnpj)
    //console.log(" senha  " + senha)
    console.log(" cep " + cep)
    console.log(" logradouro " + logradouro)
    console.log(" bairro " + bairro)
    console.log(" uf " + uf)
    console.log(" cidade " + cidade)
    console.log(" fotoPerfil " + fotoPerfil) */
}

function uploadImagem(id, event) {

    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
    data.append('file', foto);


    jQuery.ajax({
        url: 'https://blueworks.onrender.com/vagas/v2/image/upload/' + id,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function (data) {
            //alert("Vaga cadastrada com sucesso!");
        }
    });
}
