// rest parameter
const double = (...numbers) => {
  console.log(numbers)
  console.log(numbers.map((num) => num * 2))
}

const result = double(1, 2, 3);
// console.log(result)

// spread parameter
const people = ['Janie', 'Smith', 'Ben'];
const members = ['Quick', 'Fast', 'Slow', ...people]
console.log(members);


// spread syntax on objects

const person = {
  name: 'John',
  surename: 'Doe',
  age: 32
}


const personClone = { ...person, location: 'London' }

console.log(personClone)