/* Script que cierra el modal y redirige a WhatsApp después de 3 segundos */
document.addEventListener("DOMContentLoaded", function () {
  const modalEl = document.getElementById("preregistroModal");

  modalEl.addEventListener("shown.bs.modal", function () {
    setTimeout(() => {
      // Cerrar modal
      const modal = bootstrap.Modal.getInstance(modalEl);
      modal.hide();

      // Redirección a WhatsApp
      window.location.href = "https://wa.me/+573012041255?text=Hola%2C%20quisiera%20más%20información%20sobre%20los%20servicios%20de%20Innovent%20Servicios%20TI";
    }, 3000); // 3 segundos
  });
});


