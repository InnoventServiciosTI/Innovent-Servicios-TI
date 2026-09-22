/* =====================================================
   MENÚ RESPONSIVE
===================================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("open");

    const icon = menuToggle.querySelector("i");

    if (navMenu.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Cerrar menú al hacer click */

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("open");

        const icon =
            menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =====================================================
   HEADER ACTIVO AL HACER SCROLL
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   AÑO FOOTER
===================================================== */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* =====================================================
   FORMULARIO
===================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const correo =
        document.getElementById("correo").value.trim();

    const servicio =
        document.getElementById("servicio").value;

    const mensaje =
        document.getElementById("mensaje").value.trim();


    if (
        !nombre ||
        !correo ||
        !servicio ||
        !mensaje
    ) {

        formMessage.textContent =
            "Completa todos los campos.";

        return;

    }


    formMessage.textContent =
        "Solicitud recibida correctamente. Nos pondremos en contacto contigo.";

    contactForm.reset();

});


/* =====================================================
   ASESOR VIRTUAL
===================================================== */

const assistantButton =
    document.getElementById("assistantButton");

const assistantChat =
    document.getElementById("assistantChat");

const closeAssistant =
    document.getElementById("closeAssistant");

const assistantMessages =
    document.getElementById("assistantMessages");

const assistantForm =
    document.getElementById("assistantForm");

const assistantInput =
    document.getElementById("assistantInput");


/* Abrir */

assistantButton.addEventListener("click", () => {

    assistantChat.classList.toggle("open");

    if (
        assistantChat.classList.contains("open")
    ) {

        assistantInput.focus();

    }

});


/* Cerrar */

closeAssistant.addEventListener("click", () => {

    assistantChat.classList.remove("open");

});


/* =====================================================
   RESPUESTAS DEL ASESOR
===================================================== */

const responses = {

    servicios: `
        Estos son algunos de nuestros servicios:
        <br><br>
        💻 Desarrollo Web<br>
        🛠️ Soporte TI<br>
        🤖 Soluciones con IA<br>
        🔐 Seguridad Informática<br>
        ⚙️ Mantenimiento<br>
        📊 Consultoría TI
    `,

    precios: `
        Los precios dependen del servicio,
        alcance y necesidades del proyecto.
        <br><br>
        Puedes solicitar una cotización
        personalizada desde la sección
        de contacto.
    `,

    contacto: `
        Puedes comunicarte con
        Innovent Servicios TI mediante
        nuestros canales de contacto.
        <br><br>
        📱 WhatsApp: +57 301 204 1255
        <br>
        📧 innoventdesarrollodesoftware@gmail.com
        <br>
        📍 Cartagena, Bolívar - Colombia
    `

};


/* =====================================================
   AGREGAR MENSAJE
===================================================== */

function addMessage(text, type = "bot") {

    const message =
        document.createElement("div");

    message.classList.add(
        type === "user"
            ? "user-message"
            : "bot-message"
    );

    message.innerHTML = text;

    assistantMessages.appendChild(message);

    assistantMessages.scrollTop =
        assistantMessages.scrollHeight;

}


/* =====================================================
   BOTONES RÁPIDOS
===================================================== */

document
    .querySelectorAll(".assistant-options button")
    .forEach(button => {

        button.addEventListener("click", () => {

            const question =
                button.dataset.question;


            let userText = "";

            if (question === "servicios") {

                userText =
                    "Quiero conocer sus servicios.";

            }

            if (question === "precios") {

                userText =
                    "Quiero consultar precios.";

            }

            if (question === "contacto") {

                userText =
                    "Quiero hablar con un asesor.";

            }


            addMessage(
                userText,
                "user"
            );


            setTimeout(() => {

                addMessage(
                    responses[question],
                    "bot"
                );

            }, 500);

        });

    });


/* =====================================================
   PROCESAR MENSAJE
===================================================== */

assistantForm.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        const text =
            assistantInput.value.trim();


        if (!text) return;


        addMessage(
            text,
            "user"
        );


        assistantInput.value = "";


        setTimeout(() => {

            const normalized =
                text.toLowerCase();


            let response = `
                Gracias por escribirnos.
                <br><br>
                Puedo ayudarte con información
                sobre nuestros servicios,
                precios o contacto con Innovent
                Servicios TI.
            `;


            if (
                normalized.includes("servicio") ||
                normalized.includes("soporte") ||
                normalized.includes("web") ||
                normalized.includes("ia")
            ) {

                response =
                    responses.servicios;

            }


            else if (
                normalized.includes("precio") ||
                normalized.includes("costo") ||
                normalized.includes("valor") ||
                normalized.includes("cotización")
            ) {

                response =
                    responses.precios;

            }


            else if (
                normalized.includes("contacto") ||
                normalized.includes("asesor") ||
                normalized.includes("whatsapp")
            ) {

                response =
                    responses.contacto;

            }


            addMessage(
                response,
                "bot"
            );


        }, 600);

    }
);


/* =====================================================
   CERRAR ASESOR AL HACER CLICK FUERA
===================================================== */

document.addEventListener(
    "click",
    (event) => {

        const insideAssistant =
            event.target.closest(
                ".assistant-wrapper"
            );

        if (
            !insideAssistant &&
            assistantChat.classList.contains("open")
        ) {

            assistantChat.classList.remove("open");

        }

    }
);
