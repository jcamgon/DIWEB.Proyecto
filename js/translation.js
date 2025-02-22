export const translations = {
  es: {
    'title': 'Bienvenido a CriticMedia'
  },
  en: {
    'title': 'Welcome to CriticMedia'
  },
};

// Función para cambiar el idioma
export function changeLanguage(language) {
  // Actualizar textos traducibles
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[language][key]) {
      element.textContent = translations[language][key];
    }
  });

  // Actualizar placeholder del buscador
  const searchInput = document.querySelector('input[type="text"]');
  if (searchInput) {
    searchInput.placeholder = translations[language]["search-placeholder"];
  }

  // Actualizar el selector de idioma
  const selectedFlag = document.getElementById("selectedFlag");
  const selectedLanguage = document.getElementById("selectedLanguage");

  if (selectedFlag && selectedLanguage) {
    selectedFlag.src = `./resources/img/flags/${language}.png`;
    selectedFlag.alt = language === "es" ? "Español" : "English";
    selectedLanguage.textContent = language === "es" ? "Español" : "English";
  }

  // Cerrar el dropdown después de seleccionar
  const languageDropdown = document.getElementById("languageDropdown");
  if (languageDropdown) {
    languageDropdown.classList.remove("show");
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
