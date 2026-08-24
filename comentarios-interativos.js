(() => {
  const iniciar = () => {
    const secao = document.getElementById('comentarios-ilustrativos');
    if (document.getElementById('form-comentario-aura')) return;
    if (!secao) return setTimeout(iniciar, 100);

  const estilo = document.createElement('style');
  estilo.textContent = `
    .comentario-form{margin:0 0 24px;padding:20px;border:1px solid #a273ff55;border-radius:18px;background:#8c5dff0c}
    .comentario-form h3{margin-bottom:5px;font-size:16px}.comentario-form p{margin-bottom:14px;color:#9294a5;font-size:11px}
    .comentario-fields{display:grid;gap:10px}.comentario-fields input,.comentario-fields textarea{width:100%;padding:12px;border:1px solid #ffffff18;border-radius:10px;outline:0;color:#fff;background:#080812aa;font:inherit;font-size:12px}.comentario-fields textarea{min-height:78px;resize:vertical}.comentario-fields input:focus,.comentario-fields textarea:focus{border-color:#a273ff}
    .estrelas-escolha{display:flex;align-items:center;gap:4px}.estrela-opcao{padding:2px;border:0;color:#5b5d6c;background:transparent;font-size:25px;cursor:pointer;transition:.15s}.estrela-opcao.ativa,.estrela-opcao:hover{color:#ffc857;transform:scale(1.12)}
    .publicar-comentario{padding:11px 16px;border:0;border-radius:10px;color:#fff;background:linear-gradient(135deg,#9364ff,#5933d5);font-weight:bold;font-size:12px;cursor:pointer}.publicar-comentario:hover{filter:brightness(1.15)}
    .comentario-aviso{display:none;margin-top:10px;color:#72e6ae;font-size:11px}.comentario-aviso.show{display:block}
  `;
  document.head.appendChild(estilo);

  const form = document.createElement('form');
  form.id = 'form-comentario-aura';
  form.className = 'comentario-form';
  form.innerHTML = `<h3>Deixe sua avaliação ✨</h3><p>Escolha as estrelas e conte o que achou da AuraBot.</p><div class="comentario-fields"><input id="novoNomeAura" maxlength="35" placeholder="Seu nome ou @usuário" required><textarea id="novoTextoAura" maxlength="240" placeholder="Escreva seu comentário..." required></textarea><div><small style="color:#9294a5;font-size:10px">Sua nota:</small><div class="estrelas-escolha" id="estrelasEscolha" aria-label="Escolha sua nota"></div></div><button class="publicar-comentario" type="submit">Publicar comentário</button><div class="comentario-aviso" id="comentarioAviso">Comentário adicionado neste navegador ✅</div></div>`;
  const feed = secao.querySelector('.comentarios-feed');
  secao.querySelector('.comentarios-wrap').insertBefore(form, feed);

  let nota = 5;
  const estrelas = form.querySelector('#estrelasEscolha');
  function desenharEstrelas(){
    estrelas.innerHTML = '';
    for(let i=1;i<=5;i++){
      const botao = document.createElement('button'); botao.type='button'; botao.className='estrela-opcao'+(i<=nota?' ativa':''); botao.textContent='★'; botao.setAttribute('aria-label',`${i} estrela${i>1?'s':''}`); botao.onclick=()=>{nota=i;desenharEstrelas()}; estrelas.appendChild(botao);
    }
  }
  desenharEstrelas();

  function adicionar(nome,texto,estrelasTexto){
    const card=document.createElement('article');card.className='comentario-social';
    const avatar=document.createElement('div');avatar.className='comentario-avatar';avatar.textContent='✨';
    const body=document.createElement('div');body.className='comentario-body';
    const head=document.createElement('div');head.className='comentario-head';
    const name=document.createElement('span');name.className='comentario-name';name.textContent=nome;
    const demo=document.createElement('span');demo.className='comentario-demo';demo.textContent='AVALIAÇÃO LOCAL';
    head.append(name,demo);
    const stars=document.createElement('div');stars.className='comentario-stars';stars.textContent=estrelasTexto;
    const p=document.createElement('p');p.className='comentario-text';p.textContent=`“${texto}”`;
    const actions=document.createElement('div');actions.className='comentario-actions';actions.innerHTML='<span>Responder</span><span>Denunciar</span>';
    body.append(head,stars,p,actions);card.append(avatar,body);feed.prepend(card);
  }

  try{JSON.parse(localStorage.getItem('aurabot_comentarios_visitantes')||'[]').forEach(c=>adicionar(c.nome,c.texto,c.estrelas));}catch(e){}
  form.onsubmit=(evento)=>{
    evento.preventDefault();
    const nome=form.querySelector('#novoNomeAura').value.trim();const texto=form.querySelector('#novoTextoAura').value.trim();if(!nome||!texto)return;
    const estrelasTexto='★'.repeat(nota)+'☆'.repeat(5-nota);adicionar(nome,texto,estrelasTexto);
    const salvos=JSON.parse(localStorage.getItem('aurabot_comentarios_visitantes')||'[]');salvos.unshift({nome,texto,estrelas:estrelasTexto});localStorage.setItem('aurabot_comentarios_visitantes',JSON.stringify(salvos.slice(0,30)));
    form.reset();nota=5;desenharEstrelas();const aviso=form.querySelector('#comentarioAviso');aviso.classList.add('show');setTimeout(()=>aviso.classList.remove('show'),3000);
  };
  };
  iniciar();
})();
