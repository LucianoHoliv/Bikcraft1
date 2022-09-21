const links = document.querySelectorAll(".header-nav a");

function ativarLink(link) {
  const href = location.href;
  const hrefLink = link.href;

  if (href.includes(hrefLink)) {
    link.classList.add("ativo");
  }
}

links.forEach(ativarLink);
