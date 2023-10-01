const os = require('os');   //Loading the 'os' module as a constant
const fs = require('fs');

gender = [ "M", "F" ];
firstNamesM = [ "Radomir", "Wenanty", "Dragomir", "Bolebor", "Siemowit", "Kaleb", "Eliasz", "Męczywór", "Apollo", "Nino", "Makary", "Borysław", "Zbyszko", "Kevin", "Aram", "Trevor", "Jonasz", "Barnaba", "Herbert", "Anatol", "Eliot", "Ruben", "Orion" ];
firstNamesF = [ "Bella", "Carmina", "Debora", "Alena", "Adelajda", "Freja", "Miliana", "Aura", "Lovisa", "Amaya", "Gaja", "Faustyna", "Vera", "Miriam", "Dajana", "Ines", "Sawa", "Ofelia", "Neonila", "Eleonora", "Frida", "Ariadna", "Ludwika", "Anaid", "Eunika", "Berenika" ];
lastName = [ "Boligłowa", "Śpioch", "Kwasigroch", "Pielucha", "Nieuważny", "Babola", "Bolączka", "Bzdura", "Porażka", "Ciapciak", "Cincio", "Cycek", "Dusza", "Gamoń", "Jakktochce", "Kiełbasa", "Kusibab", "Małolepszy", "Moczygęba", "Motowidełko", "Ojczenasz", "Orzeszek", "Pędziwiatr", "Porąbaniec" ];
ageMin = 18;
ageMax = 78;
people = [];

/**
 * Randomizing one element from the array
 */
const randomChoice = ( table ) => {
  let item = table[Math.floor(Math.random()*table.length)];
  return item;
};
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for( let i = 0; i < 20; i++ ){
  let person = {};

  person.gender = randomChoice(gender);
  if (person.gender === "M"){
    person.firstName = randomChoice(firstNamesM);
  } else {
    person.firstName = randomChoice(firstNamesF);
  }
  person.lastName = randomChoice(lastName);
  person.age = randomNumber(ageMin, ageMax);
  person.mail = (person.firstName.toLowerCase() + "." + person.lastName.toLowerCase() + "@gmail.com");
  person.phone = randomNumber(100000000, 999999999)

  //adding a 'person' object filled with random data to the 'people' array
  people.push(person);
}

// changing the person object to json format
const peopleJson = JSON.stringify({people: people}, null, "\t");

fs.writeFile('people.json', peopleJson, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

