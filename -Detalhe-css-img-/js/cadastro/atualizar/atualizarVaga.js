//variaveis
const formVaga = document.getElementById("formVaga");
const camposVaga = document.querySelectorAll(".required");
const spansVaga = document.querySelectorAll(".exception");
const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


const nomeInputVaga = document.querySelector("#name")
const typeInputVaga = document.getElementById('type')
const qtdaInputVaga = document.getElementById('qtda')
const salarioInputVaga = document.getElementById('salario')

const escolaridadeSelectVaga = document.getElementById('escolaridadeVaga')

const areaInputVaga = document.getElementById('area')
const exigenciasInputVaga = document.getElementById('exigencia')
const valorizadoInputVaga = document.getElementById('valorizado')
const tipoContratoSelectVaga = document.getElementById('tipoContrato')

const cepInputVaga = document.getElementById('cep')
const ruaInputVaga = document.getElementById('rua')
const bairroInputVaga = document.getElementById('bairro')
const cidadeInputVaga = document.getElementById('cidade')
const ufInputVaga = document.getElementById('uf')

const imgInputVaga = document.getElementById('uploadImg')

const historiaTextareaVaga = document.getElementById('historia-vaga')
const cnpjInputVaga = document.getElementById('cnpj')
//const passwordInputVaga = document.getElementById('password')


