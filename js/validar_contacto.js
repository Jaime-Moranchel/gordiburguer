document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formContacto");

  form.addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();
    const fecha = document.getElementById("fecha_contacto").value;
    const hora = document.getElementById("hora_contacto").value;

    if (nombre === "") {
      alert("Por favor, introduce tu nombre.");
      event.preventDefault();
      return;
    }

    if (mensaje.length < 10) {
      alert("El mensaje debe contener al menos 10 caracteres.");
      event.preventDefault();
      return;
    }

    if (!fecha) {
      alert("Selecciona una fecha para el contacto.");
      event.preventDefault();
      return;
    }

    if (!hora) {
      alert("Selecciona una hora preferida para el contacto.");
      event.preventDefault();
      return;
    }
  });
});
