const form = document.getElementById('loginForm');
const msg  = document.getElementById('msg');
const btn  = document.getElementById('loginBtn');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '';
  msg.className = 'msg';
  btn.disabled = true;
  btn.textContent = 'Logging in...';

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    const res = await fetch('/.netlify/functions/login', {
      method: 'POST',
      headers: { 'Content-Type':'application/json' },
      body: JSON.stringify({ username, password })
    });

    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      msg.textContent = data.error || 'Server error. Try again.';
      msg.classList.add('error'); return;
    }

    if (data.success && data.folderLink) {
      msg.textContent = 'Success. Redirecting...';
      msg.classList.add('ok');
      window.location.href = data.folderLink;
    } else {
      const reason = data.reason ? ` (${data.reason})` : '';
      msg.textContent = 'Invalid credentials' + reason;
      msg.classList.add('error');
    }
  } catch (err) {
    msg.textContent = 'Network error. Check connection and try again.';
    msg.classList.add('error');
  } finally {
    btn.disabled = false;
    btn.textContent = 'Login';
  }
});
