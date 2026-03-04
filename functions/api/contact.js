function jsonResponse(payload, status = 200) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  })
}

function validate(payload) {
  if (!payload || typeof payload !== 'object') {
    return 'Invalid JSON payload'
  }

  const required = ['name', 'email', 'message']

  for (const field of required) {
    if (!String(payload[field] || '').trim()) {
      return `Missing required field: ${field}`
    }
  }

  return null
}

function getProviderConfig(env) {
  return {
    provider: env?.EMAIL_PROVIDER || '',
    apiKey: env?.EMAIL_API_KEY || '',
    from: env?.EMAIL_FROM || '',
    to: env?.EMAIL_TO || '',
  }
}

export async function onRequestPost(context) {
  const { request, env } = context

  let payload
  try {
    payload = await request.json()
  } catch {
    return jsonResponse({ error: 'Invalid JSON payload' }, 400)
  }

  const validationError = validate(payload)
  if (validationError) {
    return jsonResponse({ error: validationError }, 400)
  }

  const provider = getProviderConfig(env)
  const isConfigured =
    provider.provider && provider.apiKey && provider.from && provider.to

  if (!isConfigured) {
    return jsonResponse({ error: 'Email provider not configured' }, 501)
  }

  return jsonResponse({ ok: true }, 202)
}
