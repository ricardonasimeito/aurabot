(() => {
  const menu = document.getElementById("menu");
  const botao = document.querySelector(".menu-button");

  if (!menu || !botao) return;

  const estilo = document.createElement("style");
  estilo.textContent = `
    body>header{z-index:20000!important}
    nav{z-index:22000!important}
    #menuOverlay{
      position:fixed;
      inset:0;
      z-index:15000;
      background:#0009;
      backdrop-filter:blur(4px);
      opacity:0;
      pointer-events:none;
      transition:opacity .3s ease;
    }
    #menuOverlay.ativo{
      opacity:1;
      pointer-events:auto;
    }
    body.menu-aberto{overflow:hidden}
  `;
  document.head.appendChild(estilo);

  const fundo = document.createElement("div");
  fundo.id = "menuOverlay";
  document.body.appendChild(fundo);

  function fecharMenu(){
    menu.classList.remove("open");
    fundo.classList.remove("ativo");
    document.body.classList.remove("menu-aberto");
  }

  window.abrirMenu = function(){
    const aberto = !menu.classList.contains("open");
    menu.classList.toggle("open", aberto);
    fundo.classList.toggle("ativo", aberto);
    document.body.classList.toggle("menu-aberto", aberto);
  };

  botao.onclick = window.abrirMenu;
  fundo.onclick = fecharMenu;

  const fechar = document.querySelector(".fechar-menu");
  if (fechar) fechar.onclick = fecharMenu;

  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", fecharMenu);
  });
})();
