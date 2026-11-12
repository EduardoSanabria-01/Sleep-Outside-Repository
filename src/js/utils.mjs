export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}

export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}

export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function renderListWithTemplate(
  templateFn,
  parentElement,
  list,
  position = "afterbegin",
  clear = false
) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlStrings = list.map(templateFn);
  parentElement.insertAdjacentHTML(position, htmlStrings.join(""));
}

// NUEVA FUNCIÓN PARA LA ALERTA
export function renderAlert(message, type = "info") {
  const alertContainer = document.createElement("section");
  alertContainer.classList.add("alert-list");
  
  const alertElement = document.createElement("p");
  alertElement.textContent = message;
  
  alertElement.style.backgroundColor = type === "warning" ? "#f0a83b" : "#3b82f6";
  alertElement.style.color = "#fff";
  alertElement.style.padding = "10px";
  alertElement.style.textAlign = "center";
  alertElement.style.fontWeight = "bold";

  alertContainer.appendChild(alertElement);
  
  const main = document.querySelector("main");
  if (main) {
    main.prepend(alertContainer);
  }
}
export function renderWithTemplate(template, parentElement, data, callback) {
  parentElement.innerHTML = template;
  if (callback) {
    callback(data);
  }
}

export async function loadTemplate(path) {
  const res = await fetch(path);
  const template = await res.text();
  return template;
}

export async function loadHeaderFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const headerElement = document.querySelector("#main-header");
  renderWithTemplate(headerTemplate, headerElement);

  const footerTemplate = await loadTemplate("../partials/footer.html");
  const footerElement = document.querySelector("#main-footer");
  renderWithTemplate(footerTemplate, footerElement);
}