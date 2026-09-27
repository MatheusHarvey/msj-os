# MSJ Ordens de Serviço: app para celular

## Como funciona

O celular só baixa o app de um endereço na internet uma vez. Depois de instalado, ele abre pelo ícone na tela inicial e funciona sem internet. As OS, as fotos e as assinaturas ficam guardadas só no celular onde o app está instalado.

Para esse primeiro download, a pasta do app precisa estar publicada em algum endereço **https**. O GitHub Pages faz isso de graça.

## 1. Publicar no GitHub Pages (uma vez, uns 5 minutos)

1. Entre em github.com e crie um repositório público, por exemplo `msj-os`.
2. Clique em **Add file > Upload files** e arraste **todo o conteúdo** desta pasta (index.html, app.js, app.css, sw.js, manifest.webmanifest e as pastas fonts, icons e vendor). Depois clique em **Commit changes**.
3. Vá em **Settings > Pages**. Em *Branch*, escolha `main` e `/ (root)` e clique em **Save**.
4. Em 1 ou 2 minutos, o endereço aparece no topo da página, por exemplo `https://seu-usuario.github.io/msj-os/`.

O endereço é público, mas lá fica só o app vazio. Os dados de cada pessoa nunca saem do celular dela.

## 2. Instalar no celular

**Android (Chrome):** abra o endereço, toque em **Instalar** na faixa que aparece no app, ou use o menu ⋮ > **Instalar app** / **Adicionar à tela inicial**.

**iPhone (Safari):** abra o endereço, toque em Compartilhar (quadrado com seta) > **Adicionar à Tela de Início**.

## Uso no dia a dia

- **PDF:** depois de gerar o relatório ou o orçamento, use **Enviar** para abrir o WhatsApp, o e-mail etc., ou **Salvar no celular** para guardar na pasta Downloads.
- **Backup:** em Ajustes > **Gerar backup** sai um arquivo com todas as OS, fotos e ajustes. Guarde no Google Drive ou mande para si mesmo. O app avisa se ficar mais de 30 dias sem backup.
- **Dois celulares:** cada aparelho tem o seu próprio histórico. Para copiar as OS de um para o outro, gere o backup em um e use **Restaurar backup** no outro.
- **Numeração:** em Ajustes > *Próximo nº de OS*, dá para continuar a numeração do bloco de papel.

## Atualizar o app no futuro

Suba os arquivos novos no mesmo repositório e aumente o número em `sw.js` (`msj-os-v1` → `msj-os-v2`). Os celulares pegam a versão nova sozinhos na próxima vez que abrirem o app com internet, e as OS continuam lá.

## Cuidado

Se o usuário **limpar os dados do navegador ou desinstalar o app**, as OS daquele celular são apagadas. Por isso o backup é importante.
