

// Variables pour le slider

let compteur = 0; // Compteur qui permettra de savoir sur quelle slide nous sommes
let timer, elements, slides, slideWidth;

window.onload = () => {
  // Leconteneur principal du diaporama
  const diapo = document.querySelector(".diapo");

  // Le conteneur de tous les éléments
  elements = document.querySelector(".elements");

  // Le tableau contenant la liste des diapos
  slides = Array.from(elements.children);

  // La largeur visible du diaporama
  slideWidth = diapo.getBoundingClientRect().width;

  // Les deux flèches
  let next = document.querySelector("#nav-droite");
  let prev = document.querySelector("#nav-gauche");

  // les écouteurs d'évènements sur les flèches
  next.addEventListener("click", slideNext);
  prev.addEventListener("click", slidePrev);

  // Le timer du diaporama
  timer = setInterval(slideNext, 4000);

  // Le survol de la souris
  diapo.addEventListener("mouseover", stopTimer);
  diapo.addEventListener("mouseout", startTimer);

  // Le responsive
  window.addEventListener("resize", () => {
    slideWidth = diapo.getBoundingClientRect().width;
    slideNext();
  });
};

// Cette fonction fait défiler le diaporama vers la droite

function slideNext() {
  // J'incrémente le compteur
  compteur++;

  // A la fin du diaporama ça rembobine
  if (compteur == slides.length) {
    compteur = 0;
  }

  // La valeur du décalage
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

//  Le défiler du diaporama vers la gauche

function slidePrev() {
  // Je décrémente le compteur
  compteur--;

  // Quand ca dépasse le diapo je repart à la fin
  if (compteur < 0) {
    compteur = slides.length - 1;
  }

  // Je calcul la valeur du décalage
  let decal = -slideWidth * compteur;
  elements.style.transform = `translateX(${decal}px)`;
}

// Je stoppe le défilement

function stopTimer() {
  clearInterval(timer);
}

// Je redémarre le défilement

function startTimer() {
  timer = setInterval(slideNext, 4000);
}
