export const translations = {
  es: {
    //titulo
    title: "Bienvenido a CriticMedia",
    subtitle:
      "Todo lo que necesitas saber sobre últimos lanzamientos y películas",

    // Navbar
    "search-placeholder": "Busca en CriticMedia",
    login: "Iniciar Sesión",
    about: "Sobre Nosotros",
    "media-item-1": "Películas",
    "media-item-2": "Series",
    "media-item-3": "Anime",
    home: "Inicio",

    // Login
    "login-user": "Usuario",
    "login-pass": "Contraseña",
    "login-signup": "Registrarse",
    "login-search-placeholder-u": "Introduce tu usuario",
    "login-search-placeholder-p": "Introduce tu contraseña",

    //pestañas
    "movies-show-title": "Películas y Series",
    "movies-show-desc": "Descubre las últimas tendencias en entretenimiento",
    "tab-text-1": "Populares",
    "tab-text-2": "Próximamente",
    "tab-text-3": "Recomendaciones",

    "card-title-pop-1": "Breaking Bad",
    "card-title-pop-2": "La Casa Del Dragon",
    "card-title-pop-3": "Ataque a los Titanes",
    "card-title-pop-4": "Intelestelar",

    "card-title-prox-1": "Kraven el Cazador",
    "card-title-prox-2": "La Maldicion del Queen Mary",
    "card-title-prox-3": "Mufasa: El Rey León",
    "card-title-prox-4": "Cónclave",

    "card-title-rec-1": "Stranger Things",
    "card-title-rec-2": "Dark",
    "card-title-rec-3": "The Whitcher",
    "card-title-rec-4": "Black Mirror",

    //watchlist
    "wl-title": "Tu Lista de Seguimiento",
    "wl-desc":
      "Guarda las películas y series que quieres ver. Crea tu lista personalizada y mantén un registro de todo el contenido que te interesa.",

    //celebridades
    "cel-title": "Celebridades Populares",
    "see-all": "Ver todas",
    actor: "Actor",
    actress: "Actriz",

    //about
    "about-title": "Sobre CriticMedia",
    "about-text-1": "Bienvenidos a CriticMedia, tu destino definitivo para análisis profundos y críticas honestas de las últimas películas y series de televisión.",
    "about-text-2":"Desde 2024, nuestro equipo de críticos ha estado comprometido con brindar perspectivas únicas y análisis detallados que van más allá de la superficie. Nos enorgullecemos de ofrecer críticas objetivas que te ayudarán a descubrir contenido que verdaderamente vale la pena ver.",
    "about-text-3": "En CriticMedia, creemos que cada película y serie tiene una historia que contar, no solo en la pantalla sino también detrás de ella. Nuestras reseñas exploran elementos técnicos, narrativos y artísticos, proporcionándote una visión completa de cada obra.",
    "contact": "Contacto",
    "contact-phone": "Teléfono: 959 000 000",
    "contact-phone-2": "Teléfono Secundario: 699 000 000",
    "contact-email": "Correo: support@criticmedia.com",

    //footer
    socials: "Redes Sociales",
    privacy: "Política de privacidad",
    use: "Términos de uso",
    copyright: "2024 CriticMedia. Todos los derechos reservados.",
  },
  en: {
    //titulo
    title: "Welcome to CriticMedia",
    subtitle: "Everything you need to know about latest releases and movies",

    // Navbar
    "search-placeholder": "Search in CriticMedia",
    login: "Log In",
    about: "About Us",
    "media-item-1": "Movies",
    "media-item-2": "TV Shows",
    "media-item-3": "Anime",
    home: "Home",

    // Login
    "login-user": "Username",
    "login-pass": "Password",
    "login-signup": "Sign Up",
    "login-search-placeholder-u": "Type your username",
    "login-search-placeholder-p": "Type your password",

    //pestañas
    "movies-show-title": "Movies and TV Shows",
    "movies-show-desc": "Discover the latest trends in entertainment",
    "tab-text-1": "Popular",
    "tab-text-2": "Coming Soon",
    "tab-text-3": "Recommendations",

    "card-title-pop-1": "Breaking Bad",
    "card-title-pop-2": "House of the Dragon",
    "card-title-pop-3": "Attack on Titan",
    "card-title-pop-4": "Interstellar",

    "card-title-prox-1": "Kraven the hunter",
    "card-title-prox-2": "Haunting of the Queen Mary",
    "card-title-prox-3": "Mufasa: The Lion King",
    "card-title-prox-4": "Conclave",

    "card-title-rec-1": "Stranger Things",
    "card-title-rec-2": "Dark",
    "card-title-rec-3": "The Whitcher",
    "card-title-rec-4": "Black Mirror",

    //watchlist
    "wl-title": "Your Watchlist",
    "wl-desc":
      "Save the movies and tv shows you want to watch. Create your personalized list and keep track of all the content you're interested in",

    //celebridades
    "cel-title": "Popular Celebrities",
    "see-all": "See All",
    actor: "Actor",
    actress: "Actress",

    //about
    "about-title": "About CriticMedia",
    "about-text-1": "Welcome to CriticMedia, your definitive destination for in-depth analysis and honest reviews of the latest movies and TV shows.",
    "about-text-2":"Since 2024, our team of critics has been committed to providing unique perspectives and in-depth analysis that goes beyond the surface. We pride ourselves on delivering objective reviews that will help you discover content that is truly worth watching.",
    "about-text-3": "At CriticMedia, we believe that every film and TV show has a story to tell, not just on screen but behind the scenes as well. Our reviews explore technical, narrative, and artistic elements, giving you a comprehensive overview of each work.",
    "contact": "Contact",
    "contact-phone": "Phone: 959 000 000",
    "contact-phone-2": "Secundary Phone: 699 000 000",
    "contact-email": "Email: support@criticmedia.com",

    //footer
    socials: "Social Media",
    privacy: "Privacy Policy",
    use: "Terms of Use",
    copyright: "2024 CriticMedia. All right reserved.",
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

  const userInput = document.querySelector("#userInput");
  if (userInput) {
    userInput.placeholder =
      translations[language]["login-search-placeholder-u"];
  }

  const passInput = document.querySelector("#passInput");
  if (passInput) {
    passInput.placeholder =
      translations[language]["login-search-placeholder-p"];
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
