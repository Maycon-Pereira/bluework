//Perfil da Vaga visivel para o usuario


function perfilVaga() {

    $.ajax({
        url: "http://localhost:8080/vagas/v2/image/download",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {

            for (var i = 0; i < response.length; i++) {


                const modalJ =
                    '<button class="modal-button" id="open-modal">Candidatar-se</button>' +
                    '<div id="fade" class="hide"></div>' +
                    '<div id="modal" class="hide">' +
                    '<div class="modal-header">' +
                    '<h2>Candidatado com Sucesso</h2>' +
                    '<button class="modal-button" id="close-modal">Fechar</button>' +
                    '</div>' +
                    '<div class="modal-body"><button class="cancel-modal modal-button" id="cancel-modal" onclick="cancelCandidatura()">Cancelar Candidatura</button>' +
                    '</div>' +
                    '<script src="/-Detalhe-css-img-/js/vaga/especificacao/vagaPerfil/vagaPerfil.js" defer></script>' +
                    '</div>';

                $('.perfilVaga-append').append('<div class="perfil-vaga"><div class="detalhe"><div class="bunner"><img src="data:image/png;base64,' + response[i].fotoBase64 + '" /></div><div class="detalhe-vaga"><div class="Info"><div class="all-Info"><div class="title"><h2>' + response[i].nome + '</h2></div><div class="apresentacao"><div class="status"><div class="statusVaga"><label for="status"><span class="bold">Status da Vaga: </span><span class="disponivel">Disponivel</span></label></div><div class="statusVaga" id="estado"><label for="estado"> <span class="bold">' + response[i].cidade + ' - ' + response[i].uf + '</span></label></div><div class="salario-bruto"><label for="salario"><span class="bold">Salario Mensal: R$ ' + response[i].salario + '</span></label></div></div><div class="body-modal"></div></div></div></div></div></div><div class="detalhe-body"><div class="infVaga"><h2>Informação da vaga</h2><p>' + response[i].sobre + '</p><div class="infVaga2"><div class="numVagas separ"><label for="numVagas"><span class="bold">Número de vagas: </span>' + response[i].qtda + '</label></div><div class="tipo-contrato separ"><label for="tipo"><span class="bold"> Tipo de contrato e Jornada: </span>' + response[i].contrato + '</label></div><div class="area-profis separ"><label for="area"><span class="bold"> Área Profissional: </span>' + response[i].area + '</label></div><div class="exigencia separ"><label for="exigencia"><span class="bold">Exigências: </span></label>' + response[i].exigencias + '</div><div class="valorizado separ"><label for="valorizado"><span class="bold"> Valorizado: </span></label>' + response[i].valorizado + '</div></div></div><div class="inf-empresa"><div class="inf-basic"><h2>Empresa:</h2></div></div></div></div>');
                $('.body-modal').append(modalJ);
                


            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}

//dados da empresa para o perfil das vagas

function dadosEmpresaParaPerfilVaga() {

    $.ajax({
        url: "http://localhost:8080/empresa",
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {


            for (var i = 0; i < response.length; i++) {

                const EmpresaDados = '<a href="/Empresa/perfil-Empresa/perfilEmpresaVisivelAoUsuario.html"><span class="empresa-name">'+response[i].nome+'</span><div class="historia"><p>'+response[i].sobre+'</p></div></a>';
                $('.inf-basic').append(EmpresaDados);

            }

        },
        error: function (xhr, status) {

            console.log(xhr);
            console.log(status);

        }
    });

}