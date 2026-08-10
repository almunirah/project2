# Library Intelligence

Library Management & Analytics Platform built with Next.js App Router, TypeScript, Tailwind CSS, Recharts and a Supabase-ready architecture.

## Milestone 1
Executive Dashboard + Application Shell with responsive/collapsible navigation, global filters, search command palette, theme switching, KPI cards, circulation trend, collection by subject, collection health, visitor activity, action required, smart insights and recent activity.

## Development
```bash
npm install
npm run dev
npm run build
npm run lint
```

## Environment
Copy `.env.example` to `.env.local`. Demo mode runs without Supabase configuration.

## Architecture
- `app/` Next.js routes
- `components/` reusable UI and dashboard components
- `lib/` mock data and helpers
- `services/koha/` future KOHA integration boundary

## Deployment
Import this repository into Vercel. Supabase and KOHA environment variables are optional for demo mode and should be configured when integrations are enabled.