// Validação Atualiza Vaga
formVaga.addEventListener('submit', (event) => {
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
    camposVaga[index].style.border = '1px solid rgb(218, 21, 21)';
    spansVaga[index].style.opacity = '1';
}
function removeError(index) {
    camposVaga[index].style.border = '';
    spansVaga[index].style.opacity = '0';
}

function nameValidate() {
    if (camposVaga[0].value.length < 3) {

        setError(0);

    } else {

        removeError(0)

    }
}
function qtdaValidate() {
    if (camposVaga[1].value < 1) {

        setError(1);

    } else {

        removeError(1)

    }
}
function salarioValidate() {
    if (camposVaga[2].value.length < 6) {

        setError(2);

    } else {

        removeError(2)

    }
}
function areaValidate() {
    if (camposVaga[3].value.length < 3) {

        setError(3);

    } else {

        removeError(3)

    }
}
function exigenciaValidate() {
    if (camposVaga[4].value.length < 3) {

        setError(4);

    } else {

        removeError(4)

    }
}
function cepValidate() {
    if (camposVaga[5].value.length < 9) {

        setError(5);

    } else {

        removeError(5)

    }
}
function sobreValidate() {
    if (camposVaga[6].value.length < 5) {

        setError(6);

    } else {

        removeError(6)

    }
}


function cnpjValidate() {
    if (camposVaga[7].value.length < 18) {

        setError(7);

    } else {

        removeError(7)

    }
}
/*
function mainPasswordValidate() {
    if (camposVaga[8].value.length < 8) {
        setError(8);
    } else {
        removeError(8);
    }
} */
// Fim Validação Atualiza Vaga

//========PUT TYPE TO ATUALIZAR VAGA========
/* function AtualizarVaga(el) {
    var element = el;
    $('.crud-vagas').on('click', '#atualizarBtn', function () {

        // Obtém o ID da vaga a ser atualizada
        var vagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
        // Redireciona para a página de atualização com o ID da vaga na URL
        window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html?id=' + vagaId;

    });
}

//ATUALIZAR VAGA
var vagaId = new URLSearchParams(window.location.search).get('id');
 */
var empresaId = localStorage.getItem('idEmpresaLogada');
//ATUALIZAR VAGA
var vagaId = new URLSearchParams(window.location.search).get('id');

$.ajax({
    url: 'https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/vagas/' + vagaId,
    type: 'GET',
    success: function (response) {
        // Popula os campos de formulário com os valores da vaga

        function formatCNPJ(cnpj) {
            if (!cnpj) return '';
            return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        }

        function formatCEP(cep) {
            if (typeof cep === 'string') {
                return cep.replace(/^(\d{5})(\d{3})$/, '$1-$2');
            } else {
                return cep;
            }
        }

        $('#name').val(response.nome);

        $('#type').val(response.tipo);

        $('#qtda').val(response.qtda);


        $('#salario').val(response.salario);

        $('#escolaridadeVaga').val(response.escolaridade);
        $('#area').val(response.area);
        $('#exigencia').val(response.exigencias);
        $('#valorizado').val(response.valorizado);
        $('#tipoContrato').val(response.contrato);

        $('#historia-vaga').val(response.sobre);
        $('#cnpj').val(formatCNPJ(response.cnpj));
        $('#cep').val(formatCEP(response.cep));
        $('#rua').val(response.logradouro);
        $('#bairro').val(response.bairro);
        $('#uf').val(response.uf);
        $('#cidade').val(response.cidade);

        //não dá o preview da imagem já cadastrada
        var imgElement = document.getElementById('frameVagaAtlz');
        imgElement.src = 'data:image/png;base64,' + response.fotoBase64;

        var inputFile = document.getElementById('uploadImg');
        inputFile.addEventListener('change', function (event) {
            var file = event.target.files[0];
            var reader = new FileReader();

            reader.onload = function (e) {
                var imgElement = document.getElementById('frameVagaAtlz');
                imgElement.src = e.target.result;
            };
            reader.readAsDataURL(file);
        });

    },
    error: function (xhr, status) {
        console.log('Erro ao carregar dados da vaga: ' + status);
    }
});




function AtualizarVaga() {

    var name = $("#name").val();
    var tipo = $("#type").val();
    var qtda = $("#qtda").val();
    var salario = $("#salario").val();
    var area = $("#area").val();
    var exigencia = $("#exigencia").val();
    var sobre = $("#historia-vaga").val();
    var cnpj = $("#cnpj").val();
    var cep = $("#cep").val();

    if (name == "" || name.length < 3) {
        nameValidate()
        return
    }
    if (qtda == "" || qtda == 0 || qtda.length < 1) {
        qtdaValidate()
        return
    }
    if (salario == "" || salario.length < 6) {
        salarioValidate()
        return
    }
    if (area == "" || area.length < 3) {
        areaValidate()
        return
    }
    if (exigencia == "" || exigencia.length < 3) {
        exigenciaValidate()
        return
    }
    if (sobre == "" || sobre.length < 5) {
        sobreValidate()
        return
    }
    if (cnpj == "" || cnpj.length < 14) {
        cnpjValidate()
        return
    }
    if (cep == "" || cep.length < 9) {
        cepValidate()
        return
    }



    // Cria um objeto com os valores atualizados
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const data = day + "/" + month + "/" + year;

    var statusVaga = "ATIVA"

    var dadosAtualizados = {
        nome: $("#name").val(),
        tipo: $("#type").val(),
        qtda: $("#qtda").val(),
        data_atualizacao: data,
        status_vaga: statusVaga,
        salario: $("#salario").val(),
        escolaridade: $("#escolaridadeVaga").val(),
        area: $("#area").val(),
        exigencias: $("#exigencia").val(),
        valorizado: $("#valorizado").val(),
        contrato: $("#tipoContrato").val(),
        sobre: $("#historia-vaga").val(),
        cnpj: $("#cnpj").val(),
        cep: $("#cep").val(),
        logradouro: $("#rua").val(),
        bairro: $("#bairro").val(),
        uf: $("#uf").val(),
        cidade: $("#cidade").val(),
        fotoBase64: $("#uploadImg").val()

    };


    //if (nomeAtualizado.length != "") {

    //var dadosAtualizados = JSON.parse(JSON.stringify(dadosAtualizados));

    var inputFile = document.getElementById('uploadImg');
    var file = inputFile.files[0]; // Obtém o arquivo selecionado


    if (file) {
        var formData = new FormData();

        formData.append('imagem', file);
        console.log(formData)
        // Adicione outros dados ao FormData, se necessário
        Object.entries(dadosAtualizados).forEach(([key, value]) => {
            formData.append(key, value);
            //console.log(key, value)
        });

        console.log("1")


        $.ajax({
            url: 'https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/vagas/' + vagaId,
            type: "PUT",
            crossDomain: true,
            data: JSON.stringify(dadosAtualizados),
            contentType: "application/json",
            dataType: "json",

            success: function (response) {

                //var resp = JSON.parse(response)
                console.log("2")
                console.log(response);
                console.log("3")

                //location.href redireciona para a tela escolhida após o submit.
                uploadImagem(response.id, event);
            },
        });

    } else {
        console.log("4")
        // Se nenhum arquivo foi selecionado, envie apenas os outros dados
        $.ajax({
            url: 'https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/vagas/' + vagaId,
            type: 'PUT',
            data: JSON.stringify(dadosAtualizados),
            contentType: 'application/json',
            success: function (response) {
                // alert('Empresa atualizada com sucesso!');
                location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + empresaId;

            },
            error: function (xhr, status) {
                console.log("6")
                console.log('Erro ao atualizar a Empresa: ' + status);
            }
        });
    }
}

function uploadImagem(id, event) {

    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
    data.append('file', foto);


    jQuery.ajax({
        url: 'https://blonde-donkey-pmaycon63-f6d1bba7.koyeb.app/vagas/v2/image/upload/' + id,
        data: data,
        cache: false,
        contentType: false,
        processData: false,
        method: 'POST',
        type: 'POST', // For jQuery < 1.9
        success: function (data) {
            //alert("Vaga cadastrada com sucesso!");
            location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + empresaId;
        }
    });
}


var empresaId = localStorage.getItem('idEmpresaLogada');
var idCookieEmpresaLogin = localStorage.getItem('idCookieEmpresaLogin');

function voltarPaginaPerfil() {

    //alert("idCookieEmpresaLogin " + idCookieEmpresaLogin)
    if (idCookieEmpresaLogin !== empresaId) {
        console.log("não está logado!!")
        location.href = "#";
    } else {
        location.href = "/z-Novo_TCC/Perfil/perfil.html?idEmpresaLogin=" + idCookieEmpresaLogin;
    }
}