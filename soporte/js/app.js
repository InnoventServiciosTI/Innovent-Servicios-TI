// =============================
// MOBILE MENU
// =============================

const menuBtn = document.getElementById("menuBtn");
const sidebar = document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active-sidebar");
});

// =============================
// SIDEBAR ACTIVE
// =============================

const menuItems = document.querySelectorAll(".sidebar li");

menuItems.forEach(item => {

  item.addEventListener("click", () => {

    menuItems.forEach(i => i.classList.remove("active"));

    item.classList.add("active");

    showToast(`Abriendo módulo: ${item.innerText}`);

  });

});

// =============================
// REALTIME SEARCH
// =============================

const searchInput = document.getElementById("searchInput");
const tableRows = document.querySelectorAll("#ticketTable tbody tr");

function filterTable() {

  const value = searchInput.value.toLowerCase().trim();

  tableRows.forEach(row => {

    const text = row.innerText.toLowerCase();

    if(text.includes(value)){

      row.style.display = "";

    } else {

      row.style.display = "none";

    }

  });

}

// BUSQUEDA EN TIEMPO REAL

searchInput.addEventListener("input", filterTable);

// BOTON BUSCAR

document
.getElementById("searchBtn")
.addEventListener("click", filterTable);

// =============================
// MODAL NUEVO TICKET
// =============================

const modal = document.getElementById("ticketModal");
const openModal = document.getElementById("openTicketModal");
const closeModal = document.getElementById("closeModal");

openModal.addEventListener("click", () => {

  modal.classList.add("show-modal");

});

closeModal.addEventListener("click", () => {

  modal.classList.remove("show-modal");

});

// CERRAR AFUERA

window.addEventListener("click", (e) => {

  if(e.target === modal){

    modal.classList.remove("show-modal");

  }

});

// =============================
// CREAR TICKET
// =============================

const createTicketBtn =
document.getElementById("createTicket");

createTicketBtn.addEventListener("click", () => {

  const subject =
  document.getElementById("subject").value;

  const client =
  document.getElementById("client").value;

  const priority =
  document.getElementById("priority").value;

  if(subject === "" || client === ""){

    showToast("Completa todos los campos");

    return;

  }

  const tbody =
  document.querySelector("#ticketTable tbody");

  const row = document.createElement("tr");

  row.innerHTML = `
  
    <td>#TKT-${Math.floor(Math.random()*9999)}</td>
    <td>${subject}</td>
    <td>${client}</td>

    <td>
      <span class="badge medium">
        ${priority}
      </span>
    </td>

    <td>
      <span class="badge open">
        Abierto
      </span>
    </td>

    <td>Sin asignar</td>

  `;

  tbody.prepend(row);

  document.getElementById("subject").value = "";
  document.getElementById("client").value = "";

  modal.classList.remove("show-modal");

  showToast("Ticket creado correctamente");

});

// =============================
// TOAST NOTIFICATION
// =============================

function showToast(message){

  const toast =
  document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("show-toast");

  setTimeout(() => {

    toast.classList.remove("show-toast");

  },3000);

}

// =============================
// CHARTS
// =============================

const ctx1 =
document.getElementById("ticketChart");

new Chart(ctx1, {

  type: "doughnut",

  data: {

    labels: [
      "Abiertos",
      "En Proceso",
      "Pendientes",
      "Resueltos"
    ],

    datasets: [{

      data: [42,18,12,27],
      borderWidth: 0

    }]

  },

  options: {

    responsive: true,
    maintainAspectRatio: false

  }

});

// =============================

const ctx2 =
document.getElementById("priorityChart");

new Chart(ctx2, {

  type: "bar",

  data: {

    labels: [
      "Crítica",
      "Alta",
      "Media",
      "Baja"
    ],

    datasets: [{

      label: "Tickets",

      data: [8,24,45,25],

      borderRadius: 8

    }]

  },

  options: {

    responsive: true,

    maintainAspectRatio: false,

    scales: {

      y: {

        beginAtZero: true

      }

    }

  }

});

// ==========================
// SIDEBAR NAVIGATION
// ==========================

const menuItems =
document.querySelectorAll(".menu-item");

