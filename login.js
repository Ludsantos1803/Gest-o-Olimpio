document.addEventListener("DOMContentLoaded", () => {
  const loginSection = document.getElementById("loginFormSection");
  const registerSection = document.getElementById("registerFormSection");
  const showRegister = document.getElementById("showRegister");
  const showLogin = document.getElementById("showLogin");
  const mensagem = document.getElementById("mensagem");

  function mostrarMensagem(texto, tipo = "success") {
    mensagem.textContent = texto;
    mensagem.className = `text-center font-semibold transition-opacity duration-500 ${
      tipo === "success" ? "text-green-400" : "text-red-400"
    }`;
    mensagem.classList.remove("hidden");
    setTimeout(() => mensagem.classList.add("hidden"), 3000);
  }

  showRegister.addEventListener("click", (e) => {
    e.preventDefault();
    loginSection.classList.add("hidden");
    registerSection.classList.remove("hidden");
  });

  showLogin.addEventListener("click", (e) => {
    e.preventDefault();
    registerSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
  });

  // login
  document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();
    if (data.success) {
      localStorage.setItem("token", data.token);
      mostrarMensagem("Login realizado com sucesso!", "success");
      setTimeout(() => window.location.href = "vendas.html", 1500);
    } else {
      mostrarMensagem("Usuário ou senha incorretos", "error");
    }
  });

  // registro
  document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("newName").value;
    const username = document.getElementById("newUser").value;
    const password = document.getElementById("newPass").value;

    const response = await fetch("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, username, password }),
    });

    const data = await response.json();
    if (data.success) {
      mostrarMensagem("Usuário registrado com sucesso!", "success");
      registerSection.classList.add("hidden");
      loginSection.classList.remove("hidden");
    } else {
      mostrarMensagem("Erro ao registrar usuário.", "error");
    }
  });
});
