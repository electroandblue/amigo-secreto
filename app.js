document.addEventListener("DOMContentLoaded", function() {
  let amigos = [];

  const input = document.getElementById("amigo");
  const listaHTML = document.getElementById("listaAmigos");
  const resultadoHTML = document.getElementById("resultado");
  const customAlert = document.getElementById("customAlert");
  const alertMessage = document.getElementById("alertMessage");

  function mostrarAlerta(msg) {
    alertMessage.textContent = msg;
    customAlert.style.display = "flex";
  }

  window.cerrarAlerta = function() {
    customAlert.style.display = "none";
  };

  window.agregarAmigo = function() {
    let nombre = input.value.trim();

    if (!nombre) {
      mostrarAlerta("⚠️ Por favor, ingrese un nombre válido.");
      return;
    }

    if (amigos.includes(nombre)) {
      mostrarAlerta("⚠️ Ese nombre ya está en la lista.");
      return;
    }

    amigos.push(nombre);
    input.value = "";
    actualizarLista();
  };

  function actualizarLista() {
    listaHTML.innerHTML = "";
    amigos.forEach(n => {
      const li = document.createElement("li");
      li.textContent = n;
      listaHTML.appendChild(li);
    });
  }

  window.sortearAmigo = function() {
    if (amigos.length < 2) {
      mostrarAlerta("⚠️ Debes añadir al menos 2 nombres para realizar el sorteo.");
      return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    resultadoHTML.innerHTML = `🎉 El amigo secreto es: <strong>${amigoSorteado}</strong>`;
  };
});
