# Arjuna Productivity Assistant

A focused personal productivity workspace for tasks, notes, focus sessions, meeting planning, and AI-guided next steps.

The project is designed around a simple idea: productivity should make progress visible without making the user feel managed by a complicated system.

## Included in this MVP

- Responsive dashboard for a personal workspace
- Task capture with priority, due context, completion, and filters
- Local-first notes with browser persistence
- 25-minute focus timer with session tracking
- Meeting planner with desired outcomes
- Arjuna Copilot drawer with a safe local fallback
- Optional Gemini API route for deployed AI responses
- Clean dark sidebar and calm light workspace UI
- Vercel-ready serverless function

## Run locally

This is a dependency-free browser MVP. Open `index.html` directly for the local fallback experience, or serve the folder with any static server.

```bash
npx serve .
```

Then open the URL shown by the server.

## Enable Gemini responses

Set `GEMINI_API_KEY` in your Vercel project environment variables. The endpoint is located at `api/chat.js` and uses Gemini only when the key is present. Without a key, the interface continues to work with built-in productivity guidance.

For local testing of the serverless function, use the Vercel CLI or another compatible serverless runtime.

## Deploy to Vercel

1. Import this repository into Vercel.
2. Keep the project root at the repository root.
3. Add `GEMINI_API_KEY` under Project Settings → Environment Variables.
4. Deploy. No build command is required for the static frontend.

## Product direction

The next safe extensions are explicit integrations for Google Calendar, Gmail, and WhatsApp Business—not silent access to private messages. External actions such as sending messages, accepting meetings, or deleting content should always require confirmation.

## Structure

```text
.
├── api/chat.js       # Optional Gemini serverless endpoint
├── app.js            # Local state, UI behavior, timer, and copilot client
├── index.html        # Dashboard and workspace views
├── styles.css        # Responsive visual system
├── .env.example      # Deployment configuration reference
├── vercel.json       # Vercel routing configuration
└── package.json      # Project metadata and scripts
```

## License

No license has been selected yet. Add one before accepting outside contributions or granting reuse rights.
