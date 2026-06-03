<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>SIGE360 MVP</title>
  <link rel="stylesheet" href="/styles.css" />
</head>
<body>
  <div id="login" class="login-screen">
    <form class="login-card" id="loginForm">
      <h1>SIGE360</h1>
      <p>Gestión de edificios, RRHH y operaciones</p>
      <label>Correo</label>
      <input name="email" type="email" value="admin@sige360.local" required />
      <label>Contraseña</label>
      <input name="password" type="password" value="admin123" required />
      <button>Entrar</button>
      <small>Demo: cualquier correo y contraseña funcionan.</small>
    </form>
  </div>

  <main id="app" class="hidden">
    <aside>
      <h2>SIGE360</h2>
      <button data-section="dashboard" class="active">Dashboard</button>
      <button data-section="edificios">Edificios</button>
      <button data-section="personas">Personas</button>
      <button data-section="empleados">RRHH</button>
      <button data-section="tickets">Tickets</button>
      <button data-section="mantenimientos">Mantenimiento</button>
    </aside>

    <section class="content">
      <header>
        <div>
          <h1 id="title">Dashboard</h1>
          <p id="subtitle">Vista general del sistema</p>
        </div>
        <button id="logout" class="secondary">Salir</button>
      </header>

      <section id="dashboard" class="section"></section>
      <section id="crud" class="section hidden"></section>
    </section>
  </main>
  <script src="/app.js"></script>
</body>
</html>
