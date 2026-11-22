/* =============================================================
   NOTÍCIAS
   Para adicionar uma notícia, copie um bloco { ... }, cole no
   TOPO da lista e altere. Atenção às vírgulas entre os blocos.

   id:        identificador único, sem espaços nem acentos
   data:      formato ANO-MÊS-DIA (ex.: "2026-11-05")
   imagem:    caminho da foto (ex.: "assets/img/noticias/foto.jpg")
              ou "" para usar a imagem padrão
   texto:     cada parágrafo é um item da lista, entre aspas
   galeria:   (opcional) lista de fotos exibidas na página da notícia
   link:      (opcional) endereço da publicação original, ex.: Instagram
   ============================================================= */
window.NOTICIAS = [
  {
    id: "pib-monteiro-40-anos",
    titulo: "PIB Monteiro celebra 40 anos de história",
    data: "2026-10-13",
    categoria: "Igrejas",
    imagem: "assets/img/noticias/pib-monteiro-40-anos-culto.jpg",
    galeria: [
      "assets/img/noticias/pib-monteiro-40-anos-culto.jpg",
      "assets/img/noticias/pib-monteiro-40-anos-equipe.jpg"
    ],
    resumo: "A Primeira Igreja Batista em Monteiro celebrou seus 40 anos com dias de culto e gratidão a Deus.",
    texto: [
      "A Primeira Igreja Batista em Monteiro celebrou seus 40 anos de organização. Foram dias abençoados de comemoração, marcados pela gratidão a Deus por tudo o que Ele realizou ao longo dessas quatro décadas.",
      "Com o lema “Juntos na Missão”, estampado nas camisas comemorativas, membros, voluntários e visitantes se reuniram em cultos de louvor e celebração.",
      "A Associação Batista do Cariri Paraibano se alegra com a PIB Monteiro e agradece a Deus pelo testemunho da igreja no Cariri paraibano."
    ],
    link: "https://www.instagram.com/p/Decbnu_HflT/"
  }
];
