# RotMG Randomizer

Randomizer de classes e desafios para o Realm of the Mad God — ideal pra decidir o que jogar na próxima season.

---

## Como rodar local

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Como buildar

```bash
npm run build
```

O output vai para `dist/`. Para testar o build localmente:

```bash
npm run preview
```

---

## Deploy no Vercel

1. Suba o repositório para o GitHub (ou GitLab/Bitbucket).
2. Acesse [vercel.com](https://vercel.com) → **Add New Project** → importe o repo.
3. Na tela de configuração, o Vercel detecta Vite automaticamente:
   - **Framework Preset:** Vite
   - **Build Command:** `vite build`
   - **Output Directory:** `dist`
4. Clique em **Deploy**. Pronto.

> Não precisa de variáveis de ambiente nem configs extras.

---

## Funcionalidades

- **Rolar classe** — sorteia uma classe da pool ativa com animação de roleta que desacelera até parar.
- **Sortear desafio** — sorteia um dos 11 desafios com a mesma animação.
- **Rolar tudo** — roda os dois ao mesmo tempo.
- **Pool de classes** — chips clicáveis para ativar/desativar classes do sorteio. Botões "marcar todas" / "desmarcar todas".
- **Histórico** — últimas 5 rolagens com horário.
- **Persistência** — pool desativada e histórico salvos no `localStorage`.
