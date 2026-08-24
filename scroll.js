const elementos = document.querySelectorAll("section, .card, .plan, .stats, .affiliate");

elementos.forEach((elemento, indice) => {
  elemento.classList.add("scroll-anim");
  elemento.style.transitionDelay = (indice % 4) * 0.10 + "s";
});

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    entrada.target.classList.toggle("visivel", entrada.isIntersecting);
  });
}, {
  threshold: 0.15
});

elementos.forEach((elemento) => observador.observe(elemento));
