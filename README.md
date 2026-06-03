* { box-sizing: border-box; }
body { margin: 0; font-family: Arial, sans-serif; background: #f4f6fb; color: #111827; }
.app { display: flex; min-height: 100vh; }
.sidebar { width: 250px; background: #101827; color: white; padding: 28px; }
.sidebar h1 { margin: 0; font-size: 30px; }
.sidebar p { color: #9ca3af; margin-bottom: 30px; }
.sidebar nav { display: grid; gap: 12px; }
.sidebar a { padding: 12px; border-radius: 12px; background: rgba(255,255,255,.06); color: white; }
.content { flex: 1; padding: 32px; }
.hero { background: white; border-radius: 24px; padding: 30px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 10px 30px rgba(15,23,42,.06); }
.hero h2 { margin: 10px 0; font-size: 34px; }
.hero p { color: #64748b; max-width: 650px; }
.badge { background: #dbeafe; color: #1d4ed8; padding: 7px 12px; border-radius: 999px; font-weight: bold; }
button { background: #2563eb; color: white; border: 0; padding: 14px 22px; border-radius: 14px; font-weight: bold; }
.cards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; margin: 24px 0; }
.card, .panel { background: white; border-radius: 20px; padding: 22px; box-shadow: 0 10px 30px rgba(15,23,42,.05); }
.card span { color: #64748b; display: block; }
.card strong { display: block; font-size: 34px; margin-top: 10px; }
.grid { display: grid; grid-template-columns: 1fr 1fr; gap: 18px; }
.panel h3 { margin-top: 0; }
.wide { grid-column: span 2; }
.row { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #e5e7eb; padding: 16px 0; gap: 16px; }
.row small { display: block; color: #64748b; margin-top: 5px; }
.row span { background: #f1f5f9; padding: 8px 10px; border-radius: 999px; font-size: 13px; }
@media (max-width: 900px) {
  .app { flex-direction: column; }
  .sidebar { width: 100%; }
  .cards, .grid { grid-template-columns: 1fr; }
  .wide { grid-column: auto; }
  .hero { flex-direction: column; align-items: flex-start; gap: 16px; }
}
