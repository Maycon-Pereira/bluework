/*IMAGEM PREVIEW--------------------------------------------*/
function preview() {
    frame.src = URL.createObjectURL(event.target.files[0]);
    console.log(frame.src)
}

/*CEP AUTOMATICO---------------------------------------------*/
function limpa_formulário_cep() {
    //Limpa valores do formulário de cep.
    document.getElementById('rua').value = ("");
    document.getElementById('bairro').value = ("");
    document.getElementById('cidade').value = ("");
    document.getElementById('uf').value = ("");
}


function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        //Atualiza os campos com os valores.
        document.getElementById('rua').value = (conteudo.logradouro);
        document.getElementById('bairro').value = (conteudo.bairro);
        document.getElementById('cidade').value = (conteudo.localidade);
        document.getElementById('uf').value = (conteudo.uf);

        var cepNaoEncontrado = document.getElementById("--cep");
        cepNaoEncontrado.style.display = "none";
        cepInput.style.border = "1px solid rgba(128, 128, 128, 0.089)";
    } //end if.
    else {
        //CEP não Encontrado.
        limpa_formulário_cep();

        var cepNaoEncontrado = document.getElementById("--cep");
        cepNaoEncontrado.style.display = "flex";
        cepInput.style.border = "1px solid rgb(218, 21, 21)";
    }
}


function pesquisacep(valor) {
    //Nova variável "cep" somente com dígitos.
    var cep = valor.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {

        //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

        //Valida o formato do CEP.
        if (validacep.test(cep)) {

            //Preenche os campos com "..." enquanto consulta webservice.
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";

            //Cria um elemento javascript.
            var script = document.createElement('script');

            //Sincroniza com o callback.
            script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

            //Insere script no documento e carrega o conteúdo.
            document.body.appendChild(script);


        } //end if.
        else {
            //cep é inválido.
            limpa_formulário_cep();/* 
            alert("Formato de CEP inválido."); */
            var cepNaoEncontrado = document.getElementById("--cep");
            cepNaoEncontrado.style.display = "flex";
            cepInput.style.border = "1px solid rgb(218, 21, 21)";


        }
    } //end if.
    else {
        //cep sem valor, limpa formulário.
        limpa_formulário_cep();
    }
}

//Ocultar ADDRESS
function ocultar() {
    var marcados = document.querySelector("input[type=checkbox]:checked");
    var check = document.getElementById("input-address");
    check.style.display = (marcados != null) ? "block" : "none";
}
