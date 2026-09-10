/* =========================================================
   ASESOR VIRTUAL - INNOVENT SERVICIOS TI
   ========================================================= */

const WHATSAPP_NUMBER = "573012041255";

/* =========================================================
   ELEMENTOS DEL DOM
   ========================================================= */

const el = {
  chatBox: document.getElementById("chatbox"),
  chatToggle: document.getElementById("chat-toggle"),
  chatClose: document.getElementById("chat-close"),
  chatInput: document.getElementById("input"),
  chatMessages: document.getElementById("chat-messages"),
  chatSend: document.getElementById("chat-send")
};

/* =========================================================
   SERVICIOS INNOVENT SERVICIOS TI
   ========================================================= */

const serviciosInnovent = [
  {
    id: 1,
    codigo: "SOP001",
    name: "Soporte Técnico Preventivo y Correctivo",
    desc: "Diagnóstico, mantenimiento y solución de problemas tecnológicos.",
    category: "Soporte TI",
    price: "$49.000",
    modality: "Remoto / En sitio",
    time: "Según requerimiento",
    details: "Orientado a hogares, negocios y empresas."
  },
  {
    id: 2,
    codigo: "SOP002",
    name: "Mantenimiento de Computadores y Portátiles",
    desc: "Mantenimiento preventivo y correctivo para equipos tecnológicos.",
    category: "Soporte TI",
    price: "$60.000",
    modality: "En sitio",
    time: "Según diagnóstico",
    details: "Optimización, limpieza, revisión y solución de fallas."
  },
  {
    id: 3,
    codigo: "SOP003",
    name: "Soporte Técnico Remoto",
    desc: "Asistencia técnica a distancia para resolver problemas de software y configuración.",
    category: "Soporte TI",
    price: "$40.000",
    modality: "Remoto",
    time: "Según requerimiento",
    details: "Atención remota para usuarios, negocios y empresas."
  },
  {
    id: 4,
    codigo: "WEB001",
    name: "Desarrollo de Sitios Web",
    desc: "Diseño y desarrollo de sitios web profesionales, modernos y responsivos.",
    category: "Desarrollo Web",
    price: "$400.000",
    modality: "Digital",
    time: "Según proyecto",
    details: "Ideal para negocios, emprendimientos y profesionales."
  },
  {
    id: 5,
    codigo: "WEB002",
    name: "Marca Digital",
    desc: "Presencia digital profesional para fortalecer la identidad de tu negocio.",
    category: "Desarrollo Web",
    price: "$800.000",
    modality: "Digital",
    time: "Según proyecto",
    details: "Soluciones orientadas a presencia y posicionamiento digital."
  },
  {
    id: 6,
    codigo: "WEB003",
    name: "Sitio Web Inteligente",
    desc: "Sitio web avanzado con funcionalidades inteligentes e integración de IA.",
    category: "Desarrollo Web",
    price: "$1.500.000",
    modality: "Digital",
    time: "Según proyecto",
    details: "Pensado para empresas que buscan automatización y mayor interacción."
  },
  {
    id: 7,
    codigo: "WEB004",
    name: "Sitio Web Premium",
    desc: "Solución web avanzada para empresas y proyectos de mayor alcance.",
    category: "Desarrollo Web",
    price: "$3.500.000",
    modality: "Digital",
    time: "Según proyecto",
    details: "Desarrollo personalizado con funcionalidades avanzadas."
  },
  {
    id: 8,
    codigo: "WEB005",
    name: "Mantenimiento Web",
    desc: "Actualización, optimización y mantenimiento de sitios web.",
    category: "Desarrollo Web",
    price: "$60.000",
    modality: "Remoto",
    time: "Según requerimiento",
    details: "Ideal para mantener un sitio web actualizado y funcional."
  },
  {
    id: 9,
    codigo: "IA001",
    name: "Soluciones con Inteligencia Artificial",
    desc: "Implementación de soluciones basadas en Inteligencia Artificial.",
    category: "IA y Automatización",
    price: "Consultar",
    modality: "Digital",
    time: "Según proyecto",
    details: "Soluciones personalizadas para empresas y emprendimientos."
  },
  {
    id: 10,
    codigo: "IA002",
    name: "Asesor Virtual con IA",
    desc: "Implementación de asistentes virtuales para atención y orientación de clientes.",
    category: "IA y Automatización",
    price: "Consultar",
    modality: "Digital",
    time: "Según proyecto",
    details: "Automatización de atención y respuestas frecuentes."
  },
  {
    id: 11,
    codigo: "AUT001",
    name: "Automatización de Procesos",
    desc: "Automatización de tareas y procesos para mejorar la eficiencia.",
    category: "IA y Automatización",
    price: "Consultar",
    modality: "Digital",
    time: "Según proyecto",
    details: "Diseñado para reducir tareas repetitivas y optimizar operaciones."
  },
  {
    id: 12,
    codigo: "INT001",
    name: "Integración de Sistemas y Herramientas",
    desc: "Conexión e integración de diferentes plataformas y herramientas.",
    category: "Integraciones",
    price: "Consultar",
    modality: "Digital",
    time: "Según proyecto",
    details: "Integraciones orientadas a mejorar los flujos de trabajo."
  },
  {
    id: 13,
    codigo: "RED001",
    name: "Configuración de Redes y Conectividad",
    desc: "Configuración y optimización de redes para hogares y empresas.",
    category: "Redes",
    price: "Consultar",
    modality: "En sitio / Remoto",
    time: "Según requerimiento",
    details: "Diagnóstico y configuración de conectividad."
  },
  {
    id: 14,
    codigo: "RED002",
    name: "Cableado de Red RJ45",
    desc: "Instalación y organización de cableado de red.",
    category: "Redes",
    price: "Consultar",
    modality: "En sitio",
    time: "Según proyecto",
    details: "Soluciones de conectividad para hogares, oficinas y negocios."
  },
  {
    id: 15,
    codigo: "SEG001",
    name: "Seguridad y Protección Digital",
    desc: "Orientación y soluciones para mejorar la seguridad tecnológica.",
    category: "Seguridad",
    price: "Consultar",
    modality: "Remoto / En sitio",
    time: "Según requerimiento",
    details: "Buenas prácticas y soluciones de protección digital."
  },
  {
    id: 16,
    codigo: "ASE001",
    name: "Diagnóstico y Asesoría Tecnológica",
    desc: "Evaluación de necesidades tecnológicas y recomendaciones.",
    category: "Asesoría",
    price: "Consultar",
    modality: "Remoto / En sitio",
    time: "Según requerimiento",
    details: "Orientación para elegir soluciones tecnológicas adecuadas."
  },
  {
    id: 17,
    codigo: "PRO001",
    name: "Accesorios Tecnológicos",
    desc: "Accesorios y productos tecnológicos para complementar tus equipos.",
    category: "Productos TI",
    price: "Consultar",
    modality: "Venta",
    time: "Según disponibilidad",
    details: "Consulta disponibilidad de productos y accesorios."
  },
  {
    id: 18,
    codigo: "EMP001",
    name: "Soluciones Tecnológicas para Empresas",
    desc: "Soluciones integrales de tecnología para empresas y negocios.",
    category: "Empresas",
    price: "Consultar",
    modality: "Remoto / En sitio",
    time: "Según proyecto",
    details: "Soporte, desarrollo, automatización, seguridad y soluciones TI."
  }
];

