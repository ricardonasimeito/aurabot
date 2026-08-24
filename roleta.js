(() => {
  const chave = 'aurabot_roleta_site';
  const menu = document.getElementById('menu');
  if (!menu) return;

  const estilo = document.createElement('style');
  estilo.textContent = `
    .roleta-menu-link{display:flex!important;align-items:center;gap:9px;position:relative}
    .roleta-dot{width:10px;height:10px;margin-left:auto;border:2px solid #111022;border-radius:50%;background:#ff405c;box-shadow:0 0 10px #ff405c,0 0 22px #ff405c99;animation:dotPulse 1.2s ease-in-out infinite;flex-shrink:0}
    @keyframes dotPulse{50%{transform:scale(1.7);opacity:.45}}
  `;
  document.head.appendChild(estilo);

  let link = menu.querySelector('.roleta-menu-link');
  if (!link) {
    link = document.createElement('a');
    link.className = 'roleta-menu-link';
    const whatsapp = menu.querySelector('.nav-button');
    if (whatsapp) menu.insertBefore(link, whatsapp);
    else menu.appendChild(link);
  }

  link.href = 'roleta.html';
  link.textContent = '🎁 Roleta da Sorte';

  if (localStorage.getItem(chave) !== '1') {
    const dot = document.createElement('span');
    dot.className = 'roleta-dot';
    link.appendChild(dot);
  }
})();
