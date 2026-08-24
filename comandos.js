const grupos = {
  "🛡️ Proteção": [
    ["/anti-audio","Bloqueia áudios no grupo","Admin"],
    ["/anti-call","Protege contra chamadas","Admin"],
    ["/anti-document","Bloqueia documentos","Admin"],
    ["/anti-image","Bloqueia imagens","Admin"],
    ["/anti-link","Protege contra links","Admin"],
    ["/anti-payment","Protege contra mensagens de pagamento","Admin"],
    ["/anti-sticker","Bloqueia figurinhas","Admin"],
    ["/anti-video","Bloqueia vídeos","Admin"],
    ["/block-wpp","Bloqueia conteúdos indesejados","Admin"]
  ],

  "⚙️ Administração": [
    ["/abrir","Abre o grupo para todos","Admin"],
    ["/fechar","Fecha o grupo para membros","Admin"],
    ["/ban","Remove um participante","Admin"],
    ["/mute","Silencia um participante","Admin"],
    ["/unmute","Remove o silêncio","Admin"],
    ["/promover","Promove alguém a administrador","Admin"],
    ["/rebaixar","Remove a função de administrador","Admin"],
    ["/warn","Aplica uma advertência","Admin"],
    ["/limpar","Limpa mensagens do grupo","Admin"],
    ["/welcome","Ativa ou desativa boas-vindas","Admin"],
    ["/only-admin","Restringe mensagens aos admins","Admin"],
    ["/link-grupo","Mostra o link do grupo","Admin"],
    ["/rename","Altera o nome do grupo","Admin"]
  ],

  "📊 Atividade": [
    ["/perfil","Mostra o perfil do membro","Membro"],
    ["/atividade","Mostra a atividade no grupo","Membro"],
    ["/streak","Mostra a sequência de atividade","Membro"],
    ["/nivel","Mostra o nível do membro","Membro"],
    ["/conquistas","Mostra as conquistas","Membro"],
    ["/ranking","Mostra o ranking do grupo","Membro"],
    ["/saldo","Mostra o saldo de pontos","Membro"],
    ["/premio","Mostra os prêmios disponíveis","Membro"],
    ["/topdia","Ranking do dia","Membro"],
    ["/topsemana","Ranking da semana","Membro"],
    ["/topmes","Ranking do mês","Membro"]
  ],

  "🎨 Texto e Figurinhas": [
    ["/sticker","Transforma mídia em figurinha","Todos"],
    ["/auto-sticker","Cria figurinhas automaticamente","Todos"],
    ["/attp","Cria texto animado","Todos"],
    ["/ttp","Cria texto estilizado","Todos"],
    ["/brat","Cria figurinha personalizada","Todos"],
    ["/bratvid","Cria figurinha em vídeo","Todos"],
    ["/ia-sticker","Cria figurinha com IA","Todos"],
    ["/to-gif","Transforma vídeo em GIF","Todos"],
    ["/to-image","Converte mídia em imagem","Todos"]
  ],

  "🎵 Áudio e Vídeo": [
    ["/play-audio","Busca e reproduz áudio","Todos"],
    ["/play-video","Busca e reproduz vídeo","Todos"],
    ["/to-mp3","Converte vídeo para MP3","Todos"],
    ["/tts","Transforma texto em voz","Todos"],
    ["/transcrever","Transcreve áudio","Todos"],
    ["/yt-mp3","Baixa áudio do YouTube","Todos"],
    ["/yt-mp4","Baixa vídeo do YouTube","Todos"],
    ["/tik-tok","Baixa vídeo do TikTok","Todos"],
    ["/tik-tok-audio","Baixa áudio do TikTok","Todos"],
    ["/instagram","Busca mídia do Instagram","Todos"],
    ["/facebook","Busca mídia do Facebook","Todos"],
    ["/pinterest","Busca mídia do Pinterest","Todos"],
    ["/xtwitter","Busca mídia do X","Todos"]
  ],

  "🧠 Inteligência Artificial": [
    ["/deepseek","Conversa com inteligência artificial","Todos"],
    ["/gemini","Gera respostas com IA","Todos"],
    ["/gpt-5-mini","Assistente inteligente","Todos"],
    ["/flux","Gera imagens com IA","Todos"],
    ["/ia-sticker","Cria figurinhas com IA","Todos"],
    ["/transcrever","Converte voz em texto","Todos"],
    ["/tts","Converte texto em voz","Todos"]
  ],

  "🔎 Busca e Sistema": [
    ["/menu","Abre o menu completo","Todos"],
    ["/cep","Consulta informações de CEP","Todos"],
    ["/yt-search","Pesquisa vídeos","Todos"],
    ["/info","Mostra informações","Todos"],
    ["/ping","Verifica se o bot está online","Todos"],
    ["/suporte","Fala com o suporte","Todos"],
    ["/gerar-link","Gera um link de acesso","Todos"],
    ["/get-group-id","Mostra o ID do grupo","Admin"]
  ],

  "👻 Brincadeiras": [
    ["/abracar","Abraça alguém virtualmente","Todos"],
    ["/beijar","Beija alguém virtualmente","Todos"],
    ["/dado","Joga um dado","Todos"],
    ["/jantar","Escolhe quem vai jantar","Todos"],
    ["/lutar","Inicia uma batalha divertida","Todos"],
    ["/socar","Soco virtual de brincadeira","Todos"]
  ],

  "🩻 Canvas": [
    ["/blur","Aplica desfoque na imagem","Todos"],
    ["/contraste","Ajusta o contraste","Todos"],
    ["/espelhar","Espelha a imagem","Todos"],
    ["/gray","Deixa a imagem em preto e branco","Todos"],
    ["/inverter","Inverte as cores","Todos"],
    ["/pixel","Aplica efeito pixelado","Todos"],
    ["/removebg","Remove o fundo da imagem","Todos"]
  ],

  "🔒 Comandos reservados": [
    ["/on","Liga o AuraBot","Dono"],
    ["/off","Desliga o AuraBot","Dono"],
    ["/set-prefix","Altera o prefixo","Dono"],
    ["/set-menu-image","Altera a imagem do menu","Dono"],
    ["Comandos internos","Disponíveis somente para o proprietário","Dono"]
  ]
};

