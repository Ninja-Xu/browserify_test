var answer = require('the-answer')
var debug = require('debug')

var Person = require('./modules/Person')
var delay = require('./modules/delay')

// Disable log in production
const log = debug('app:log')

debug.enable('*')
log('log is enabled!')


let p = new Person('Mike', 26)
log(`answer is ${answer}`)
p.greeting();
let main = document.querySelector('#main')
let arr = [1, 2, 3, 4, 1]
log(arr.includes(2))
log(arr.includes(5))
main.innerHTML = p.getName();
(async function() {
  let result = await delay(5);
  main.innerHTML = result;
})();