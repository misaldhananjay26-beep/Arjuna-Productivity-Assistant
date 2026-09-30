export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
    const { message, context } = req.body || {};
    if (!message) return res.status(400).json({ error: 'Message is required' });
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(200).json({ reply: null, mode: 'fallback' });

  const system = `You are Arjuna, a calm personal productivity copilot. Help the user turn vague work into one clear next step. Be concise, practical, and encouraging. Avoid pretending to access external calendars, email, or messages. Current workspace context: ${JSON.stringify(context || {})}`;
    try {
          const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey)}`, {
                  method: 'POST', headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ systemInstruction: { parts: [{ text: system }] }, contents: [{ role: 'user', parts: [{ text: message }] }] })
          });
          if (!response.ok) return res.status(200).json({ reply: null, mode: 'fallback' });
          const data = await response.json();
          const reply = data?.candidates?.[0]?.content?.parts?.map(part => part.text || '').join('')?.trim();
          return res.status(200).json({ reply: reply || null, mode: 'gemini' });
    } catch (error) {
          return res.status(200).json({ reply: null, mode: 'fallback' });
    }
}