/* =========================================================
   UTILIDADES
   ========================================================= */

function normalizar(texto) {
  return String(texto || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function escaparHTML(texto) {
  const div = document.createElement("div");
  div.textContent = String(texto || "");
  return div.innerHTML;
}

function formatPrice(price) {
  if (price === null || price === undefined || price === "") {
    return "Consultar";
  }

  if (typeof price === "number") {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      maximumFractionDigits: 0
    }).format(price);
  }

  return String(price);
}

/* =========================================================
   HISTORIAL DEL CHAT
   ========================================================= */

function guardarMensaje(texto, tipo) {
  try {
    const historial =
      JSON.parse(localStorage.getItem("innoventChatHistorial")) || [];

    historial.push({
      texto,
      tipo,
      fecha: new Date().toISOString()
    });

    localStorage.setItem(
      "innoventChatHistorial",
      JSON.stringify(historial.slice(-100))
    );
  } catch (error) {
    console.warn("No se pudo guardar el historial.", error);
  }
}

function restaurarHistorial() {
  if (!el.chatMessages) return;

  try {
    const historial =
      JSON.parse(localStorage.getItem("innoventChatHistorial")) || [];

    historial.forEach(mensaje => {
      agregarMensajeDOM(mensaje.texto, mensaje.tipo, false);
    });
  } catch (error) {
    console.warn("No se pudo restaurar el historial.", error);
  }
}

