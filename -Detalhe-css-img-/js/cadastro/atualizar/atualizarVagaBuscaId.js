function AtualizarVaga(el) {
    var element = el;
    $('.crud-vagas').on('click', '#atualizarBtn', function () {

        // Obtém o ID da vaga a ser atualizada
        var vagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
        // Redireciona para a página de atualização com o ID da vaga na URL
        window.location.href = '/z-Novo_TCC/atualizar/AtualizarVaga/atualizarVaga.html?id=' + vagaId;

    });
}

/* //ATUALIZAR VAGA
var vagaId = new URLSearchParams(window.location.search).get('id');
 */