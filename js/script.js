// LINKS PÁGINA ATIVA
const links = document.querySelectorAll(".header-nav a");

function ativarLink(link) {
  const href = location.href;
  const hrefLink = link.href;

  if (href.includes(hrefLink)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);

// ATIVAR ITENS DO ORÇAMENTO

const parametros = new URLSearchParams(location.search);

function ativarProduto(parametro) {
  const elemento = document.querySelector(`#${parametro}`);
  if (elemento) {
    elemento.checked = true;
  }
}

parametros.forEach(ativarProduto);

// PERGUNTAS FREQUENTES

const perguntaButton = document.querySelectorAll(".perguntas button");

function ativarResposta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.querySelector(`#${controls}`);

  resposta.classList.toggle("ativo");
  const ativa = resposta.classList.contains("ativo");
  pergunta.setAttribute("aria-expanded", ativa);
}

function perguntaClicada(pergunta) {
  pergunta.addEventListener("click", ativarResposta);
}

perguntaButton.forEach(perguntaClicada);

// GALERIA BICICLETAS

const imgList = document.querySelectorAll(".bicicleta-lista li");
const containerImg = document.querySelector(".bicicleta-lista");

function ativarEvento(event) {
  const imgSelecionada = event.currentTarget;
  const media = matchMedia("(min-width: 900px)").matches;

  if (media) {
    containerImg.prepend(imgSelecionada);
  }
}

function eventosGaleria(img) {
  img.addEventListener("click", ativarEvento);
}

imgList.forEach(eventosGaleria);

// Plugin simple-anime - animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
