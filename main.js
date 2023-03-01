const formContato = document.getElementById('form-contato');
const tabelaContatos = document.getElementById('tabela-contatos');

formContato.addEventListener('submit', (event) => {
  event.preventDefault();
  const nome = event.target.nome.value;
  const telefone = event.target.telefone.value;
  tabelaContatos.innerHTML += `
    <tr>
      <td>${nome}</td>
      <td>${telefone}</td>
    </tr>
  `;
  formContato.reset();
});
