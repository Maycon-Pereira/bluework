//perfil da empresas


function perfilEmpresaVisivelAoUsuario() {
    var empresaIdALL = new URLSearchParams(window.location.search).get('id');
    //alert("id window:..." + empresaIdALL)

    $.ajax({
        url: 'https://blueworks.onrender.com/empresa/' + empresaIdALL,
        type: "GET",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (empresa) {
            $('.perfil-empresa').append(
                '<div class="body-perfil"><div class="img"><img src="data:image/png;base64,' + empresa.fotoBase64 + '"></div><div class="nome-empresa"><h1>' + empresa.nome + '</h1> </div><div class="body-down"><div class="historia"><div class="text"><h2>Nossa Historia</h2><p>' + empresa.sobre + '</p></div></div></div><div class="inf-cadastrada"><div class=" bold inf-ti">Algumas informações sobre nossa Empresa:</div><div class="conjunt"><div class="informacao email"><p><span class="bold">Email: </span>' + empresa.email + '</p></div><div class="informacao telefone"><p><span class="bold">Telefone: </span> ' + empresa.telefone + ' </p></div><div class="informacao endereco"><span class="endereco-title bold">Endereço</span><div class="espaco"><div class="espaco-inf"><p><span class="bold">Cidade: </span>' + empresa.cidade + '</p></div><div class="espaco-inf"><p><span class="bold">Estado: </span>' + empresa.uf + '</p></div></div></div><div class="informacao porte"><p><span class="bold">Porte da Empresa: </span>' + empresa.porte + '</p></div></div></div></div>'
            );
        },
        error: function (xhr, status) {
            console.log(xhr);
            console.log(status);
        }
    });
}