import { person, sayHello } from './lib';
// require('!style-loader!css-loader!./css/style.css');
require('../css/style.css');

console.log(person.name);

console.log(sayHello('Vini'));

async function getPosts() {
  const response = await fetch('http://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
}

getPosts().then(posts => console.log(posts));
