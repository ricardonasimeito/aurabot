(() => {
  if (document.getElementById('comentarios-ilustrativos')) return;
  const dados = [
    ['@LucasAvalia','avatar-assets/avatar-1.jpg','★★★★★','Entrei só para testar e agora meu grupo tem mais comando que eu 😂'],
    ['@AnaReviews','avatar-assets/avatar-2.jpg','★★★★☆','O bot trabalha mais que eu na segunda-feira. Respeito demais 🤖'],
    ['@JotaOpina','avatar-assets/avatar-3.jpg','★★★★★','Apertei um comando e, pela primeira vez, o grupo ficou organizado. Milagre!'],
    ['@MihAvaliacoes','avatar-assets/avatar-4.jpg','★★★★★','A estética neon ficou tão bonita que eu quase esqueci de usar o bot ✨'],
    ['@GuiSincero','avatar-assets/avatar-5.jpg','★★★★☆','Meu grupo era uma bagunça. Agora continua, mas com comandos 😂'],
    ['@NandaTesta','avatar-assets/avatar-1.jpg','★★★★★','Gostei porque não precisa ficar procurando tudo. O menu facilita muito.'],
    ['@KauReviews','avatar-assets/avatar-2.jpg','★★★★☆','O administrador do grupo ganhou poderes e ninguém foi avisado 😎'],
    ['@RafaOpina','avatar-assets/avatar-3.jpg','★★★★★','A AuraBot chegou no grupo e já está trabalhando mais que todo mundo 🚀'],
    ['@BiaAvalia','avatar-assets/avatar-4.jpg','★★★★★','Cinco estrelas porque o bot não reclama quando eu mando comando de madrugada.'],
    ['@DuduReview','avatar-assets/avatar-5.jpg','★★★★☆','Testei a roleta e pelo menos a experiência foi divertida 😅'],
    ['@LariSincera','avatar-assets/avatar-1.jpg','★★★★★','O menu ficou tão fácil que até o tio do grupo conseguiu usar.'],
    ['@ViniTesta','avatar-assets/avatar-2.jpg','★★★★☆','Agora o grupo tem automação. Só falta automatizar minha preguiça.'],
    ['@IsaReviews','avatar-assets/avatar-3.jpg','★★★★★','Visual bonito, comandos organizados e zero confusão para encontrar as funções.'],
    ['@PedrinOpina','avatar-assets/avatar-4.jpg','★★★★☆','A AuraBot entrou no grupo e já pediu menos bagunça que o administrador.'],
    ['@JujuAvalia','avatar-assets/avatar-5.jpg','★★★★★','Gostei dos detalhes. Parece uma loja de bot de verdade, não uma página qualquer.'],
    ['@CaioReviews','avatar-assets/avatar-1.jpg','★★★★★','Cinco estrelas e um café para quem inventou esse menu.'],
    ['@MaluOpina','avatar-assets/avatar-2.jpg','★★★★☆','O site é bonito até quando eu entro só para olhar os planos.'],
    ['@TeteAvalia','avatar-assets/avatar-3.jpg','★★★★★','O bot não dorme, não reclama e ainda ajuda no grupo. Injusto com a equipe 😂'],
    ['@NicoReviews','avatar-assets/avatar-4.jpg','★★★★☆','Testei alguns comandos e já estou querendo colocar em todos os grupos.'],
    ['@LuhTesta','avatar-assets/avatar-5.jpg','★★★★★','A proposta é muito boa e o visual roxo ficou perfeito.']
  ];
  const style = document.createElement('style');
  style.textContent = `
    #comentarios-ilustrativos{padding:78px 5%;border-top:1px solid #ffffff12;background:linear-gradient(180deg,transparent,#8c5dff08)}
    .comentarios-wrap{width:min(760px,100%);margin:auto}.comentarios-kicker{color:#b598ff;font-size:11px;font-weight:bold;letter-spacing:2px;text-align:center}.comentarios-title{margin:12px 0 8px;text-align:center;font-size:clamp(32px,5vw,52px);letter-spacing:-2px}.comentarios-subtitle{max-width:600px;margin:0 auto 30px;color:#9294a5;font-size:12px;text-align:center}
    .comentarios-feed{display:grid;gap:12px}.comentario-social{display:flex;gap:12px;padding:15px 16px;border:1px solid #ffffff14;border-radius:18px;background:#ffffff08;transition:.25s}.comentario-social:hover{transform:translateX(4px);border-color:#a273ff77}.comentario-avatar{display:block;flex:0 0 44px;width:44px;height:44px;border:1px solid #a273ff66;border-radius:50%;object-fit:cover;background:#17132f}.comentario-body{min-width:0;flex:1}.comentario-head{display:flex;align-items:center;justify-content:space-between;gap:8px}.comentario-name{font-size:13px;font-weight:bold}.comentario-demo{color:#a98cff;font-size:8px;letter-spacing:1px;font-weight:bold}.comentario-stars{margin:3px 0;color:#ffc857;font-size:13px;letter-spacing:1px}.comentario-text{color:#b0b1bf;font-size:12px;line-height:1.55}.comentario-actions{display:flex;gap:16px;margin-top:8px;color:#77798b;font-size:10px}.comentario-actions span:first-child{color:#a98cff}
    @media(max-width:600px){#comentarios-ilustrativos{padding:58px 5%}.comentario-social{padding:13px}.comentario-head{align-items:flex-start;flex-direction:column;gap:2px}}
  `;
  document.head.appendChild(style);
  const section = document.createElement('section');
  section.id = 'comentarios-ilustrativos';
  section.innerHTML = `<div class="comentarios-wrap"><div class="comentarios-kicker">COMUNIDADE AURABOT</div><h2 class="comentarios-title">O pessoal comentou.</h2><p class="comentarios-subtitle">Demonstração visual com perfis fictícios e avatares ilustrativos. Substitua por avaliações reais quando tiver autorização dos clientes.</p><div class="comentarios-feed">${dados.map(([nome,avatar,estrelas,texto]) => `<article class="comentario-social"><img class="comentario-avatar" src="${avatar}" alt="Avatar ilustrativo de ${nome}" loading="lazy"><div class="comentario-body"><div class="comentario-head"><span class="comentario-name">${nome}</span><span class="comentario-demo">DEMONSTRAÇÃO</span></div><div class="comentario-stars">${estrelas}</div><p class="comentario-text">${texto}</p><div class="comentario-actions"><span>Responder</span><span>Denunciar</span></div></div></article>`).join('')}</div></div>`;
  document.body.appendChild(section);
})();
