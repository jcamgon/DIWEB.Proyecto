export const translations = {
  es: {
    "title": "Bienvenido a CriticMedia",
    "subtitle": "Todo lo que necesitas saber sobre últimos lanzamientos y películas",

    // Navbar
    "search-placeholder": "Busca en CriticMedia",
    "login": "Iniciar Sesión",
    "about": "Sobre Nosotros",
    "media-item-1": "Películas",
    "media-item-2": "Series",
    "media-item-3": "Anime",
    "home": "Inicio",

    // Login
    "login-user": "Usuario",
    "login-pass": "Contraseña",
    "login-signin": "Registrarse",
    "login-search-placeholder-u": "Introduce tu usuario",
    "login-search-placeholder-p": "Introduce tu contraseña"
  },
  en: {
    "title": "Welcome to CriticMedia",
    "subtitle": "Everything you need to know about latest releases and movies",

    // Navbar
    "search-placeholder": "Search in CriticMedia",
    "login": "Log In",
    "about": "About Us",
    "media-item-1": "Movies",
    "media-item-2": "TV Shows",
    "media-item-3": "Anime",
    "home": "Home",

    // Login
    "login-user": "Username",
    "login-pass": "Password",
    "login-signin": "Sign In",
    "login-search-placeholder-u": "Type your username",
    "login-search-placeholder-p": "Type your password"
  },
};

// Función para cambiar el idioma
export function changeLanguage(language) {
  // Guardar en cookie para persistencia
  setCookie("language", language, 7); // Guarda el idioma por 7 días

  // Actualizar textos traducibles
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // Actualizar placeholders en inputs
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.placeholder = translations[language]["search-placeholder"];
  }

  const passInput = document.querySelector('input[type="password"]');
  if (passInput) {
    passInput.placeholder = translations[language]["login-search-placeholder-p"];
  }

  // Actualizar el selector de idioma (bandera y texto)
  const selectedFlag = document.getElementById("selectedFlag");
  const selectedLanguage = document.getElementById("selectedLanguage");

  if (selectedFlag && selectedLanguage) {
    selectedFlag.src = `./resources/img/flags/${language}.png`;
    selectedFlag.alt = language === "es" ? "Español" : "English";
    selectedLanguage.textContent = language === "es" ? "Español" : "English";
  }

  // Actualizar el atributo lang del HTML
  document.documentElement.lang = language;
}

// Función para inicializar los event listeners
export function initializeLanguageSelector() {
  document.querySelectorAll(".language-option").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      const language = this.getAttribute("data-language");
      changeLanguage(language);
    });
  });
}

// Función para establecer una cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    let date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = `${name}=${value}; path=/;${expires}`;
}

// Función para obtener una cookie
function getCookie(name) {
  let nameEQ = name + "=";
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let c = cookies[i].trim();
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Aplicar el idioma guardado al cargar la página
window.onload = function () {
  let savedLang = getCookie("language");
  if (savedLang && translations[savedLang]) {
    console.log("Idioma cargado desde cookie:", savedLang);
    changeLanguage(savedLang); // Aplica el idioma guardado
  } else {
    changeLanguage("es"); // Por defecto, español si no hay cookie
  }

};


