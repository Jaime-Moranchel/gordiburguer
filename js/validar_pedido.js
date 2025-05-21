document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formPedido");
  const mensaje = document.getElementById("mensajeEnviado");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se recargue

    const nombre = document.getElementById("nombre").value.trim();
    const clave = document.getElementById("clave").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);

    if (nombre === "" || clave === "" || isNaN(cantidad) || cantidad < 1 || cantidad > 20) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    // Mostrar mensaje simulado
    mensaje.style.display = "block";

    // También puedes limpiar el formulario si quieres:
    // form.reset();
  });
});
