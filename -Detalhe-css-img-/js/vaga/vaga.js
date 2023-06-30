//Minhas Vagas
function vaga() {

    $.ajax({
        url: "http://blueworks-production.up.railway.app/vagas/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {

            console.log(response)
            for (var i = 0; i < response.length; i++) {//loop do perfil usuario, arrumar.

                $('.candidatos').append('<div class="candidato-box"><div class="img-candidato"><div class="candidato"><a href="/Empresa/perfil-Empresa/radac.html"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="candidato-box-info"><div class="inf-pessoa"><div class="col"><div class="desc-vaga maior"><p><span class="bold">Nome: </span> ' + response[i].nome + '</p></div><div class="desc-vaga menor"><p><span class="bold">Tipo: </span> ' + response[i].tipo + '</p></div></div><div class="col"><div class="desc-vaga maior"><p><span class="bold">Qtda: </span>' + response[i].qtda + '</p></div><div class="desc-vaga menor"><p><span class="bold">Salário: </span>' + response[i].salario + '</p></div></div><div class="col"><div class="desc-vaga maior"><p><span class="bold">Escolaridade: </span> ' + response[i].escolaridade + '</p></div><div class="desc-vaga menor"><p><span class="bold">Cep: </span> ' + response[i].cep + '</p></div></div><div class="info"><div class="desc-vaga info-bar"><p><span class="bold">Info: </span> ' + response[i].sobre + '<span class="info-vaga"> </span></p></div></div></div><div class="config"><div class="buttam"><a href="/Atualizar/vaga/atualizarVaga.html"><button class="ed-vaga" id="edit"><img src="/-Detalhe-css-img-/img/editar-removebg-preview.png"></button></a></div><div class="buttam"><a href="/Atualizar/vaga/atualizarVaga.html"><button class="del-vaga" id="delete">Excluir Vaga</button></a></div></div></div></div>');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}
//Minhas Inscrições em Vagas
function minhasInscricoesEmVagas() {

    $.ajax({
        url: "http://blueworks-production.up.railway.app/vagas/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {

            for (var i = 0; i < response.length; i++) {//loop do perfil usuario, arrumar.

                $('.candidatos').append('<div class="candidato-box"><div class="img-candidato"><div class="candidato"><a href="/Vagas/EspecificaçãoVaga/todas/especificacaTodas/vagaPerfil.html"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" /></a></div></div><div class="candidato-box-info"><div class="inf-pessoa"><div class="col"><div class="desc-vaga maior"><p><span class="bold">Nome: </span> ' + response[i].nome + '</p></div><div class="desc-vaga menor"><p><span class="bold">Tipo: </span> ' + response[i].tipo + '</p></div></div><div class="col"><div class="desc-vaga maior"><p><span class="bold">Contrato: </span>' + response[i].contrato + '</p></div><div class="desc-vaga menor"><p><span class="bold">Salário: </span>' + response[i].salario + '</p></div></div><div class="col"><div class="desc-vaga maior"><p><span class="bold">Escolaridade: </span> ' + response[i].escolaridade + '</p></div><div class="desc-vaga menor"><p><span class="bold">Área: </span> ' + response[i].area + '</p></div></div><div class="info"><div class="desc-vaga info-bar"><p><span class="bold">Info: </span> ' + response[i].sobre + '<span class="info-vaga"> </span></p></div></div></div><div class="config-minhasInscricoes"><div class="buttam"><a href="#"><button class="del-vaga" id="cancel">Cancelar Candidatura</button></a></div></div></div>');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}




//Mostra todas as vagas em "Outras" e vou usar como exemplo para os outros
function todasVagas() {

    $.ajax({
        url: "http://blueworks-production.up.railway.app/vagas",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {


            for (var i = 0; i < response.length; i++) {

                $('.vagas-block').append('<div class="vagas-box"><a href="/Vagas/EspecificaçãoVaga/todas/especificacaTodas/vagaPerfil.html"><div class="img-vaga-display"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" alt="imagem da vaga" /></div><div class="content-vaga-display"><div class="vaga-box"><div class="vaga-name"><h3>' + response[i].nome + '</h3><h4>' + response[i].area + '</h4></div></div><div class="abaixo"><div class="descricao"><p><span>' + response[i].sobre + '</span></p></div><div class="baixo"><div class="local"><img src="/-Detalhe-css-img-/img/LOCAL (2).png" alt=""><span> ' + response[i].cidade + ' / ' + response[i].uf + '</span></div><div class="data"><img src="/-Detalhe-css-img-/img/HORA (2).png" alt=""> ' + response[i].data + ' <span></span></div></div></div></div></a></div>');
            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

