export async function handler(event) {
  try {
    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, body: JSON.stringify({ error: 'Method not allowed' }) };
    }
    const { username, password } = JSON.parse(event.body || '{}');
    if (!username || !password) {
      return { statusCode: 400, body: JSON.stringify({ error: 'Missing username or password' }) };
    }

    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw0DYAFtQwN_LcWydmaOF40IdjLFznmqQPA2frVT6_HEin-3NJBenWFtagEfAh0v45uPQ/exec';
    const url = new URL(APPS_SCRIPT_URL);
    url.searchParams.set('username', username);
    url.searchParams.set('password', password);

    const res = await fetch(url.toString(), { method: 'GET' });
    const text = await res.text();

    let data;
    try { data = JSON.parse(text); }
    catch { 
      return { statusCode: 502, body: JSON.stringify({ error: 'Bad response from Apps Script', raw: text }) };
    }

    return { statusCode: 200, headers: { 'Content-Type':'application/json' }, body: JSON.stringify(data) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error:'Server error', details:String(err) }) };
  }
}
