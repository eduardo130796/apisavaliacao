// WhatsApp-first config
const WHATSAPP_NUMBER = "5561993187274"; // 55 + DDD + number
const WHATSAPP_TEXT = "Olá, gostaria de agendar uma avaliação neuropsicológica na Clínica ÁPIS.";

// Helper
const $ = (s) => document.querySelector(s);

// Update year
document.getElementById('year').textContent = new Date().getFullYear();

// Make WA links work (header CTA, floating button, about link)
const waURL = (msg) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
const headerCTA = $('#ctaHeader');
if(headerCTA){
  headerCTA.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(waURL(WHATSAPP_TEXT), '_blank');
  });
}

const waFloat = $('#whatsappFloat');
if(waFloat){
  waFloat.addEventListener('click', () => window.open(waURL(WHATSAPP_TEXT), '_blank'));
}

const waLink = $('#waPhone');
if(waLink){
  waLink.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(waURL(WHATSAPP_TEXT), '_blank');
  });
}

// Mobile menu toggle
const hamburger = $('#hamburger');
hamburger && hamburger.addEventListener('click', () => {
  const nav = $('#mainNav');
  if(!nav) return;
  if(nav.style.display === 'flex') nav.style.display = '';
  else nav.style.display = 'flex';
});

// small reveal on scroll (subtle)
const reveals = document.querySelectorAll('.white-card, .who-card, .step, .test, .about-inner');
const revealOnScroll = () => {
  const trigger = window.scrollY + window.innerHeight * 0.85;
  reveals.forEach(el => {
    if(el.getBoundingClientRect().top + window.scrollY < trigger){
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity .6s ease, transform .6s ease';
    }
  });
};
reveals.forEach(el => { el.style.opacity = 0; el.style.transform = 'translateY(10px)'; });
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.getElementById("year").textContent = new Date().getFullYear();