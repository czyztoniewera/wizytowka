// script.js

// zegar w stopce
function pokazCzas() {
  var teraz = new Date();
  var godz = String(teraz.getHours()).padStart(2, '0');
  var min  = String(teraz.getMinutes()).padStart(2, '0');
  var sek  = String(teraz.getSeconds()).padStart(2, '0');
  document.getElementById('clock').textContent = godz + ':' + min + ':' + sek;
}
pokazCzas();
setInterval(pokazCzas, 1000);

// rok w stopce
document.getElementById('year').textContent = new Date().getFullYear();

// navbar - dodaje klasę po scrollu
var navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
});

// hamburger menu
var hamburger = document.getElementById('hamburger');
var navLinks  = document.getElementById('nav-links');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
  console.log('hamburger klikniety');
});

// zamknij menu po kliknięciu linka
navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

// przycisk wróć na górę
var btnGora = document.getElementById('back-to-top');
window.addEventListener('scroll', function() {
  btnGora.classList.toggle('visible', window.scrollY > 350);
});
btnGora.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// zaznaczanie klikniętej karty projektu
var karty = document.querySelectorAll('.project-card');
karty.forEach(function(karta) {
  karta.addEventListener('click', function() {
    karty.forEach(function(k) { k.classList.remove('selected'); });
    karta.classList.add('selected');
  });
});

// scroll reveal
var obserwator = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obserwator.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(function(el) {
  obserwator.observe(el);
});

// jQuery - smooth scroll
$(document).ready(function() {

  // płynne przewijanie do sekcji po kliknięciu linka
  $('a[href^="#"]').on('click', function(e) {
    var cel = $(this).attr('href');
    if ($(cel).length) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $(cel).offset().top - 70 }, 600);
    }
  });

  // karty projektów pojawiają się kolejno (fadeIn)
  $('.project-card').hide();
  setTimeout(function() {
    $('.project-card').each(function(i) {
      var karta = $(this);
      setTimeout(function() { karta.fadeIn(400); }, i * 120);
    });
  }, 300);

});