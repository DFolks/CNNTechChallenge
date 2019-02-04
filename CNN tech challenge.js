'use strict';
//CNN tech challenge (1 hour)

let junglePopulation = {
  tiger: {
    count: 0
  },
  monkey: {
    count: 0
  },
  snake: {
    count: 0
  }
};

let animalType = ['tiger', 'monkey', 'snake'];
let foods = ['meat', 'fish', 'bugs', 'grain'];

function createAnimal() {
  let type = animalType[Math.floor(Math.random() * 3 + 1)];
  return {
    type,
    energy: 10,
    addPopulation: type => {
      junglePopulation[type].count++;
    }
  };
}

function makeJungle(num) {
  for (let i = 0; i < num; i++) {
    createAnimal();
  }
}

let eatFood = function(animal) {
  let foodFound = foods[Math.floor(Math.random() * 4 + 1)];

  if (animal.type === 'tiger') {
    if (foodFound !== 'grain') {
      animal.energy += 5;
      return `A tiger finds some ${foodFound} to eat!`;
    } else {
      return 'Tigers cannot eat grain!';
    }
  } else if (animal.type === 'monkey') {
    animal.energy += 7;
    return `A monkey finds some ${foodFound} to eat!`;
  } else {
    animal.energy += 5;
    return `A snake finds some ${foodFound} to eat!`;
  }
};

let makeSound = function(animal) {
  if (animal.type === 'monkey') {
    if (animal.energy < 4) {
      return `${animal.type} is too tired!`;
    } else {
      animal.energy -= 4;
      return 'Oooo Oooo!';
    }
  } else if (animal.type === 'snake') {
    if (animal.energy < 3) {
      return `${animal.type} is too tired!`;
    } else {
      animal.energy -= 3;
      return 'Hisssssss';
    }
  } else {
    if (animal.energy < 3) {
      return `${animal.type} is too tired!`;
    } else {
      animal.energy -= 3;
      return 'Raawwwwr!';
    }
  }
};

let getSleep = function(animal) {
  if (animal.type === 'tiger') {
    animal.energy += 15;
    return 'The tiger gets some sleep!';
  } else {
    animal.energy += 10;
    return `The ${animal.type} gets some sleep!`;
  }
};

let monkeyPlay = function(animal) {
  if (animal.energy >= 8) {
    animal.energy -= 8;
    return 'Oooo Oooo Oooo!';
  } else {
    return 'Monkey is too tired!';
  }
};

let jungleLife = function(animal) {
  if (animal.type === 'monkey') {
    let actions = [monkeyPlay(), eatFood(), getSleep(), makeSound()];
    let action = actions[Math.floor(Math.random() * 4 + 1)];
    return action;
  } else {
    let actions = [eatFood(), getSleep(), makeSound()];
    let action = actions[Math.floor(Math.random() * 3 + 1)];
    return action;
  }
};
console.log(createAnimal());
jungleLife({ type: 'monkey', energy: 10 });
makeJungle(7);
console.log(junglePopulation);
