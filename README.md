# Site da ABCPB — Associação Batista do Cariri Paraibano

Site estático (HTML, CSS e JavaScript puros), pronto para o **GitHub Pages**. Não precisa de instalação nem de servidor.

## Ver o site no computador

Dê dois cliques em `index.html`. O site abre no navegador.

## Estrutura

```
index.html          Página inicial
quem-somos.html     História, missão, visão, valores e diretoria
igrejas.html        Lista de igrejas com busca e filtro por cidade
noticias.html       Todas as notícias (com filtro por categoria)
noticia.html        Página de uma notícia (aberta pelo link do cartão)
agenda.html         Próximos eventos e eventos realizados
missoes.html        Projetos missionários
contribua.html      PIX e dados bancários

dados/              <- AQUI você edita o conteúdo
  config.js         Contatos, redes sociais, PIX e banco
  noticias.js       Notícias
  eventos.js        Agenda
  igrejas.js        Igrejas associadas
  missoes.js        Projetos missionários

assets/css/style.css   Visual (cores no topo do arquivo)
assets/js/main.js      Funcionamento (normalmente não precisa mexer)
assets/img/            Logo e fotos
```

## Como atualizar o conteúdo

Abra o arquivo correspondente em `dados/`. Cada item fica entre `{ }`. Para adicionar um item, copie um bloco, cole e altere os textos.

**Cuidados:**
- Os textos ficam entre aspas: `"assim"`.
- Separe um bloco do outro com vírgula: `},` e depois `{`.
- Datas sempre no formato `"ANO-MÊS-DIA"`, ex.: `"2026-12-07"`.
- Se a página ficar em branco depois de uma edição, provavelmente faltou uma vírgula ou uma aspa.

**Fotos de notícias:** coloque a imagem em `assets/img/noticias/` e escreva o caminho no campo `imagem`, ex.: `"assets/img/noticias/congresso.jpg"`. Use fotos na horizontal, de até ~300 KB.

**Textos marcados como PROVISÓRIO** (em `config.js`, `quem-somos.html` e nos dados de exemplo) devem ser trocados pelas informações reais.

## Publicar no GitHub Pages (grátis)

1. Crie uma conta em https://github.com, se ainda não tiver.
2. Crie um repositório novo (botão **New**):
   - Para o endereço `seuusuario.github.io`: o repositório deve se chamar **exatamente** `seuusuario.github.io`.
   - Para o endereço `seuusuario.github.io/abcpb`: dê ao repositório o nome `abcpb`.
   - Marque como **Public**.
3. No repositório, clique em **Add file > Upload files** e arraste **todo o conteúdo** desta pasta (os arquivos e as pastas `assets` e `dados`). Clique em **Commit changes**.
4. Vá em **Settings > Pages**. Em *Source*, escolha **Deploy from a branch**, branch **main**, pasta **/ (root)**, e salve.
5. Em 1 ou 2 minutos o site estará no ar no endereço exibido nessa mesma tela.

Depois disso, para atualizar o site basta editar os arquivos direto no GitHub (ícone de lápis) e salvar. O site se atualiza sozinho em cerca de 1 minuto.

O site usa somente caminhos relativos, então funciona nos dois tipos de endereço sem nenhum ajuste. Se no futuro vocês tiverem um domínio próprio (ex.: `abcpb.org.br`), ele pode ser configurado em **Settings > Pages > Custom domain**.
