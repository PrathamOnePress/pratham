export function logInfo(context, message, meta = {}) {
  try {
    const out = { ts: new Date().toISOString(), level: 'info', context, message, meta };
    console.log(JSON.stringify(out));
  } catch (e) { console.log(context, message); }
}

export function logError(context, message, meta = {}) {
  try {
    const out = { ts: new Date().toISOString(), level: 'error', context, message, meta };
    console.error(JSON.stringify(out));
  } catch (e) { console.error(context, message); }
}
