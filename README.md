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

## Sprites das classes

As sprites ficam em `public/sprites/` e são referenciadas como `/sprites/<nome>.png`.

Se a imagem não existir, o app exibe automaticamente um placeholder colorido com a inicial da classe.

### Nomes de arquivo esperados (19 classes)

| Classe       | Arquivo                   |
|--------------|---------------------------|
| Rogue        | `public/sprites/rogue.png` |
| Archer       | `public/sprites/archer.png` |
| Wizard       | `public/sprites/wizard.png` |
| Priest       | `public/sprites/priest.png` |
| Warrior      | `public/sprites/warrior.png` |
| Knight       | `public/sprites/knight.png` |
| Paladin      | `public/sprites/paladin.png` |
| Assassin     | `public/sprites/assassin.png` |
| Necromancer  | `public/sprites/necromancer.png` |
| Huntress     | `public/sprites/huntress.png` |
| Mystic       | `public/sprites/mystic.png` |
| Trickster    | `public/sprites/trickster.png` |
| Sorcerer     | `public/sprites/sorcerer.png` |
| Ninja        | `public/sprites/ninja.png` |
| Samurai      | `public/sprites/samurai.png` |
| Bard         | `public/sprites/bard.png` |
| Summoner     | `public/sprites/summoner.png` |
| Kensei       | `public/sprites/kensei.png` |
| Druid        | `public/sprites/druid.png` |

### Onde pegar as sprites

As sprites do RotMG estão disponíveis na [wiki do RealmEye](https://www.realmeye.com/).
Salve cada imagem com o nome exato da tabela acima (tudo minúsculo, `.png`) em `public/sprites/`.

> O Vite copia tudo de `public/` para a raiz do `dist/`, então os caminhos funcionam tanto local quanto no Vercel sem nenhum ajuste.

---

## Funcionalidades

- **Rolar classe** — sorteia uma classe da pool ativa com animação de roleta que desacelera até parar.
- **Sortear desafio** — sorteia um dos 11 desafios com a mesma animação.
- **Rolar tudo** — roda os dois ao mesmo tempo.
- **Pool de classes** — chips clicáveis para ativar/desativar classes do sorteio. Botões "marcar todas" / "desmarcar todas".
- **Histórico** — últimas 5 rolagens com horário.
- **Persistência** — pool desativada e histórico salvos no `localStorage`.
