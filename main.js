import './src/styles/index.css'

const btnClose = document.getElementById("btnClose");
const sectionSeleccionador = document.getElementById("sectionSeleccionador");
const lego1 = document.getElementById("lego1");
const lego2 = document.getElementById("lego2");
const lego3 = document.getElementById("lego3");
const idCards = document.getElementById("idCards");

btnClose.addEventListener("click", () => {
  console.log("Hola Lego");
  sectionSeleccionador.style.visibility = "hidden";
})

const inputsCardsSlider = `
    <input type="radio" name="slider-1" id="radio-1" checked>
    <input type="radio" name="slider-1" id="radio-2">
    <input type="radio" name="slider-1" id="radio-3">`


const captainAmericaLego = `
          <div class="cards">
            <label for="radio-1" id="card1" class="cardLego">
              <img src="./src/assets/images/CaptainAmerica1.png" alt="">
            </label>
            <label for="radio-2" id="card2" class="cardLego">
              <img src="./src/assets/images/CaptainAmerica2.png" alt="">
            </label>
            <label for="radio-3" id="card3" class="cardLego">
              <img src="./src/assets/images/CaptainAmerica3.png" alt="">
            </label>
          </div>
`;

const spiderManLego = `
          <div class="cards">
            <label for="radio-1" id="card1" class="cardLego">
              <img src="./src/assets/images/SpiderMan1.png" alt="">
            </label>
            <label for="radio-2" id="card2" class="cardLego">
              <img src="./src/assets/images/SpiderMan2.png" alt="">
            </label>
            <label for="radio-3" id="card3" class="cardLego">
              <img src="./src/assets/images/SpiderMan3.png" alt="">
            </label>
          </div>
`;

const blackWidowLego = `
          <div class="cards">
            <label for="radio-1" id="card1" class="cardLego">
              <img src="./src/assets/images/BlackWidow1.png" alt="">
            </label>
            <label for="radio-2" id="card2" class="cardLego">
              <img src="./src/assets/images/BlackWidow2.png" alt="">
            </label>
            <label for="radio-3" id="card3" class="cardLego">
              <img src="./src/assets/images/BlackWidow3.png" alt="">
            </label>
          </div>
`;


lego1.addEventListener("click", () => {
  sectionSeleccionador.style.visibility = "visible";
  idCards.innerHTML = inputsCardsSlider + captainAmericaLego
})


lego2.addEventListener("click", () => {
  sectionSeleccionador.style.visibility = "visible";
  idCards.innerHTML = inputsCardsSlider + spiderManLego;
})

lego3.addEventListener("click", () => {
  sectionSeleccionador.style.visibility = "visible";
  idCards.innerHTML = inputsCardsSlider + blackWidowLego;
})