/* =========================================================
   MENSAJES
   ========================================================= */

function agregarMensajeDOM(texto, tipo = "bot", guardar = true) {
  if (!el.chatMessages) return;

  const mensaje = document.createElement("div");

  mensaje.className =
    tipo === "usuario"
      ? "chat-message user-message"
      : "chat-message bot-message";

  if (tipo === "bot") {
    mensaje.innerHTML = texto;
  } else {
    mensaje.textContent = texto;
  }

  el.chatMessages.appendChild(mensaje);

  el.chatMessages.scrollTop = el.chatMessages.scrollHeight;

  if (guardar) {
    guardarMensaje(texto, tipo);
  }
}

function agregarMensaje(texto, tipo = "bot") {
  agregarMensajeDOM(texto, tipo, true);

  if (tipo === "bot") {
    reproducirSonido();
  }
}

/* =========================================================
   MENSAJE DE BIENVENIDA INNOVENT
   ========================================================= */

function iniciarChat(force = false) {
  if (!el.chatMessages || !el.chatBox) return;

  const iniciado = localStorage.getItem("innoventChatIniciado");

  if (!force && iniciado) {
    restaurarHistorial();
    return;
  }

  const welcome =
    "👋 <b>¡Hola!</b> Soy <b>Innovent</b>, tu asesor virtual de <b>Innovent Servicios TI</b>.<br><br>" +
    "Estoy aquí para orientarte sobre nuestras soluciones tecnológicas y ayudarte a encontrar la opción adecuada para tu necesidad.<br><br>" +
    "¿En qué podemos ayudarte hoy?<br><br>" +
    "1️⃣ Soporte técnico<br>" +
    "2️⃣ Desarrollo web<br>" +
    "3️⃣ Inteligencia Artificial y automatización<br>" +
    "4️⃣ Productos y accesorios TI<br>" +
    "5️⃣ Hablar con un asesor humano";

  agregarMensaje(welcome, "bot");

  localStorage.setItem("innoventChatIniciado", "1");
}

/* =========================================================
   APERTURA Y CIERRE
   ========================================================= */

function setChatOpen(open) {
  if (!el.chatBox) return;

  el.chatBox.style.display = open ? "flex" : "none";

  el.chatBox.setAttribute(
    "aria-hidden",
    String(!open)
  );

  if (el.chatToggle) {
    el.chatToggle.setAttribute(
      "aria-expanded",
      String(open)
    );
  }

  if (open && el.chatInput) {
    setTimeout(() => {
      el.chatInput.focus();
    }, 150);
  }
}

function toggleChat() {
  if (!el.chatBox) return;

  const abierto =
    el.chatBox.style.display === "flex";

  setChatOpen(!abierto);
}

/* =========================================================
   RESPUESTAS AUTOMÁTICAS
   ========================================================= */

