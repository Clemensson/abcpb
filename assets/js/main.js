/* =============================================================
   ABCPB - scripts do site
   Monta cabeçalho, rodapé e listas a partir da pasta /dados.
   Normalmente você NÃO precisa editar este arquivo.
   ============================================================= */
(function () {
  "use strict";

  var S = window.SITE || {};
  var NOTICIAS = window.NOTICIAS || [];
  var EVENTOS = window.EVENTOS || [];
  var IGREJAS = window.IGREJAS || [];
  var MISSOES = window.MISSOES || [];

  /* ---------- Ícones (SVG) ---------- */
  var I = {
    igreja: '<svg viewBox="0 0 24 24"><path d="M12 1l1 0v3h3v2h-3v2.2l6 3.6V23h-6v-5a1 1 0 0 0-2 0v5H5V11.8l6-3.6V6H8V4h3V1h1z"/></svg>',
    agenda: '<svg viewBox="0 0 24 24"><path d="M7 2h2v2h6V2h2v2h3a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h3V2zm12 8H5v10h14V10zM7 12h4v4H7v-4z"/></svg>',
    globo: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-3a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8.2 8.2 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4H4.3zm.8 2h3a15.7 15.7 0 0 0 1.4 3.6A8 8 0 0 1 5.1 16zm3-8h-3a8 8 0 0 1 4.4-3.6C8.9 5.5 8.4 6.7 8.1 8zM12 20c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.2 5.6c.6-1.1 1.1-2.3 1.4-3.6h3a8 8 0 0 1-4.4 3.6zm1.8-5.6a16.5 16.5 0 0 0 0-4h3.4a8.2 8.2 0 0 1 0 4h-3.4z"/></svg>',
    coracao: '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.6-10-9.5C.4 8.1 2.4 4 6.4 4 8.7 4 10.4 5.3 12 7.2 13.6 5.3 15.3 4 17.6 4c4 0 6 4.1 4.4 7.5C19.5 16.4 12 21 12 21z"/></svg>',
    pino: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
    relogio: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm1 10.4V6h-2v7.4l5 3 1-1.7-4-2.3z"/></svg>',
    pessoa: '<svg viewBox="0 0 24 24"><path d="M12 12a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2c-4.4 0-9 2.2-9 5v3h18v-3c0-2.8-4.6-5-9-5z"/></svg>',
    fone: '<svg viewBox="0 0 24 24"><path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1l-2.3 2.2z"/></svg>',
    email: '<svg viewBox="0 0 24 24"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7.2L4 7.4V17h16V7.4l-8 4.8zM5.2 7l6.8 4 6.8-4H5.2z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zM17.3 5.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4zM21.9 7c-.1-1.6-.4-3-1.6-4.2S17.6 1.2 16 1.1C14.4 1 9.6 1 8 1.1 6.4 1.2 5 1.5 3.8 2.7S2.2 5.4 2.1 7C2 8.6 2 13.4 2.1 15c.1 1.6.4 3 1.6 4.2s2.6 1.5 4.2 1.6c1.6.1 6.4.1 8 0 1.6-.1 3-.4 4.2-1.6s1.5-2.6 1.6-4.2c.1-1.6.1-6.4.2-8zm-2.2 10.3a3.3 3.3 0 0 1-1.8 1.8c-1.3.5-4.3.4-5.9.4s-4.6.1-5.9-.4a3.3 3.3 0 0 1-1.8-1.8c-.5-1.3-.4-4.3-.4-5.9s-.1-4.6.4-5.9a3.3 3.3 0 0 1 1.8-1.8c1.3-.5 4.3-.4 5.9-.4s4.6-.1 5.9.4a3.3 3.3 0 0 1 1.8 1.8c.5 1.3.4 4.3.4 5.9s.1 4.6-.4 5.9z"/></svg>',
    facebook: '<svg viewBox="0 0 24 24"><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-3.6 0-4.5 2.7-4.5 4.5V8H7v4h2.5v11H14V12h3.4l.6-4h-4z"/></svg>',
    youtube: '<svg viewBox="0 0 24 24"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12 31 31 0 0 0 1 16.8a3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15V9l5.8 3-5.8 3z"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.4.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    cacto: '<svg viewBox="0 0 100 200"><path d="M44 200V40c0-12 12-12 12 0v160H44zM56 120h14c6 0 8-4 8-10V70c0-10 10-10 10 0v42c0 14-8 20-20 20H56v-12zM44 100H32c-12 0-20-6-20-20V50c0-10 10-10 10 0v30c0 6 2 8 8 8h14v12z"/></svg>'
  };

  /* ---------- Utilidades ---------- */
  function esc(t) {
    return String(t == null ? "" : t).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  var MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
  var MESES_LONGO = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];
  function data(str) {
    var p = String(str).split("-");
    return new Date(+p[0], (+p[1] || 1) - 1, +p[2] || 1);
  }
  function dataLonga(str) {
    var d = data(str);
    return d.getDate() + " de " + MESES_LONGO[d.getMonth()] + " de " + d.getFullYear();
  }
  function hoje() { var d = new Date(); d.setHours(0, 0, 0, 0); return d; }
  function $(sel) { return document.querySelector(sel); }
  function reais(v) { return "R$ " + Number(v).toLocaleString("pt-BR"); }
  function whatsLink() { return S.whatsapp ? "https://wa.me/" + S.whatsapp : ""; }

  /* ---------- Cabeçalho ---------- */
  var MENU = [
    { href: "index.html", texto: "Início", id: "inicio" },
    { href: "quem-somos.html", texto: "Quem Somos", id: "quem-somos" },
    { href: "igrejas.html", texto: "Igrejas", id: "igrejas" },
    { href: "noticias.html", texto: "Notícias", id: "noticias" },
    { href: "agenda.html", texto: "Agenda", id: "agenda" },
    { href: "missoes.html", texto: "Missões", id: "missoes" }
  ];

  function redesHTML() {
    var h = "";
    if (S.instagram) h += '<a href="' + esc(S.instagram) + '" target="_blank" rel="noopener" aria-label="Instagram">' + I.instagram + "</a>";
    if (S.facebook) h += '<a href="' + esc(S.facebook) + '" target="_blank" rel="noopener" aria-label="Facebook">' + I.facebook + "</a>";
    if (S.youtube) h += '<a href="' + esc(S.youtube) + '" target="_blank" rel="noopener" aria-label="YouTube">' + I.youtube + "</a>";
    return h;
  }

  function montarTopo() {
    var alvo = $("#topo");
    if (!alvo) return;
    var pagina = document.body.getAttribute("data-pagina");
    var itens = MENU.map(function (m) {
      return '<li><a href="' + m.href + '"' + (m.id === pagina ? ' class="ativo" aria-current="page"' : "") + ">" + m.texto + "</a></li>";
    }).join("");
    itens += '<li><a href="contribua.html" class="btn-contribua' + (pagina === "contribua" ? " ativo" : "") + '">Contribua</a></li>';

    alvo.innerHTML =
      (S.emConstrucao ? '<div class="faixa-construcao">🚧 Site em construção: algumas informações ainda são provisórias.</div>' : "") +
      '<div class="topbar"><div class="container">' +
        '<div class="topbar-contatos">' +
          (S.telefone ? '<a href="' + (whatsLink() || "tel:" + S.telefone) + '">' + I.fone + esc(S.telefone) + "</a>" : "") +
          (S.email ? '<a class="esconde-mobile" href="mailto:' + esc(S.email) + '">' + I.email + esc(S.email) + "</a>" : "") +
        "</div>" +
        '<div class="topbar-redes">' + redesHTML() + "</div>" +
      "</div></div>" +
      '<header class="header"><div class="container">' +
        '<a class="marca" href="index.html">' +
          '<img src="assets/img/logo.png" alt="Logo da ' + esc(S.sigla) + '">' +
          '<span class="marca-texto"><strong>' + esc(S.sigla) + "</strong><span>" + esc(S.nome) + "</span></span>" +
        "</a>" +
        '<nav aria-label="Menu principal">' +
          '<button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span></button>' +
          '<ul class="menu">' + itens + "</ul>" +
        "</nav>" +
      "</div></header>";

    var btn = alvo.querySelector(".menu-toggle");
    var header = alvo.querySelector(".header");
    btn.addEventListener("click", function () {
      var aberto = header.classList.toggle("menu-aberto");
      btn.setAttribute("aria-expanded", aberto);
      btn.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    });
  }

  /* ---------- Rodapé ---------- */
  function montarRodape() {
    var alvo = $("#rodape");
    if (!alvo) return;
    var ano = new Date().getFullYear();
    alvo.innerHTML =
      '<footer class="rodape"><div class="container">' +
        '<div class="rodape-grade">' +
          '<div class="rodape-sobre">' +
            '<a class="marca" href="index.html"><img src="assets/img/logo.png" alt=""><span class="marca-texto"><strong>' + esc(S.sigla) + "</strong><span>" + esc(S.nome) + "</span></span></a>" +
            "<p>" + esc(S.slogan) + "</p>" +
            '<div class="redes">' + redesHTML() + "</div>" +
          "</div>" +
          "<div><h4>Navegação</h4><ul>" +
            MENU.map(function (m) { return '<li><a href="' + m.href + '">' + m.texto + "</a></li>"; }).join("") +
          "</ul></div>" +
          "<div><h4>Participe</h4><ul>" +
            '<li><a href="agenda.html">Próximos eventos</a></li>' +
            '<li><a href="missoes.html">Projetos missionários</a></li>' +
            '<li><a href="contribua.html">Contribua</a></li>' +
            '<li><a href="igrejas.html">Encontre uma igreja</a></li>' +
          "</ul></div>" +
          "<div><h4>Contato</h4><ul>" +
            (S.endereco ? "<li>" + I.pino + esc(S.endereco) + "</li>" : "") +
            (S.telefone ? '<li><a href="' + (whatsLink() || "tel:" + S.telefone) + '">' + I.fone + esc(S.telefone) + "</a></li>" : "") +
            (S.email ? '<li><a href="mailto:' + esc(S.email) + '">' + I.email + esc(S.email) + "</a></li>" : "") +
          "</ul></div>" +
        "</div>" +
        '<div class="rodape-base"><span>© ' + ano + " " + esc(S.nome) + ". Todos os direitos reservados.</span><span>Cariri paraibano · Paraíba · Brasil</span></div>" +
      "</div><div class=\"rodape-faixa\"></div></footer>" +
      (whatsLink() ? '<a class="whats-flutuante" href="' + whatsLink() + '" target="_blank" rel="noopener" aria-label="Fale conosco pelo WhatsApp">' + I.whatsapp + "</a>" : "");
  }

  /* ---------- Notícias ---------- */
  function noticiasOrdenadas() {
    return NOTICIAS.slice().sort(function (a, b) { return data(b.data) - data(a.data); });
  }
  function cartaoNoticia(n) {
    var img = n.imagem
      ? '<img src="' + esc(n.imagem) + '" alt="" loading="lazy">'
      : '<div class="sem-foto"><img src="assets/img/logo.png" alt=""></div>';
    return '<a class="cartao" href="noticia.html?id=' + encodeURIComponent(n.id) + '">' +
      '<div class="cartao-imagem">' + img + (n.categoria ? '<span class="categoria">' + esc(n.categoria) + "</span>" : "") + "</div>" +
      '<div class="cartao-corpo"><span class="cartao-data">' + dataLonga(n.data) + "</span>" +
      "<h3>" + esc(n.titulo) + "</h3><p>" + esc(n.resumo) + '</p><span class="leia">Leia mais →</span></div></a>';
  }
  function renderNoticias(alvo) {
    var limite = +alvo.getAttribute("data-limite") || 0;
    var lista = noticiasOrdenadas();
    var filtros = alvo.getAttribute("data-filtros") !== null;

    function desenhar(cat) {
      var itens = lista.filter(function (n) { return !cat || n.categoria === cat; });
      if (limite) itens = itens.slice(0, limite);
      grade.innerHTML = itens.length ? itens.map(cartaoNoticia).join("") : '<p class="vazio">Nenhuma notícia publicada ainda.</p>';
    }

    var grade = document.createElement("div");
    grade.className = "grade-3";
    alvo.innerHTML = "";
    if (filtros) {
      var cats = [];
      lista.forEach(function (n) { if (n.categoria && cats.indexOf(n.categoria) < 0) cats.push(n.categoria); });
      var barra = document.createElement("div");
      barra.className = "filtros";
      barra.innerHTML = '<button class="filtro ativo" data-cat="">Todas</button>' +
        cats.map(function (c) { return '<button class="filtro" data-cat="' + esc(c) + '">' + esc(c) + "</button>"; }).join("");
      barra.addEventListener("click", function (e) {
        var b = e.target.closest(".filtro");
        if (!b) return;
        barra.querySelectorAll(".filtro").forEach(function (x) { x.classList.remove("ativo"); });
        b.classList.add("ativo");
        desenhar(b.getAttribute("data-cat"));
      });
      alvo.appendChild(barra);
    }
    alvo.appendChild(grade);
    desenhar("");
  }

  function renderNoticiaCompleta(alvo) {
    var id = new URLSearchParams(location.search).get("id");
    var n = NOTICIAS.filter(function (x) { return x.id === id; })[0];
    var titulo = $("#noticia-titulo"), info = $("#noticia-info");
    if (!n) {
      titulo.textContent = "Notícia não encontrada";
      alvo.innerHTML = '<p class="vazio">Essa notícia não existe ou foi removida. <a href="noticias.html">Ver todas as notícias</a></p>';
      return;
    }
    document.title = n.titulo + " | " + S.sigla;
    titulo.textContent = n.titulo;
    info.textContent = dataLonga(n.data) + (n.categoria ? " · " + n.categoria : "");
    var paragrafos = (Array.isArray(n.texto) ? n.texto : [n.texto || n.resumo]);
    alvo.innerHTML =
      (n.imagem ? '<div class="capa"><img src="' + esc(n.imagem) + '" alt=""></div>' : "") +
      '<div class="texto-corrido">' + paragrafos.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
      (n.link ? '<a class="btn btn-terracota" href="' + esc(n.link) + '" target="_blank" rel="noopener">Ver publicação original</a><br>' : "") +
      '<a class="voltar" href="noticias.html">← Voltar para notícias</a>';
  }

  /* ---------- Eventos ---------- */
  function cartaoEvento(e, passado) {
    var d = data(e.data);
    return '<article class="evento' + (passado ? " passado" : "") + '">' +
      '<div class="evento-data"><span class="dia">' + String(d.getDate()).padStart(2, "0") + '</span><span class="mes">' + MESES[d.getMonth()] + " " + String(d.getFullYear()).slice(2) + "</span></div>" +
      "<div><h3>" + esc(e.titulo) + "</h3>" +
      '<div class="evento-info">' +
        (e.hora ? "<span>" + I.relogio + esc(e.hora) + "</span>" : "") +
        "<span>" + I.pino + esc(e.local) + (e.cidade ? " · " + esc(e.cidade) : "") + "</span>" +
      "</div>" +
      (e.descricao ? '<p class="desc">' + esc(e.descricao) + "</p>" : "") +
      "</div></article>";
  }
  function renderEventos(alvo) {
    var limite = +alvo.getAttribute("data-limite") || 0;
    var comPassados = alvo.getAttribute("data-passados") !== null;
    var h = hoje();
    var futuros = EVENTOS.filter(function (e) { return data(e.data) >= h; })
      .sort(function (a, b) { return data(a.data) - data(b.data); });
    var passados = EVENTOS.filter(function (e) { return data(e.data) < h; })
      .sort(function (a, b) { return data(b.data) - data(a.data); });
    if (limite) futuros = futuros.slice(0, limite);

    var html = futuros.length ? futuros.map(function (e) { return cartaoEvento(e, false); }).join("")
      : '<p class="vazio">Nenhum evento agendado no momento. Volte em breve!</p>';
    if (comPassados && passados.length) {
      html += '<h3 style="margin:30px 0 4px">Eventos realizados</h3>' + passados.map(function (e) { return cartaoEvento(e, true); }).join("");
    }
    alvo.className = "agenda-lista";
    alvo.innerHTML = html;
  }

  /* ---------- Igrejas ---------- */
  function cartaoIgreja(g) {
    var acoes = "";
    if (g.mapa) acoes += '<a href="' + esc(g.mapa) + '" target="_blank" rel="noopener">Como chegar</a>';
    if (g.instagram) acoes += '<a href="' + esc(g.instagram) + '" target="_blank" rel="noopener">Instagram</a>';
    if (g.telefone) acoes += '<a href="tel:' + esc(g.telefone) + '">Ligar</a>';
    return '<article class="igreja"><span class="cidade">' + esc(g.cidade) + "</span><h3>" + esc(g.nome) + "</h3><ul>" +
      (g.pastor ? "<li>" + I.pessoa + "<span>" + esc(g.pastor) + "</span></li>" : "") +
      (g.endereco ? "<li>" + I.pino + "<span>" + esc(g.endereco) + "</span></li>" : "") +
      (g.cultos ? "<li>" + I.relogio + "<span>" + esc(g.cultos) + "</span></li>" : "") +
      (g.telefone ? "<li>" + I.fone + "<span>" + esc(g.telefone) + "</span></li>" : "") +
      "</ul>" + (acoes ? '<div class="acoes">' + acoes + "</div>" : "") + "</article>";
  }
  function semAcento(t) { return String(t).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase(); }
  function renderIgrejas(alvo) {
    var cidades = [];
    IGREJAS.forEach(function (g) { if (cidades.indexOf(g.cidade) < 0) cidades.push(g.cidade); });
    cidades.sort();
    alvo.innerHTML =
      '<label class="sr-only" for="busca-igreja">Buscar igreja</label>' +
      '<input id="busca-igreja" class="busca" type="search" placeholder="Buscar por nome, cidade ou pastor...">' +
      '<div class="filtros"><button class="filtro ativo" data-cidade="">Todas as cidades</button>' +
      cidades.map(function (c) { return '<button class="filtro" data-cidade="' + esc(c) + '">' + esc(c) + "</button>"; }).join("") +
      '</div><div class="grade-3" id="lista-igrejas"></div>';
    var lista = alvo.querySelector("#lista-igrejas");
    var busca = alvo.querySelector(".busca");
    var cidade = "";
    function desenhar() {
      var q = semAcento(busca.value.trim());
      var itens = IGREJAS.filter(function (g) {
        if (cidade && g.cidade !== cidade) return false;
        if (!q) return true;
        return semAcento(g.nome + " " + g.cidade + " " + g.pastor + " " + g.endereco).indexOf(q) >= 0;
      }).sort(function (a, b) { return a.cidade.localeCompare(b.cidade); });
      lista.innerHTML = itens.length ? itens.map(cartaoIgreja).join("") : '<p class="vazio" style="grid-column:1/-1">Nenhuma igreja encontrada.</p>';
    }
    busca.addEventListener("input", desenhar);
    alvo.querySelector(".filtros").addEventListener("click", function (e) {
      var b = e.target.closest(".filtro");
      if (!b) return;
      alvo.querySelectorAll(".filtro").forEach(function (x) { x.classList.remove("ativo"); });
      b.classList.add("ativo");
      cidade = b.getAttribute("data-cidade");
      desenhar();
    });
    desenhar();
  }

  /* ---------- Missões ---------- */
  function renderMissoes(alvo) {
    alvo.className = "grade-3";
    alvo.innerHTML = MISSOES.map(function (m) {
      var pct = m.meta ? Math.min(100, Math.round((m.arrecadado / m.meta) * 100)) : 0;
      return '<article class="projeto"><div class="projeto-topo"><h3>' + esc(m.titulo) + "</h3><span>" + esc(m.local) + "</span></div>" +
        '<div class="projeto-corpo">' + (m.missionario ? '<span class="missionario">' + esc(m.missionario) + "</span>" : "") +
        "<p>" + esc(m.descricao) + "</p>" +
        (m.meta ? '<div class="barra" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><span style="width:' + pct + '%"></span></div>' +
          '<div class="barra-legenda"><span>' + reais(m.arrecadado) + " (" + pct + "%)</span><span>Meta " + reais(m.meta) + "</span></div>" : "") +
        "</div></article>";
    }).join("") || '<p class="vazio">Em breve, novos projetos.</p>';
  }

  /* ---------- Contribua ---------- */
  function preencherContribua() {
    var p = S.pix || {}, b = S.banco || {};
    var caixa = $("#dados-contribuicao");
    if (caixa && !S.mostrarDadosBancarios) {
      caixa.innerHTML = '<div class="caixa-pix"><h3>Em breve</h3><p>Os dados para contribuição (PIX e conta bancária) serão publicados aqui em breve.</p></div>';
      return;
    }
    var set = function (id, v) { var el = document.getElementById(id); if (el) el.textContent = v || "—"; };
    set("pix-chave", p.chave); set("pix-tipo", p.tipo); set("pix-favorecido", p.favorecido);
    set("banco-nome", b.banco); set("banco-agencia", b.agencia); set("banco-conta", b.conta); set("banco-tipo", b.tipo);
    set("banco-favorecido", p.favorecido);
    var btn = $("#copiar-pix");
    if (btn) btn.addEventListener("click", function () {
      var feito = function () {
        btn.textContent = "Copiado!"; btn.classList.add("copiado");
        setTimeout(function () { btn.textContent = "Copiar"; btn.classList.remove("copiado"); }, 2200);
      };
      if (navigator.clipboard) navigator.clipboard.writeText(p.chave).then(feito, feito);
      else { var t = document.createElement("textarea"); t.value = p.chave; document.body.appendChild(t); t.select(); document.execCommand("copy"); t.remove(); feito(); }
    });
    var w = $("#link-whats-contribua");
    if (w && whatsLink()) w.href = whatsLink() + "?text=" + encodeURIComponent("Olá! Fiz uma contribuição para a " + S.sigla + " e gostaria de enviar o comprovante.");
  }

  /* ---------- Números ---------- */
  function preencherNumeros() {
    var cidades = {};
    IGREJAS.forEach(function (g) { cidades[g.cidade] = 1; });
    var h = hoje();
    var valores = {
      "num-igrejas": IGREJAS.length,
      "num-cidades": Object.keys(cidades).length,
      "num-eventos": EVENTOS.filter(function (e) { return data(e.data) >= h; }).length,
      "num-projetos": MISSOES.length
    };
    Object.keys(valores).forEach(function (id) { var el = document.getElementById(id); if (el) el.textContent = valores[id]; });
  }

  /* ---------- Inicialização ---------- */
  montarTopo();
  montarRodape();
  document.querySelectorAll("[data-noticias]").forEach(renderNoticias);
  document.querySelectorAll("[data-eventos]").forEach(renderEventos);
  var el;
  if ((el = $("#igrejas"))) renderIgrejas(el);
  if ((el = $("#missoes"))) renderMissoes(el);
  if ((el = $("#noticia"))) renderNoticiaCompleta(el);
  preencherContribua();
  preencherNumeros();
  document.querySelectorAll("[data-site]").forEach(function (e) {
    var v = S[e.getAttribute("data-site")]; if (v) e.textContent = v;
  });
})();
