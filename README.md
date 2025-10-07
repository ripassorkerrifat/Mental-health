# React + Vite

 Frontend for the Mental Health app built with React + Vite.

## Environment variables
Copy `.env.example` to `.env` and fill values.

- `VITE_BASE_URL`: Backend API base URL (no trailing slash), e.g. `http://localhost:4000/api/v1`
- `VITE_OPEN_AI_KEY`: Your OpenAI API key (only if the Chat feature uses client-side OpenAI)

## Setup
```bash
cd Mental-health
cp .env.example .env
# edit .env and set VITE_BASE_URL to your backend

# install deps (npm recommended here)
npm install

# run on port 3000 to match backend CORS
npm run dev -- --port 3000
```
The app will be available at `http://localhost:3000`.
