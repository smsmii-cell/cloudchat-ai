# CloudChat
# CloudChat AI (2002 Social Simulator Scaffold)

CloudChat is an AI-powered conversational interface
designed to simulate human-like online interaction.
This repository now contains a full-stack starter architecture for a 2002-themed social simulator.

This project was created for research and educational purposes.
## Stack

⚠️ Warning:
Some conversations may feel personal.
Some responses may persist after inactivity.
- Frontend: React + Vite (`/client`)
- Backend: Node.js + Express (`/server`)
- Session handling: `express-session`
- Storage: In-memory JSON-like state object (`server/models/state.js`)

Last updated:
Day 10 — 12:00 AM
## Run

```bash
npm install
npm run dev:server
npm run dev:client
```

Backend runs on `http://localhost:3000` and exposes:

- `GET /api/health`
- `GET /api/timeline`
- `GET /api/ai/users`
- `GET /api/sites`

## Implemented as Stubs

- Authentication system module
- VendZ feed system module
- AI simulation engine module
- Chat system module
- Timeline engine module
- World event bus module
- Multi-site browser router module

Each module exports clear placeholder functions and is wired through `server/server.js`.
