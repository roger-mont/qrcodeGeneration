# QR Code de Avaliação — Samsung Ocean Manaus

Tela de projeção para o fim das aulas do Samsung Ocean Manaus: mostra, em tamanho grande, o QR code do formulário de avaliação da aula do dia. A equipe cadastra o link do formulário com o período de validade, e a tela escolhe sozinha o QR code vigente.

**Demo:** https://qrcode-generation-oceansamsung.vercel.app

## Como funciona

- **`/`** — busca no Supabase os formulários cadastrados, filtra o que está válido hoje (`start-date` ≤ hoje ≤ `expiration-date`) e gera o QR code no navegador com a biblioteca `qrcode`, nas cores da marca. Sem formulário vigente, avisa com um toast.
- **`/post`** — formulário para cadastrar um novo link, com seletor de período (padrão: hoje até daqui a um mês).

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript
- Tailwind CSS · shadcn/ui (Radix) · date-fns · react-day-picker
- Supabase (REST) via Axios
- Deploy na Vercel

## Rodar localmente

```bash
npm install
npm run dev
```

Abra http://localhost:3000.

## Estrutura

```
src/
├── app/
│   ├── page.tsx          # tela de projeção com o QR code vigente
│   └── post/page.tsx     # cadastro de link + período
├── service/              # cliente Supabase e regra do QR code vigente
├── utils/qrcodeGenerator.ts
└── components/ui/        # componentes shadcn/ui
```
