// Atualiza ano no footer
document.addEventListener('DOMContentLoaded', () => {
  const ano = document.getElementById('ano');
  if(ano) ano.textContent = new Date().getFullYear();
});

// Formulário de contato
const form = document.getElementById('form-contato');
if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if(!nome || !email || !mensagem){
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Obrigado! Sua mensagem foi enviada (simulação).");
    form.reset();
  });
}
