(() => {
  if (document.getElementById('ajuste-tela-aura')) return;
  const style = document.createElement('style');
  style.id = 'ajuste-tela-aura';
  style.textContent = `
    html,body{width:100%!important;max-width:100%!important;min-width:0!important;overflow-x:hidden!important}
    img,video,iframe{max-width:100%}
    @media(max-width:700px){
      .container,section,footer{width:100%!important;max-width:100%!important}
      .container,section{padding-left:16px!important;padding-right:16px!important}
      .buttons{width:100%!important}.button{max-width:100%!important}.hero-card{max-width:100%!important}
    }
    button[id*="audio" i],button[id*="som" i],button[id*="mute" i],button[class*="audio" i],button[class*="som" i],button[class*="mute" i],[role="button"][id*="audio" i],[role="button"][id*="som" i]{position:fixed!important;right:14px!important;left:auto!important;bottom:96px!important;top:auto!important;z-index:99999!important}
    button[id*="top" i],button[id*="scroll" i],button[class*="top" i],button[class*="scroll" i],[role="button"][id*="top" i],[role="button"][id*="scroll" i]{position:fixed!important;right:14px!important;left:auto!important;bottom:24px!important;top:auto!important;z-index:99999!important}
  `;
  document.head.appendChild(style);

  const audioSelector = 'button[id*="audio" i],button[id*="som" i],button[id*="mute" i],button[class*="audio" i],button[class*="som" i],button[class*="mute" i],[role="button"][id*="audio" i],[role="button"][id*="som" i]';
  const topoSelector = 'button[id*="top" i],button[id*="scroll" i],button[class*="top" i],button[class*="scroll" i],[role="button"][id*="top" i],[role="button"][id*="scroll" i]';
  const manterUm = (seletor) => [...document.querySelectorAll(seletor)].slice(1).forEach(botao => botao.remove());
  const limparDuplicados = () => { manterUm(audioSelector); manterUm(topoSelector); };
  limparDuplicados();
  new MutationObserver(limparDuplicados).observe(document.body,{childList:true,subtree:true});
})();
