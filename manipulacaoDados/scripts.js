const pessoas = [
    { name: "Fabiana Araujo", age: 33 },
    { name: "Gabriel Gomes", age: 25 },
    { name: "Fernando Henrique", age: 17 },
    { name: "Ana Luiza", age: 2 },
    { name: "Geralda do Nascimento", age: 93 },
    { name: "Miguel Souza", age: 70 },
    { name: "Antonio Miguel", age: 69 },
];

// 3)
const getPersonByName = (name) => {
    return pessoas.find(person => person.name == name);
};
// Caso o input venha do usuário, utilizar essa função
const getPersonByNameNoSensitive = (name)  => {
    return pessoas.find(person => person.name.toLowerCase() == name.toLowerCase());
}

// 4)
const getFullNames = () => {
    return pessoas.map(person => person.name);
};
const getFirstNames = () => {
    return pessoas.map(person => person.name.split(" ")[0]);
};


// 5)
// Considerando que queremos mudar o array existente
const insertIds = () => {
    let id = 1;
    pessoas.forEach(person => person.id = id++ );
}
// Considerando a criação de um novo array e a manutenção do array "pessoas"
const arrayWithPrimaryKeys = () => {
    let id = 1;
    return pessoas.map(person => ({ id: id++, name: person.name, age: person.age }));
}


// 6)
const getPeopleOverAge = () => {
    return pessoas.filter(person => person.age >= 18);
}


// 7)
const peopleAgeAverage = () => {
    return pessoas.reduce((total, person) => total + person.age, 0) / pessoas.length;
}

// TESTES
//console.log(getPersonByName("Gabriel Gomes")); // --> 3
console.log(getPersonByNameNoSensitive("gabriel GOMES")); // --> 3
//console.log(getFullNames()); // --> 4
//console.log(getFirstNames()); // --> 4 
//console.log(insertIds()); // --> 5
//console.log(arrayWithPrimaryKeys()); // --> 5
//console.log(getPeopleOverAge()); // --> 6
//console.log(peopleAgeAverage()); // --> 7  
