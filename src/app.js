import { person, sayHello, people } from './lib';

let $ = require('jquery');
$('body').append(`<h1>${person.name} </h1>`);

$.each(people, (key, value) => $('body').append(`<h5>${people[key].name} </h5>`));

console.log(person.name);
console.log(sayHello('Vini'));
console.log('people: ', people);
console.log(require('./lib'));

async function getPosts() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));
