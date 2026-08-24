(() => {
  function iniciarChat() {
    const painel = document.getElementById('suporteIaPainel');
    if (!painel || document.getElementById('chatIaArea')) return;

    const estilo = document.createElement('style');
    estilo.textContent = `
      #chatIaArea{margin-top:20px;padding-top:18px;border-top:1px solid #ffffff14}
      #chatIaMensagens{display:grid;gap:8px;max-height:220px;overflow:auto;margin-bottom:10px}
      .chatIaMensagem{padding:10px 12px;border-radius:12px;font-size:12px;line-height:1.45}
      .chatIaBot{color:#d9d0ff;background:#8c5dff18;border:1px solid #a273ff33}
      .chatIaPessoa{color:#fff;background:#ffffff12;text-align:right}
      #chatIaEntrada{width:100%;min-height:65px;resize:vertical;padding:11px;border:1px solid #ffffff1c;border-radius:11px;background:#ffffff0b;color:#fff;outline:none;font:12px Arial,sans-serif}
      #chatIaEnviar{width:100%;margin-top:8px;padding:12px;border:0;border-radius:11px;background:linear-gradient(135deg,#9364ff,#5933d5);color:#fff;font-weight:bold;cursor:pointer}
      #chatIaEnviar:disabled{opacity:.6;cursor:wait}
      .chatIaAviso{color:#8b8d9e;font-size:10px;margin-top:7px}
    `;
    document.head.appendChild(estilo);

    const area = document.createElement('div');
    area.id = 'chatIaArea';
    area.innerHTML = `
      <div class="label">CONVERSE COM A IA</div>
      <div id="chatIaMensagens">
        <div class="chatIaMensagem chatIaBot">Olá! Pode escrever sua dúvida sobre a AuraBot.</div>
      </div>
      <textarea id="chatIaEntrada" placeholder="Digite sua dúvida..."></textarea>
      <button id="chatIaEnviar">Enviar pergunta ➤</button>
      <div class="chatIaAviso">A IA responde sobre a AuraBot, planos, comandos e afiliados.</div>
    `;
    painel.appendChild(area);

    const mensagens = document.getElementById('chatIaMensagens');
    const entrada = document.getElementById('chatIaEntrada');
    const enviar = document.getElementById('chatIaEnviar');

    function adicionarMensagem(texto, pessoa) {
      const item = document.createElement('div');
      item.className = 'chatIaMensagem ' + (pessoa ? 'chatIaPessoa' : 'chatIaBot');
      item.textContent = texto;
      mensagens.appendChild(item);
      mensagens.scrollTop = mensagens.scrollHeight;
      return item;
    }

    async function perguntar() {
      const texto = entrada.value.trim();
      if (!texto || enviar.disabled) return;

      adicionarMensagem(texto, true);
      entrada.value = '';
      enviar.disabled = true;
      enviar.textContent = 'A IA está respondendo...';
      const carregando = adicionarMensagem('Pensando...', false);

      try {
        const destino = new URL('/chat', window.location.origin);
        destino.port = '3000';
        const resposta = await fetch(destino, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({message: texto})
        });
        const dados = await resposta.json();
        carregando.remove();
        adicionarMensagem(dados.resposta || dados.erro || 'Não consegui responder agora.', false);
      } catch (erro) {
        carregando.textContent = 'O suporte IA está offline. Ligue o servidor da IA no Termux e tente novamente.';
      } finally {
        enviar.disabled = false;
        enviar.textContent = 'Enviar pergunta ➤';
      }
    }

    enviar.addEventListener('click', perguntar);
    entrada.addEventListener('keydown', (evento) => {
      if (evento.key === 'Enter' && !evento.shiftKey) {
        evento.preventDefault();
        perguntar();
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarChat);
  } else {
    iniciarChat();
  }
})();
