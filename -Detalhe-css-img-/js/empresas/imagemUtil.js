function uploadImagem(id, event) {

    let foto = document.getElementById("uploadImg").files[0];
    //var file = $('#uploadImg').attr('src', event.target.result);
    var data = new FormData();
    data.append('file', foto);

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
        }
    });
}