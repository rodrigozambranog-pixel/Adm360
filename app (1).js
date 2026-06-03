:root { --bg:#f4f6f8; --panel:#ffffff; --text:#17202a; --muted:#687385; --line:#e5e9ef; --brand:#1f4f8f; --danger:#b42318; }
* { box-sizing: border-box; }
body { margin:0; font-family: Inter, Arial, sans-serif; background:var(--bg); color:var(--text); }
.hidden { display:none !important; }
.login-screen { min-height:100vh; display:grid; place-items:center; padding:24px; background:linear-gradient(135deg,#102a49,#1f4f8f); }
.login-card { width:100%; max-width:420px; background:white; padding:32px; border-radius:18px; box-shadow:0 20px 50px rgba(0,0,0,.25); display:flex; flex-direction:column; gap:12px; }
h1,h2,p { margin:0; }
.login-card h1 { font-size:38px; }
.login-card p { color:var(--muted); margin-bottom:12px; }
input, select, button { width:100%; padding:12px; border-radius:10px; border:1px solid var(--line); font-size:14px; }
button { cursor:pointer; background:var(--brand); color:white; border:none; font-weight:700; }
button.secondary { background:#edf2f7; color:var(--text); width:auto; }
main { display:grid; grid-template-columns:260px 1fr; min-height:100vh; }
aside { background:#111827; color:white; padding:24px; display:flex; flex-direction:column; gap:10px; }
aside h2 { margin-bottom:16px; }
aside button { text-align:left; background:transparent; color:#d7dee9; border:1px solid transparent; }
aside button.active, aside button:hover { background:#243244; color:white; }
.content { padding:28px; }
header { display:flex; justify-content:space-between; align-items:center; margin-bottom:24px; gap:16px; }
#subtitle { color:var(--muted); margin-top:6px; }
.cards { display:grid; grid-template-columns:repeat(auto-fit,minmax(180px,1fr)); gap:16px; margin-bottom:22px; }
.card { background:var(--panel); border:1px solid var(--line); border-radius:16px; padding:20px; box-shadow:0 5px 16px rgba(16,24,40,.04); }
.card .num { font-size:34px; font-weight:800; margin-top:10px; }
.grid { display:grid; grid-template-columns:360px 1fr; gap:18px; align-items:start; }
.panel { background:white; border:1px solid var(--line); border-radius:16px; padding:18px; box-shadow:0 5px 16px rgba(16,24,40,.04); }
.form { display:grid; gap:10px; }
table { width:100%; border-collapse:collapse; background:white; border-radius:16px; overflow:hidden; }
th, td { padding:12px; border-bottom:1px solid var(--line); text-align:left; font-size:14px; }
th { color:var(--muted); background:#fafbfc; }
.delete { color:white; background:var(--danger); padding:8px 10px; width:auto; }
.badge { display:inline-block; padding:4px 8px; border-radius:999px; background:#eef4ff; color:#1f4f8f; font-size:12px; font-weight:700; }
@media(max-width:900px){ main{grid-template-columns:1fr} aside{position:static}.grid{grid-template-columns:1fr} }