function responderChat(texto) {
  const t = normalizar(texto);

  if (!t) {
    return "Escribe tu consulta y con gusto te orientaré.";
  }

  /* SOPORTE TÉCNICO */

  if (
    t === "1" ||
    t.includes("soporte") ||
    t.includes("mantenimiento") ||
    t.includes("computador") ||
    t.includes("computadora") ||
    t.includes("portatil") ||
    t.includes("tecnico")
  ) {
    return (
      "<b>Soporte Técnico</b><br><br>" +
      "En <b>Innovent Servicios TI</b> ofrecemos soporte preventivo y correctivo, mantenimiento de computadores y portátiles, soporte remoto, configuración de redes y asesoría tecnológica.<br><br>" +
      "¿Quieres conocer un servicio específico?"
    );
  }

  /* DESARROLLO WEB */

  if (
    t === "2" ||
    t.includes("desarrollo web") ||
    t.includes("pagina web") ||
    t.includes("sitio web") ||
    t.includes("pagina") ||
    t.includes("web")
  ) {
    return (
      "<b>Desarrollo Web</b><br><br>" +
      "Desarrollamos sitios web profesionales, modernos, responsivos y adaptados a las necesidades de cada negocio o empresa.<br><br>" +
      "Planes disponibles desde <b>$400.000</b>.<br><br>" +
      "También contamos con soluciones de Marca Digital, sitios inteligentes y proyectos Premium."
    );
  }

  /* IA Y AUTOMATIZACIÓN */

  if (
    t === "3" ||
    t.includes("inteligencia artificial") ||
    t.includes("automatizacion") ||
    t.includes("ia") ||
    t.includes("asesor virtual")
  ) {
    return (
      "<b>Inteligencia Artificial y Automatización</b><br><br>" +
      "Desarrollamos soluciones con Inteligencia Artificial, asesores virtuales, automatización de procesos e integraciones tecnológicas.<br><br>" +
      "Estas soluciones se cotizan de acuerdo con las necesidades de cada proyecto."
    );
  }

  /* PRODUCTOS Y ACCESORIOS */

  if (
    t === "4" ||
    t.includes("producto") ||
    t.includes("accesorio") ||
    t.includes("mouse") ||
    t.includes("hub") ||
    t.includes("cable")
  ) {
    return (
      "<b>Productos y Accesorios TI</b><br><br>" +
      "Contamos con diferentes accesorios y productos tecnológicos para complementar tus equipos.<br><br>" +
      "Indícame qué producto estás buscando y te orientaremos sobre disponibilidad."
    );
  }

  /* ASESOR HUMANO */

  if (
    t === "5" ||
    t.includes("asesor humano") ||
    t.includes("asesor") ||
    t.includes("persona") ||
    t.includes("humano") ||
    t.includes("whatsapp")
  ) {
    return (
      "<b>Asesor humano</b><br><br>" +
      "Puedes comunicarte directamente con nuestro equipo por WhatsApp para recibir atención personalizada.<br><br>" +
      `<a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" rel="noopener noreferrer"><b>Contactar por WhatsApp</b></a>`
    );
  }

  /* HORARIOS */

  if (
    t.includes("horario") ||
    t.includes("hora") ||
    t.includes("atienden") ||
    t.includes("atencion")
  ) {
    return (
      "<b>Horarios de atención</b><br><br>" +
      "Lunes a viernes: <b>9:00 a. m. – 4:00 p. m.</b><br>" +
      "Sábados: <b>7:00 a. m. – 12:00 p. m.</b><br><br>" +
      "También contamos con servicios remotos según el tipo de solución."
    );
  }

  /* PRECIOS */

  if (
    t.includes("precio") ||
    t.includes("precios") ||
    t.includes("cuanto") ||
    t.includes("valor") ||
    t.includes("costo")
  ) {
    return (
      "<b>Precios y servicios</b><br><br>" +
      "Contamos con soluciones desde <b>$40.000</b> en soporte remoto y planes web desde <b>$400.000</b>.<br><br>" +
      "Para soluciones de IA, automatización, redes y proyectos empresariales realizamos una cotización según el requerimiento."
    );
  }

  /* CONTACTO */

  if (
    t.includes("contacto") ||
    t.includes("telefono") ||
    t.includes("numero")
  ) {
    return (
      "<b>Contacto Innovent Servicios TI</b><br><br>" +
      "WhatsApp: <b>+57 301 204 1255</b><br>" +
      "Correo: <b>innoventdesarrollodesoftware@gmail.com</b><br><br>" +
      "También puedes escribirnos directamente por WhatsApp."
    );
  }

  /* BÚSQUEDA DE SERVICIOS */

  const servicioEncontrado = serviciosInnovent.find(servicio => {
    const contenido = normalizar(
      `${servicio.name} ${servicio.desc} ${servicio.category} ${servicio.codigo}`
    );

    return (
      contenido.includes(t) ||
      t.includes(normalizar(servicio.name))
    );
  });

  if (servicioEncontrado) {
    return mostrarServicioChat(servicioEncontrado);
  }

  /* RESPUESTA GENERAL */

  return (
    "Puedo ayudarte con:<br><br>" +
    "1️⃣ <b>Soporte técnico</b><br>" +
    "2️⃣ <b>Desarrollo web</b><br>" +
    "3️⃣ <b>Inteligencia Artificial y automatización</b><br>" +
    "4️⃣ <b>Productos y accesorios TI</b><br>" +
    "5️⃣ <b>Asesor humano</b><br><br>" +
    "También puedes escribir directamente el nombre del servicio que estás buscando."
  );
}

