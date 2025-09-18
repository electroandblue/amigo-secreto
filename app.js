// Array para almacenar los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim(); // Eliminar espacios en blanco

  // Validar entrada vacía
  if (nombre === "") {
    mostrarAlerta();
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
  if (amigos.length === 0) {
    document.getElementById("resultado").innerHTML =
      "No hay amigos en la lista para sortear.";
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
// Mostrar alerta si el campo está vacío
function mostrarAlerta() {
  let alerta = document.getElementById("customAlert");
  alerta.style.display = "flex";
}

// Cerrar la alerta
function cerrarAlerta() {
  let alerta = document.getElementById("customAlert");
  alerta.style.display = "none";
}