const estilo = document.createElement("style");
estilo.textContent = `
.command-catalog{padding:70px 0 100px}
.command-catalog h2{text-align:center;font-size:clamp(35px,6vw,60px);letter-spacing:-3px;margin:12px 0}
.command-catalog .intro{text-align:center;color:#9294a5;font-size:14px;max-width:600px;margin:0 auto 30px}
.command-search{display:block;width:min(600px,100%);margin:0 auto 22px;padding:15px 18px;border:1px solid #ffffff1c;border-radius:13px;background:#ffffff0b;color:#fff;outline:none;font-size:14px}
.command-search:focus{border-color:#a273ff}
.command-filters{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-bottom:28px}
.command-filter{padding:9px 13px;border:1px solid #ffffff18;border-radius:30px;background:#ffffff08;color:#aaaabd;font-size:11px;cursor:pointer}
.command-filter.active,.command-filter:hover{background:#8053ed;color:#fff;border-color:#a273ff}
.command-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}
.command-item{padding:18px;border:1px solid #ffffff12;border-radius:15px;background:#ffffff06;transition:.25s}
.command-item:hover{transform:translateY(-4px);border-color:#a273ff88;background:#a273ff0d}
.command-item code{display:block;color:#c3adff;font-size:14px;font-weight:bold;margin-bottom:7px}
.command-item p{color:#9294a5;font-size:12px;min-height:36px}
.command-badge{display:inline-block;margin-top:12px;padding:4px 7px;border-radius:5px;background:#55e6a51a;color:#62e4a6;font-size:9px;font-weight:bold}
.command-badge.dono{background:#ff64701a;color:#ff929a}
.command-count{text-align:center;color:#77798b;font-size:11px;margin-top:25px}
@media(max-width:800px){.command-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:520px){.command-grid{grid-template-columns:1fr}}
`;

document.head.appendChild(estilo);

const secao = document.createElement("section");
secao.id = "catalogo-comandos";
secao.className = "command-catalog container";
secao.innerHTML = `
  <div class="label">DENTRO DO AURABOT</div>
  <h2>Explore os <span class="gradient">comandos.</span></h2>
  <p class="intro">Conheça os recursos disponíveis para proteger, administrar e deixar seu grupo muito mais divertido.</p>
  <input class="command-search" id="buscarComando" placeholder="🔎 Procurar comando...">
  <div class="command-filters" id="filtrosComandos"></div>
  <div class="command-grid" id="listaComandos"></div>
  <div class="command-count" id="contadorComandos"></div>
`;

document.querySelector("main").appendChild(secao);

const lista = [];
Object.entries(grupos).forEach(([categoria, comandos]) => {
  comandos.forEach(([nome, descricao, acesso]) => {
    lista.push({categoria,nome,descricao,acesso});
  });
});

const filtros = document.getElementById("filtrosComandos");
const listaHTML = document.getElementById("listaComandos");
const busca = document.getElementById("buscarComando");
let filtroAtual = "Todos";

["Todos", ...Object.keys(grupos)].forEach((nome) => {
  const botao = document.createElement("button");
  botao.className = "command-filter" + (nome === "Todos" ? " active" : "");
  botao.textContent = nome;
  botao.onclick = () => {
    filtroAtual = nome;
    document.querySelectorAll(".command-filter").forEach(b => b.classList.remove("active"));
    botao.classList.add("active");
    renderizar();
  };
  filtros.appendChild(botao);
});

function renderizar() {
  const texto = busca.value.toLowerCase();

  const encontrados = lista.filter(item => {
    const combinaCategoria = filtroAtual === "Todos" || item.categoria === filtroAtual;
    const combinaBusca = item.nome.toLowerCase().includes(texto) || item.descricao.toLowerCase().includes(texto);
    return combinaCategoria && combinaBusca;
  });

  listaHTML.innerHTML = encontrados.map(item => `
    <article class="command-item">
      <code>${item.nome}</code>
      <p>${item.descricao}</p>
      <span class="command-badge \({item.acesso === "Dono" ? "dono" : ""}">\){item.acesso}</span>
    </article>
  `).join("");

  document.getElementById("contadorComandos").textContent =
    encontrados.length + " comandos encontrados";
}

busca.addEventListener("input", renderizar);
renderizar();

const menu = document.getElementById("menu");
if (menu && !menu.textContent.includes("Comandos")) {
  const link = document.createElement("a");
  link.href = "#catalogo-comandos";
  link.textContent = "Comandos";
  menu.insertBefore(link, menu.children[1]);
}