/* =========================================================
   INFORMACIÓN DEL SERVICIO
   ========================================================= */

function mostrarServicioChat(servicio) {
  return (
    `<b>${escaparHTML(servicio.name)}</b><br><br>` +
    `${escaparHTML(servicio.desc)}<br><br>` +
    `<b>Categoría:</b> ${escaparHTML(servicio.category)}<br>` +
    `<b>Modalidad:</b> ${escaparHTML(servicio.modality)}<br>` +
    `<b>Tiempo:</b> ${escaparHTML(servicio.time)}<br>` +
    `<b>Precio:</b> ${escaparHTML(formatPrice(servicio.price))}<br><br>` +
    `${escaparHTML(servicio.details)}<br><br>` +
    `<a href="https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      `Hola, estoy interesado en el servicio ${servicio.name} (${servicio.codigo}) de Innovent Servicios TI.`
    )}" target="_blank" rel="noopener noreferrer"><b>Solicitar información por WhatsApp</b></a>`
  );
}

/* =========================================================
   ENVÍO DEL CHAT
   ========================================================= */

function enviarChat() {
  if (!el.chatInput) return;

  const texto = el.chatInput.value.trim();

  if (!texto) return;

  agregarMensaje(texto, "usuario");

  el.chatInput.value = "";

  setTimeout(() => {
    const respuesta = responderChat(texto);
    agregarMensaje(respuesta, "bot");
  }, 350);
}

/* Compatibilidad con onclick="enviar()" */

function enviar() {
  enviarChat();
}

/* =========================================================
   CONSULTAS RÁPIDAS
   ========================================================= */

function enviarConsultaRapida(consulta) {
  if (!el.chatInput) return;

  el.chatInput.value = consulta;
  enviarChat();
}

/* =========================================================
   SONIDO DE NOTIFICACIÓN
   ========================================================= */

function reproducirSonido() {
  try {
    const audio = new Audio(
      "data:audio/wav;base64,UklGRiQAAABXQVZFZm10IBAAAAABAAEAQB8AAIA+AAACABAAZGF0YQAAAAA="
    );

    audio.volume = 0.15;

    audio.play().catch(() => {});
  } catch (error) {
    // El sonido no afecta el funcionamiento del asesor.
  }
}

/* =========================================================
   EVENTOS
   ========================================================= */

if (el.chatToggle) {
  el.chatToggle.addEventListener("click", toggleChat);
}

if (el.chatClose) {
  el.chatClose.addEventListener("click", () => {
    setChatOpen(false);
  });
}

if (el.chatSend) {
  el.chatSend.addEventListener("click", enviarChat);
}

if (el.chatInput) {
  el.chatInput.addEventListener("keydown", event => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      enviarChat();
    }
  });
}

/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  if (!el.chatBox) return;

  setChatOpen(false);

  iniciarChat();
})

/* =========================================================
   API GLOBAL
   ========================================================= */

window.App = window.App || {};

window.App.serviciosInnovent = serviciosInnovent;
window.App.iniciarChat = iniciarChat;
window.App.enviarChat = enviarChat;
window.App.enviarConsultaRapida = enviarConsultaRapida;
window.App.toggleChat = toggleChat;

window.enviar = enviar;
window.enviarChat = enviarChat;
window.enviarConsultaRapida = enviarConsultaRapida;