const pages =
document.querySelectorAll(".page");

menuItems.forEach(item => {

  item.addEventListener("click", () => {

    menuItems.forEach(i =>
      i.classList.remove("active")
    );

    item.classList.add("active");

    const page =
    item.getAttribute("data-page");

    pages.forEach(p =>
      p.classList.remove("active-page")
    );

    document
    .getElementById(page)
    .classList.add("active-page");

    showToast(`Módulo ${page} cargado`);

  });

});

// ==========================
// MOBILE MENU
// ==========================

const menuBtn =
document.getElementById("menuBtn");

const sidebar =
document.getElementById("sidebar");

menuBtn.addEventListener("click", () => {

  sidebar.classList.toggle(
    "active-sidebar"
  );

});

// ==========================
// MODAL
// ==========================

const modal =
document.getElementById("ticketModal");

document
.getElementById("openTicketModal")
.addEventListener("click", () => {

  modal.classList.add("show-modal");

});

document
.getElementById("closeModal")
.addEventListener("click", () => {

  modal.classList.remove("show-modal");

});

// ==========================
// CREATE TICKET
// ==========================

document
.getElementById("createTicket")
.addEventListener("click", () => {

  const subject =
  document.getElementById("subject").value;

  const client =
  document.getElementById("client").value;

  if(subject === "" || client === ""){

    showToast("Completa los campos");

    return;

  }

  const tbody =
  document.querySelector(
    "#ticketTable tbody"
  );

  const row =
  document.createElement("tr");

  row.innerHTML = `

    <td>#TKT-${Math.floor(Math.random()*9999)}</td>

    <td>${subject}</td>

    <td>${client}</td>

    <td>
      <span class="badge open">
        Abierto
      </span>
    </td>

    <td>

      <button class="table-btn resolve-btn">
        Resolver
      </button>

      <button class="table-btn delete-btn">
        Eliminar
      </button>

    </td>

  `;

  tbody.prepend(row);

  updateTicketActions();

  modal.classList.remove("show-modal");

  document.getElementById("subject").value = "";
  document.getElementById("client").value = "";

  showToast("Ticket creado");

});

// ==========================
// TICKET ACTIONS
// ==========================

function updateTicketActions(){

  const resolveButtons =
  document.querySelectorAll(".resolve-btn");

  const deleteButtons =
  document.querySelectorAll(".delete-btn");

  resolveButtons.forEach(btn => {

    btn.onclick = () => {

      btn.parentElement.parentElement
      .querySelector(".badge")
      .innerText = "Resuelto";

      btn.parentElement.parentElement
      .querySelector(".badge")
      .className = "badge process";

      showToast("Ticket resuelto");

    };

  });

  deleteButtons.forEach(btn => {

    btn.onclick = () => {

      btn.parentElement
      .parentElement.remove();

      showToast("Ticket eliminado");

    };

  });

}

updateTicketActions();

// ==========================
// GLOBAL SEARCH
// ==========================

document
.getElementById("globalSearch")
.addEventListener("input", function(){

  const value =
  this.value.toLowerCase();

  document
  .querySelectorAll("table tbody tr")
  .forEach(row => {

    const text =
    row.innerText.toLowerCase();

    row.style.display =
    text.includes(value)
    ? ""
    : "none";

  });

});

// ==========================
// TOAST
// ==========================

function showToast(message){

  const toast =
  document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("show-toast");

  setTimeout(() => {

    toast.classList.remove(
      "show-toast"
    );

  },3000);

}

// ==========================
// CHARTS
// ==========================

new Chart(
document.getElementById("ticketChart"),
{
  type:"doughnut",

  data:{
    labels:[
      "Abiertos",
      "Proceso",
      "Pendientes",
      "Resueltos"
    ],

    datasets:[{
      data:[42,18,12,27]
    }]
  }
});

new Chart(
document.getElementById("priorityChart"),
{
  type:"bar",

  data:{
    labels:[
      "Crítica",
      "Alta",
      "Media",
      "Baja"
    ],

    datasets:[{
      label:"Tickets",
      data:[8,24,45,25]
    }]
  }
});