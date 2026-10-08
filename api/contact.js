/**
 * Relais du formulaire de contact vers Brevo (API e-mail transactionnel).
 *
 * Fonction serverless — à déployer avec le site (Vercel détecte `api/`
 * automatiquement). La clé API reste ici : elle ne doit jamais partir dans le
 * bundle Angular, qui est public.
 *
 * Variables d'environnement attendues :
 *   BREVO_API_KEY      clé API Brevo (Paramètres > SMTP & API > Clés API)
 *   BREVO_SENDER_EMAIL expéditeur vérifié dans Brevo (ex. contact@mondomaine.com)
 *   CONTACT_TO_EMAIL   destinataire des messages (votre boîte)
 *   BREVO_SENDER_NAME  optionnel, nom affiché de l'expéditeur
 */

const BREVO_ENDPOINT = 'https://api.brevo.com/v3/smtp/email';

const LIMITS = { name: 120, email: 160, body: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const escapeHtml = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

module.exports = async function handler(request, response) {
  if (request.method !== 'POST') {
    response.setHeader('Allow', 'POST');
    return response.status(405).json({ error: 'method_not_allowed' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const recipient = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !sender || !recipient) {
    console.error('Brevo: BREVO_API_KEY, BREVO_SENDER_EMAIL ou CONTACT_TO_EMAIL manquante.');
    return response.status(500).json({ error: 'not_configured' });
  }

  const payload = typeof request.body === 'string' ? safeParse(request.body) : request.body;
  const name = String(payload?.name ?? '').trim();
  const email = String(payload?.email ?? '').trim();
  const body = String(payload?.body ?? '').trim();

  const valid =
    name.length > 1 &&
    name.length <= LIMITS.name &&
    email.length <= LIMITS.email &&
    EMAIL_PATTERN.test(email) &&
    body.length > 4 &&
    body.length <= LIMITS.body;

  if (!valid) {
    return response.status(400).json({ error: 'invalid_payload' });
  }

  try {
    const brevoResponse = await fetch(BREVO_ENDPOINT, {
      method: 'POST',
      headers: {
        'api-key': apiKey,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        sender: { email: sender, name: process.env.BREVO_SENDER_NAME || 'Portfolio' },
        to: [{ email: recipient }],
        // Répondre au message renvoie directement vers le visiteur.
        replyTo: { email, name },
        subject: `Portfolio — message de ${name}`,
        textContent: `${name} <${email}>\n\n${body}`,
        htmlContent:
          `<p><strong>${escapeHtml(name)}</strong> &lt;${escapeHtml(email)}&gt;</p>` +
          `<p style="white-space:pre-wrap">${escapeHtml(body)}</p>`,
      }),
    });

    if (!brevoResponse.ok) {
      console.error('Brevo a refusé le message:', brevoResponse.status, await brevoResponse.text());
      return response.status(502).json({ error: 'send_failed' });
    }

    return response.status(204).end();
  } catch (error) {
    console.error('Brevo injoignable:', error);
    return response.status(502).json({ error: 'send_failed' });
  }
};

function safeParse(raw) {
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}
