# Pendências de conteúdo

Itens que precisam de revisão humana antes (ou depois) de publicar, porque não havia certeza absoluta no site original ou porque exigem uma decisão do dono do site.

## Status do domínio (bjjonboard.com.br) — concluído em 16/09/2026
- Domínio registrado no registro.br, usando os servidores DNS deles (DNS Simples: a.sec.dns.br / b.sec.dns.br).
- Zona DNS configurada: registros A da raiz (`bjjonboard.com.br`) apontando para os 4 IPs do GitHub Pages (185.199.108/109/110/111.153) e CNAME de `www.bjjonboard.com.br` para `tecbmtecnologia-dot.github.io.`
- GitHub Pages (repo `tecbmtecnologia-dot/site-bjjonboard`): custom domain configurado, "DNS check successful", certificado SSL emitido e "Enforce HTTPS" habilitado.
- Testado e funcionando: `https://bjjonboard.com.br` e `https://www.bjjonboard.com.br` (este último redireciona para o domínio raiz), ambos sem erro de certificado.
- Deploy verificado: workflow "pages build and deployment" concluído com sucesso após o push.

## Domínio bjjonboard.com (o .com, sem .br) e conta HostGator
- Esse `.com` é um domínio separado, registrado/gerenciado dentro da conta HostGator (diferente do `.com.br`, que está no registro.br). Antes usava os nameservers e a hospedagem antiga do HostGator.
- A conta HostGator foi mantida ativa (não foi cancelada) — decisão do dono do site.
- Não há nenhuma conta de e-mail criada em nenhum dos domínios na HostGator (`@bjjonboard.com.br`, `@bjjonboard.com`, `@bjjonboard.bjjonboard.com.br`), então não havia risco de quebrar e-mail.
- Configurado um redirecionamento permanente (301) no cPanel do HostGator: `bjjonboard.com` (com ou sem `www`) → `https://bjjonboard.com.br`. O DNS e a zona antiga do `.com` (registros de cPanel/e-mail, mesmo sem uso) não foram alterados, só foi adicionado o redirecionamento.
- Testado e funcionando: `bjjonboard.com` e `www.bjjonboard.com` redirecionam corretamente para o site no GitHub Pages.
- Certificado HTTPS do `bjjonboard.com` conferido (via crt.sh): emitido pela Let's Encrypt, cobre `bjjonboard.com` (mesmo certificado do cPanel que cobre `bjjonboard.com.br`), válido de 23/07/2026 a 21/10/2026. `https://bjjonboard.com` carrega sem erro de certificado antes de redirecionar.

## Confirmado com certeza (não precisa mexer)
- WhatsApp "Compras / Garanta sua cabine": (11) 91903-0209 — https://wa.me/5511919030209
- WhatsApp "Patrocinadores": (11) 99145-9652 — https://wa.me/5511991459652
- Instagram: @bjjonboard.oficial
- Vídeo 1 (seção "A maior experiência..."): YouTube oH123bCPpmU
- Vídeo 2 (seção "Conheça o MSC Sinfonia"): YouTube 9w5R3m4u7e4
- Link "Saiba mais sobre o MSC Sinfonia": msccruzeiros.com.br
- Link de cadastro Fight Show (Google Forms) e link de Web Check-In (MSC) — copiados do site original
- As 17 perguntas e respostas do FAQ foram copiadas integralmente do site (inclusive abrindo cada item oculto)
- As 6 cabines e preços "12x" foram copiados exatamente como no site
- O ribbon vermelho "ESGOTADAS" aparecia sobre "Cabine Interna Quádrupla" e "Cabine Externa Janela Quádrupla" — reproduzido

## Precisa de atenção
1. **Imagem de fundo do herói (`hero-bg.jpg`)**: era um PNG de 2,6 MB no site original; eu comprimi para ~60 KB em JPG para o site carregar rápido. Se quiser mais qualidade, me avise.
2. **"Powered by Joinchat"**: o site original usava o plugin Joinchat do WordPress para o botão flutuante do WhatsApp. Recriei como um botão flutuante simples de WhatsApp (mesmo número de "Compras"), sem o comportamento avançado do plugin (mensagens automáticas, múltiplos atendentes etc). Se vocês usavam esse recurso, me diga o que precisa.
3. **Formulário de reserva "assim que for lançado"**: o FAQ menciona um formulário do site que "será lançado" — não existia ainda no site original, então não foi recriado.
4. **Menu de navegação**: o site original não tinha um menu de navegação visível no topo (não encontrei `<nav>`); criei um menu simples (Início / Experiências / Primeira Edição / Dúvidas / Contato) baseado nos "Links Rápidos" do rodapé, para facilitar a navegação. Pode remover se não quiser.
5. **Item 8 do FAQ** menciona "conforme programação dos Mestres e do Flávio" — mantive o texto exatamente como estava no site original; talvez seja "Flávio" um nome próprio que vocês queiram revisar/remover antes de publicar.
6. **Item 6 do FAQ** tinha uma nota interna do próprio site ("Sugestão: no site, dividir em subtópicos...") — mantive o texto como estava, mas pode ser algo que vocês esqueceram de tirar do WordPress. Vale revisar.

## Não copiado (não parecia existir no site original)
- Nenhum formulário de contato tradicional (nome/e-mail/mensagem) — todo contato é via WhatsApp/Instagram.
