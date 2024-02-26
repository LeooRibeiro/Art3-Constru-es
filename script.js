// Obtém os botões e os modais
const usuarioBtn = document.getElementById("basicModalbtn");
const adminBtn = document.getElementById("particularModalbtn");
const empresaBtn = document.getElementById("empresaModalbtn");
const usuarioModal = document.getElementById("usuarioModal");
const adminModal = document.getElementById("adminModal");
const empresaModal = document.getElementById("empresaModal");

// Função para abrir o modal do usuário
usuarioBtn.onclick = function() {
    usuarioModal.style.display = "block";
}

// Função para abrir o modal do administrador
adminBtn.onclick = function() {
    adminModal.style.display = "block";
}

// Função para abrir o modal da empresa
empresaBtn.onclick = function() {
    empresaModal.style.display = "block";
}

// Fecha o modal ao clicar no botão de fechar
document.querySelectorAll(".close").forEach(function(element) {
    element.onclick = function() {
        usuarioModal.style.display = "none";
        adminModal.style.display = "none";
        empresaModal.style.display = "none";
    }
});
