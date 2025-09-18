// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // Eliminar espacios en blanco

  // Validar entrada vacía
  if (nombre === "") {
    mostrarAlerta("⚠️ Por favor, ingrese un nombre válido.");
    return;
  }

  // Validar que no se repita
  if (amigos.includes(nombre)) {
    mostrarAlerta("⚠️ Ese nombre ya está en la lista.");
    return;
  }

  // Agregar nombre al array
  amigos.push(nombre);

  // Actualizar la lista visual
  actualizarLista();

  // Limpiar el campo de entrada
  input.value = "";
}

// Función para actualizar la lista en el HTML
function actualizarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; // Limpiar lista antes de actualizar

  for (let i = 0; i < amigos.length; i++) {
    let li = document.createElement("li");
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

// Función para sortear un amigo aleatorio
function sortearAmigo() {
  if (amigos.length < 2) {
    mostrarAlerta("⚠️ Debes añadir al menos 2 nombres para realizar el sorteo.");
    return;
  }

  // Generar índice aleatorio
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indice];

  // Mostrar resultado en pantalla
  document.getElementById("resultado").innerHTML =
    "🎉 El amigo secreto es: <strong>" + amigoSorteado + "</strong>";
}

// --------- ALERTA PERSONALIZADA ---------
function mostrarAlerta(mensaje) {
  let alerta = document.getElementById("customAlert");
  let alertMessage = document.getElementById("alertMessage");
  alertMessage.textContent = mensaje;
  alerta.style.display = "flex";
}

function cerrarAlerta() {
  let alerta = document.getElementById("customAlert");
  alerta.style.display = "none";
}

