(() => {
  const perguntas = [
    ['Planos','Qual plano é melhor para começar?','O plano de 1 Semana é uma boa opção para testar o AuraBot por mais tempo.'],
    ['Planos','Quanto custa o plano de 5 Dias?','O plano de 5 Dias custa R$ 5,00.'],
    ['Planos','Quanto custa o plano de 1 Semana?','O plano de 1 Semana custa R$ 8,00.'],
    ['Planos','Quanto custa o plano de 1 Mês?','O plano de 1 Mês custa R$ 20,00.'],
    ['Planos','Quanto custa o plano Permanente?','O plano Permanente custa R$ 50,00.'],
    ['Planos','O plano Permanente acaba?','Não. O plano Permanente não tem prazo de validade informado.'],
    ['Planos','Posso testar o AuraBot antes?','Sim. O plano de 5 Dias foi criado para experimentar o bot.'],
    ['Planos','Posso trocar de plano depois?','Fale com o suporte para verificar a melhor forma de trocar de plano.'],
    ['Planos','Posso comprar para outro número?','Sim. Informe ao suporte qual número deverá receber a ativação.'],
    ['Planos','O que vem incluído nos planos?','Os planos dão acesso ao AuraBot, aos comandos disponíveis e ao suporte conforme as condições da oferta.'],
    ['Compra','Como faço para comprar?','Escolha um plano no site e toque no botão de compra para falar com o suporte.'],
    ['Compra','O pagamento é por Pix?','O atendimento pode orientar o pagamento por Pix. A confirmação deve ser feita antes da ativação.'],
    ['Compra','Como recebo o bot depois do pagamento?','Depois da confirmação, o suporte envia as instruções de ativação pelo WhatsApp.'],
    ['Compra','Posso tirar dúvidas antes de pagar?','Sim. Use o Suporte IA ou fale diretamente com o suporte da AuraBot.'],
    ['Compra','Como sei que meu pagamento foi confirmado?','A confirmação deve ser feita pelo sistema de pagamento ou pelo suporte oficial.'],
    ['Compra','O que fazer se paguei e não recebi retorno?','Guarde o comprovante e fale com o suporte informando o plano e o horário do pagamento.'],
    ['Compra','Posso pedir ajuda para escolher um plano?','Sim. Informe quantos dias pretende usar o bot e o suporte recomenda uma opção.'],
    ['Comandos','Como abro o menu do bot?','Use o comando /menu no WhatsApp.'],
    ['Comandos','Qual é o prefixo do AuraBot?','O prefixo atual do AuraBot é a barra: /.'],
    ['Comandos','Quais comandos de proteção existem?','O bot possui recursos anti-áudio, anti-call, anti-documento, anti-imagem, anti-link, anti-sticker e anti-vídeo.'],
    ['Comandos','Como uso o anti-link?','Um administrador pode configurar a proteção anti-link pelo comando correspondente do bot.'],
    ['Comandos','O bot tem comando de banimento?','Sim. Administradores podem usar /ban conforme as regras do grupo.'],
    ['Comandos','O bot consegue silenciar membros?','Sim. O menu possui comandos /mute e /unmute para administração.'],
    ['Comandos','O bot tem boas-vindas?','Sim. O recurso /welcome permite configurar as boas-vindas do grupo.'],
    ['Comandos','Consigo fechar o grupo?','Sim. Administradores podem usar /fechar e /abrir.'],
    ['Comandos','Consigo apagar mensagens?','Sim. O menu possui o comando /delete para moderação.'],
    ['Comandos','Consigo promover um membro?','Sim. Administradores podem usar /promover e /rebaixar.'],
    ['Comandos','O bot tem ranking?','Sim. Existem /ranking, /topdia, /topsemana e /topmes.'],
    ['Comandos','O bot tem sistema de nível?','Sim. O menu possui /nivel, /streak e /conquistas.'],
    ['Comandos','O bot tem saldo e prêmios?','Sim. Existem os comandos /saldo e /premio.'],
    ['Mídia','O bot cria figurinhas?','Sim. Use recursos como /sticker, /attp, /ttp, /brat e /ia-sticker.'],
    ['Mídia','Posso transformar vídeo em figurinha?','Sim. O menu possui o comando /bratvid.'],
    ['Mídia','O bot transforma vídeo em GIF?','Sim. Use /to-gif.'],
    ['Mídia','O bot baixa áudio?','Sim. Existem /play-audio, /yt-mp3 e /to-mp3.'],
    ['Mídia','O bot baixa vídeo?','Sim. Existem /play-video e /yt-mp4.'],
    ['Mídia','O bot baixa vídeos do TikTok?','O menu possui /tik-tok e /tik-tok-audio. Use apenas conteúdos que você tem permissão para baixar.'],
    ['Mídia','O bot baixa conteúdo do Instagram?','O menu possui o comando /instagram. Use apenas conteúdo autorizado.'],
    ['Mídia','O bot baixa conteúdo do Facebook?','O menu possui o comando /facebook. Use apenas conteúdo autorizado.'],
    ['Mídia','O bot converte texto em voz?','Sim. Use /tts.'],
    ['Mídia','O bot transcreve áudio?','Sim. Use /transcrever.'],
    ['IA','O AuraBot tem inteligência artificial?','Sim. O menu possui comandos de IA e o suporte inteligente está sendo integrado.'],
    ['IA','Quais comandos de IA existem?','O menu possui /deepseek, /gemini, /gpt-5-mini, /flux, /ia-sticker, /tts e /transcrever.'],
    ['IA','Posso gerar uma imagem com IA?','Sim. O comando /flux está disponível no menu.'],
    ['IA','Posso criar figurinha com IA?','Sim. Use /ia-sticker.'],
    ['Grupo','Quem pode usar os comandos de administração?','Os comandos de administração devem ser usados por administradores autorizados do grupo.'],
    ['Grupo','Como vejo o ID do grupo?','Use /get-group-id, conforme a permissão disponível no grupo.'],
    ['Grupo','Como vejo informações do grupo?','Use /info ou /link-grupo.'],
    ['Grupo','Como altero o nome do grupo?','Administradores podem usar /rename.'],
    ['Afiliados','Como posso ser afiliado?','Acesse a Área de Afiliados e crie seu perfil quando o cadastro estiver disponível.'],
    ['Afiliados','Como recebo meu link de afiliado?','Cada afiliado terá um código e um link exclusivo depois do cadastro.'],
    ['Afiliados','Como acompanho minhas indicações?','O painel exibirá cliques, indicações, vendas e comissões aprovadas.'],
    ['Afiliados','Como funciona a comissão?','A comissão será calculada sobre vendas aprovadas conforme as regras do programa.'],
    ['Afiliados','Como solicito um saque?','O afiliado poderá solicitar o saque pelo painel quando atingir as regras mínimas.'],
    ['Afiliados','Posso alterar minha chave Pix?','Na versão completa, o afiliado poderá editar os dados do perfil e da chave Pix.'],
    ['Suporte','Como falar com o dono da AuraBot?','Use o botão de suporte do site para iniciar o atendimento pelo WhatsApp.'],
    ['Suporte','O que fazer se o bot não responder?','Confira o prefixo /, verifique se o bot está online e fale com o suporte se o problema continuar.'],
    ['Suporte','Como atualizo o AuraBot?','As atualizações e instruções devem ser solicitadas ao suporte oficial.'],
    ['Suporte','Como denunciar um problema?','Envie ao suporte uma descrição do problema e, se possível, uma captura de tela.'],
    ['Segurança','O pagamento é seguro?','A confirmação deve acontecer pelo provedor de pagamento antes da ativação. Nunca envie senhas ou códigos de segurança.'],
    ['Segurança','A AuraBot pede minha senha do WhatsApp?','Não. Nunca informe sua senha, código de pareamento ou código de verificação.']
  ];

  const css = document.createElement('style');
  css.textContent = `
    #suporteIaBtn{position:fixed;left:18px;bottom:18px;z-index:3000;padding:13px 17px;border:1px solid #a273ff99;border-radius:999px;background:linear-gradient(135deg,#7e52ed,#35237c);color:#fff;font-weight:bold;box-shadow:0 10px 30px #0008;cursor:pointer}
    #suporteIaBtn:hover{transform:translateY(-3px)}
    #suporteIaPainel{position:fixed;top:0;right:0;z-index:3100;width:min(390px,92vw);height:100vh;padding:25px 20px;background:#101221f7;border-left:1px solid #a273ff66;box-shadow:-25px 0 70px #000b;transform:translateX(110%);transition:.35s;overflow:auto}
    #suporteIaPainel.aberto{transform:translateX(0)}
    #suporteIaPainel h2{font-size:25px;margin:40px 0 8px;letter-spacing:-1px}
    #suporteIaPainel p{color:#9294a5;font-size:12px}
    #fecharSuporte{position:absolute;top:18px;right:18px;width:40px;height:40px;border:1px solid #ffffff22;border-radius:12px;background:#ffffff0b;color:#fff;font-size:24px;cursor:pointer}
    #buscarSuporte{width:100%;margin:20px 0 14px;padding:13px;border:1px solid #ffffff1c;border-radius:11px;background:#ffffff0b;color:#fff;outline:none}
    #categoriasSuporte{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:17px}
    .catSuporte{padding:7px 9px;border:1px solid #ffffff19;border-radius:20px;background:#ffffff08;color:#aaaabd;font-size:10px;cursor:pointer}
    .catSuporte.ativa,.catSuporte:hover{background:#8053ed;color:#fff}
    #perguntasSuporte{display:grid;gap:8px}
    .perguntaSuporte{padding:13px;border:1px solid #ffffff14;border-radius:12px;background:#ffffff08;color:#ddd;font-size:12px;text-align:left;cursor:pointer}
    .perguntaSuporte:hover{border-color:#a273ff88;background:#a273ff18}
    #respostaSuporte{display:none;margin-top:15px;padding:15px;border:1px solid #55e6a555;border-radius:12px;background:#55e6a510;color:#c5f5df;font-size:12px}
    #respostaSuporte.visivel{display:block}
    @media(max-width:600px){#suporteIaBtn{left:12px;bottom:12px;font-size:11px;padding:12px 14px}}
  `;
  document.head.appendChild(css);

  const botao = document.createElement('button');
  botao.id = 'suporteIaBtn';
  botao.textContent = '🤖 Suporte IA';
  document.body.appendChild(botao);

  const painel = document.createElement('aside');
  painel.id = 'suporteIaPainel';
  painel.innerHTML = `
    <button id="fecharSuporte" aria-label="Fechar suporte">×</button>
    <div class="label">ATENDIMENTO AURABOT</div>
    <h2>Como posso ajudar?</h2>
    <p>Escolha uma pergunta ou pesquise por assunto.</p>
    <input id="buscarSuporte" placeholder="🔎 Pesquisar pergunta...">
    <div id="categoriasSuporte"></div>
    <div id="perguntasSuporte"></div>
    <div id="respostaSuporte"></div>
  `;
  document.body.appendChild(painel);

  let categoriaAtual = 'Todas';
  const busca = painel.querySelector('#buscarSuporte');
  const lista = painel.querySelector('#perguntasSuporte');
  const resposta = painel.querySelector('#respostaSuporte');
  const categorias = ['Todas', ...new Set(perguntas.map(item => item[0]))];

  categorias.forEach(categoria => {
    const b = document.createElement('button');
    b.className = 'catSuporte' + (categoria === 'Todas' ? ' ativa' : '');
    b.textContent = categoria;
    b.onclick = () => {
      categoriaAtual = categoria;
      painel.querySelectorAll('.catSuporte').forEach(x => x.classList.remove('ativa'));
      b.classList.add('ativa');
      renderizar();
    };
    painel.querySelector('#categoriasSuporte').appendChild(b);
  });

  function renderizar(){
    const texto = busca.value.toLowerCase();
    const filtradas = perguntas.filter(item => {
      const categoriaOk = categoriaAtual === 'Todas' || item[0] === categoriaAtual;
      const textoOk = item[1].toLowerCase().includes(texto) || item[2].toLowerCase().includes(texto);
      return categoriaOk && textoOk;
    });
    lista.innerHTML = '';
    filtradas.forEach(item => {
      const b = document.createElement('button');
      b.className = 'perguntaSuporte';
      b.textContent = item[1];
      b.onclick = () => {
        resposta.textContent = item[2];
        resposta.classList.add('visivel');
      };
      lista.appendChild(b);
    });
  }

  busca.addEventListener('input', renderizar);
  botao.onclick = () => painel.classList.add('aberto');
  painel.querySelector('#fecharSuporte').onclick = () => painel.classList.remove('aberto');
  renderizar();
})();
