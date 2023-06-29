const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");
const cancelModalButton = document.querySelector("#cancel-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const toggleModal = () => {
    modal.classList.toggle("hide");
    fade.classList.toggle("hide"); 
};

[openModalButton, closeModalButton,cancelModalButton].forEach((el) => {
    el.addEventListener("click", () => toggleModal());
});

function cancelCandidatura () {
    alert("Candidatura canacelada com sucesso! mandar um sinal pro back end")
}


/* 
function remove(el) {
    var element = el;
  
    // Obtém o ID da vaga a ser deletada
    var VagaId = element.parentNode.parentNode.parentNode.parentNode.parentNode.firstChild.innerHTML;
    console.log("nome->" + VagaId);
  
    // Exibe o modal antes de excluir a vaga
    openModal();
  
    // Adiciona um evento de clique ao botão de confirmar exclusão do modal
    var confirmBtn = document.getElementById("confirm-modal");
    confirmBtn.onclick = function() {
      $.ajax({
        url: 'http://localhost:8080/vagas/' + VagaId,
        type: "DELETE",
        crossDomain: true,
        contentType: "application/json",
        dataType: "json",
        success: function (response) {
          // Remove a vaga da lista após excluí-la
          element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(element.parentNode.parentNode.parentNode.parentNode.parentNode);
          closeModal(document.getElementById("modal"), document.getElementById("fade"));
        },
        error: function (xhr, status) {
          var json = JSON.parse(xhr.responseText);
          alert(json.mensagem);
        }
      });
    }
  }
  
   */