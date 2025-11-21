/* =========================================================
   CLÍNICA ÁPIS — JAVASCRIPT REVISADO
   Funções:
   - Menu mobile (hambúrguer)
   - Smooth scrolling
   - Efeito de fade nos cards
   - Efeito de fade nos títulos ao aparecer
   - WhatsApp integrado
   ========================================================= */

/* ========== 1. BOTÕES WHATSAPP ========== */

const waNumber = "5561993187274";
const waMsgHero = "Olá! Gostaria de agendar uma avaliação neuropsicológica.";
const waMsgContato = "Olá! Gostaria de informações sobre atendimentos na Clínica ÁPIS.";

// Hero CTA
const btnHero = document.getElementById("whatsappHero");
if (btnHero) {
  btnHero.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsgHero)}`;
}

// Header CTA
const btnHeader = document.getElementById("whatsappHeader");
if (btnHeader) {
  btnHeader.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsgHero)}`;
}

// Contato CTA
const btnContato = document.getElementById("whatsappContato");
if (btnContato) {
  btnContato.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsgContato)}`;
}

// CTA Final
const btnCTA = document.getElementById("whatsappCTA");
if (btnCTA) {
  btnCTA.href = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMsgHero)}`;
}


/* ========== 2. MENU MOBILE ========== */

const hamburguer = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobileNav");

if (hamburguer && mobileNav) {
  hamburguer.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });

  // Fecha menu ao clicar em um link
  const mobileLinks = mobileNav.querySelectorAll("a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
    });
  });
}


/* ========== 3. SMOOTH SCROLLING (rolagem suave premium) ========== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    }
  });
});


/* ========== 4. ANIMAÇÃO DE APARECER (fade-in suave) ========== */

const fadeElements = document.querySelectorAll(
  ".avaliacao-card, .beneficia-card, .funciona-card, .depo-card, .endereco-card, .sobre-image-wrapper, .hero-left, .hero-right"
);

const appear = () => {
  fadeElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0px)";
    }
  });
};

window.addEventListener("scroll", appear);
window.addEventListener("load", () => {
  fadeElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "opacity .7s ease, transform .7s ease";
  });
  appear();
});


/* ========== 5. DESTAQUE DINÂMICO NO MENU (bordas animadas) ========== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active-link");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-link");
    }
  });
});

