const sleepBtn = document.querySelector("#sleep-btn");
const playBtn = document.querySelector("#play-btn");
const eatBtn = document.querySelector("#eat-btn");
const restartBtn = document.querySelector("#restart-btn");
const petEnergy = document.querySelector(".energy-number");
const petHunger = document.querySelector(".hunger-number");
const petPlayMessage = document.querySelector(".pet-msg");
const petEnergyMessage = document.querySelector(".energy-msg");
const petHungerMessage = document.querySelector(".hunger-msg");

let energy = 100;
let hunger = 0;
let estatus;

function petFunctions() {
  /* let hunger = 100; */
  let age = 0;
  petEnergy.textContent = energy;
  petHunger.textContent = hunger;

  return {
    sleep: function () {
      if (energy <= 80) {
        clearInterval(timePass);
        petEnergyMessage.textContent = "I'm sleeping!";
        estatus = "sleeping";
        age++;
        energy += 20;

        return {
          energy,
          age,
          estatus,
        };
      } else if (estatus === "sleeping") {
        petEnergyMessage.textContent = "I just slept";
        petEnergy.textContent = energy;
        return energy;
      } else {
        petEnergyMessage.textContent = "I don't need to sleep";
        petEnergy.textContent = energy;
        return energy;
      }
    },

    play: function () {
      if (energy > 30) {
        petPlayMessage.textContent = "I'm running";
        estatus = "running";
        age++;
        energy = energy - 10;
        hunger = hunger + 10;
        petEnergy.textContent = energy;
        petHunger.textContent = hunger;
        return {
          energy,
          hunger,
          age,
          estatus,
        };
      } else {
        petPlayMessage.textContent = "I'm tired";
      }
    },

    eat: function () {
      if (energy <= 90) {
        clearInterval(timePass);
        petHungerMessage.textContent = "I'm eating";
        estatus = "eating";
        age++;
        hunger = hunger - 10;
        console.log(hunger);
        energy = energy + 10;
        petEnergy.textContent = energy;
        petHunger.textContent = hunger;
        return {
          energy,
          age,
          estatus,
          hunger,
        };
      } else if (energy <= 90 && estatus === "eating") {
        petHungerMessage.textContent = "I'm full";
        petEnergy.textContent = energy;
        return energy;
      } else {
        petHungerMessage.textContent = "I just ate";
        petEnergy.textContent = energy;
        return energy;
      }
    },
  };
}

const myPet = petFunctions();

sleepBtn.addEventListener("click", () => myPet.sleep());
playBtn.addEventListener("click", () => myPet.play());
eatBtn.addEventListener("click", () => myPet.eat());

let timePass = setInterval(() => {
  energy = energy - 1;
  petEnergy.textContent = energy;
}, 10000);

let sleeping = setInterval(() => {
  energy = energy++;
  petEnergy.textContent = energy;
}, 1000);

function restart() {
  energy = 100;
  hunger = 0;
  petPlayMessage.textContent = "This was fun, let's do this again!";
  petHunger.textContent = hunger;
  petEnergy.textContent = energy;
}

restartBtn.addEventListener("click", restart);
