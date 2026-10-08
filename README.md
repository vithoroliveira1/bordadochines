# Bordado Chinês — quiz

Recriação do fluxo público de https://tecnicamilenardebordado.lovable.app/?angulo=neutro, inspecionado em 6 de outubro de 2026. Textos, imagens, opções, ordem das etapas, carrosséis, preços e destino de compra seguem a referência. A paleta foi alterada para roxo, branco e lavanda, com detalhes dourados. O nome da apresentadora foi atualizado para Angela Susuki.

## Executar

Requisitos: Node.js 22.12 ou superior e npm. Validado neste ambiente com Node.js 24 e npm 11.

```sh
npm ci
npm run dev
```

No ambiente em nuvem, use um cache gravável caso o diretório padrão do npm esteja protegido:

```sh
npm ci --cache /workspace/.npm-cache
```

```sh
npm run build       # Gera o site estático em dist/
npm run preview     # Serve o build para conferência
npm test            # Testes do build com Chromium
```

Execute `npm run build` antes de `npm test`. Os testes usam `/usr/bin/chromium` quando disponível. Fora deste ambiente, instale o navegador com `npx playwright install chromium` ou defina `PLAYWRIGHT_CHROMIUM_EXECUTABLE` com o caminho do Chromium.

## Páginas

| Rota | Conteúdo |
| --- | --- |
| `/` | Página inicial completa, depoimentos e chamadas para o quiz |
| `/quiz` | Seis perguntas e a etapa sobre experiência com artesanato |
| `/quiz/materiais` | Kit inicial e explicação dos materiais |
| `/quiz/plano` | Oferta, exemplos, bônus, depoimentos, garantia e checkout |
| `/obrigado` | Tela de agradecimento da referência |

As respostas e a etapa atual são guardadas na sessão do navegador. É possível voltar, alterar respostas e retomar após atualizar a página. Os botões da página inicial reiniciam o quiz, como no original.

## Alterar cores e conteúdo

- `src/styles/palette.css`: paleta centralizada; roxo `#7138b5`, branco `#ffffff` e lavanda `#f5f0fc`, com texto ameixa `#30213f`.
- `src/data/questions.js`: todas as perguntas e opções.
- `src/pages/`: componentes React editáveis de cada página.
- `src/styles/reference.css`: estilos de layout da referência, preservados para manter as proporções.
- `public/images/`: imagens locais da referência e as artes em tons roxos enviadas pelo usuário: `angela-susuki.png` e `guia-ilustrado.png`, exibidas na página do plano.
- `src/styles/fonts.css`: fontes distribuídas localmente via pacotes Fontsource.

A interface pública foi reconstruída a partir do HTML, CSS e módulos servidos pelo site de referência, com dependências de React, roteamento e ícones instaladas pelo npm. Não há iframe, proxy do site original nem necessidade de acessá-lo durante a execução do quiz.

## Checkout e integrações

O destino padrão dos botões de compra é o checkout Wiapy:
`https://pay.wiapy.com/5a9Wt7I5wjcT`.

Para trocar o destino, copie `.env.example` para `.env.local`, defina `VITE_CHECKOUT_URL` e refaça o build. Parâmetros de campanha e `angulo` são preservados no checkout.

Os testes interceptam o redirecionamento: nenhuma compra ou cobrança é realizada. O checkout externo, a entrega do produto e a confirmação real de pagamento são serviços externos e não foram recriados. `/obrigado` é apenas a tela visual, não um verificador de pagamentos.

O script UTMify fornecido pelo usuário está instalado em `index.html`, carregado de `https://cdn.utmify.com.br/scripts/utms/latest.js`, com `async`, `defer`, `data-utmify-prevent-xcod-sck` e `data-utmify-prevent-subids`. Essa é a forma legível equivalente ao carregador codificado enviado. A instalação vale para todas as páginas. Os testes simulam a resposta desse serviço externo e verificam a instalação e o repasse dos parâmetros ao checkout; não confirmam o registro de conversões no painel UTMify.

Credenciais, banco de dados, painel administrativo e contas de Meta Pixel/Clarity do site de referência não foram conectados. O armazenamento próprio de respostas e eventos continua na sessão local; o script UTMify possui seu próprio comportamento de rastreamento. O projeto não depende de banco de dados ou chaves de API para executar o fluxo público.

## Publicação

### Netlify

O arquivo `netlify.toml` configura Node.js 24, o comando `npm run build`, a pasta de publicação `dist` e o redirecionamento das rotas do React.

Para publicação manual, descompacte `bordadochines-site.zip` e envie a pasta que contém `index.html` para https://app.netlify.com/drop. O pacote já inclui imagens, fontes e `_redirects`; não precisa executar um build na hospedagem.

Para integração Git, o código precisa estar no seu repositório remoto. Importe o repositório no Netlify usando a raiz do projeto como diretório base. A configuração de build será lida de `netlify.toml`.

Para uma publicação automatizada pela API, o ambiente precisa de acesso a `api.netlify.com` e de `NETLIFY_AUTH_TOKEN` configurado como segredo nas configurações seguras do ambiente. Nunca coloque esse token no código, no Git ou no chat.

Publique o conteúdo de `dist/` em uma hospedagem estática. As rotas internas devem retornar `index.html`: há configuração para Vercel em `vercel.json` e para hospedagens compatíveis com `_redirects` em `public/_redirects`.

A configuração do ambiente de desenvolvimento e a publicação do site são ações separadas. Nenhum deploy ou envio ao GitHub foi executado automaticamente.

## Validação

Os testes comparam o texto renderizado com o conteúdo capturado da referência, percorrem todas as opções em quatro combinações, verificam retorno, persistência, reinício, carrossel, contador, imagens, rotas e destino do checkout em celular e desktop. O registro de referência está em `tests/fixtures/reference-flow.json`.
