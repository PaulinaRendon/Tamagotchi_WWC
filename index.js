const sleepBtn = document.querySelector('#sleep-btn');
const playBtn = document.querySelector('#play-btn');
const eatBtn = document.querySelector('#eat-btn');
const restartBtn = document.querySelector('#restart-btn');
const petEnergy = document.querySelector('.energy-number');
const petHunger = document.querySelector('.hunger-number');
const petMessage = document.querySelector('.pet-msg');

let energy = 100;
let hunger = 0;
let estatus;

function petFunctions() {
  let hunger = 100;
  let age = 0;
  petEnergy.textContent = energy;
  petHunger.textContent = hunger;

  return {
    sleep: function () {
      if (energy <= 80) {
        clearInterval(timePass);
        petMessage.textContent = "I'm sleeping!"
        estatus = 'sleeping';
        age++;
        energy += 20;

        return {
          energy,
          age,
          estatus,
        };

      }  else if (estatus === 'sleeping') {
        petMessage.textContent = "I just slept";
        petEnergy.textContent = energy;
        return energy;
      } else {
        petMessage.textContent = "I don't need to sleep";
        petEnergy.textContent = energy
        return energy;
      }
    },

    play: function () {
      if (energy > 30) {
        petMessage.textContent = "I'm running";
        estatus = "running";
        age++;
        energy = energy - 30;
        petEnergy.textContent = energy;
        return {
          energy,
          age,
          estatus,
        }
      } else {        
        petMessage.textContent = "I'm tired";
      };
    },

    eat: function () {
      if (estatus !== 'eating' && energy <= 90) {        
        petMessage.textContent = "I'm eating";
        estatus = "eating";
        age++;
        energy = energy + 10;
        petEnergy.textContent = energy;
        return {
          energy,
          age,
          estatus,
        };
      } else if (energy <= 90) {        
        petMessage.textContent = "I'm full";
        petEnergy.textContent = energy
        return energy;
      } else {        
        petMessage.textContent = "I just ate";
        petEnergy.textContent = energy
        return energy;
      }
    }

  }
}  

const myPet = petFunctions();

sleepBtn.addEventListener('click', () => myPet.sleep());
playBtn.addEventListener('click', () => myPet.play());
eatBtn.addEventListener('click', () => myPet.eat());

let timePass = setInterval(() => {
  energy = energy - 1;
  petEnergy.textContent = energy
}, 2000);

let sleeping = setInterval(() => {
  energy = energy++;
  petEnergy.textContent = energy
}, 1000);