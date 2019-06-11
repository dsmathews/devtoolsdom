console.log('this is the beginning of the file');

const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

let changingText = document.querySelector('.stuff');

function makeGreen() {
  changingText.style.color = '#BADA55';
  changingText.style.fontSize = '50px';
  console.log('changing');
}

changingText.addEventListener('click', makeGreen)

// Regular
console.log('hi. JS is fun!');

// Interpolated
console.log('This is my %s', 'woo')
// Styled
console.log('%c I am the Walrus Koo koo ka choo.', 'font-size: 45px;')

// warning!
console.warn('I told you not to do that!');

// Error :|
console.error('well that did not turn out as you wanted');

// Info
console.info('I had a pancake stick this morning.');
console.dir(changingText);

// Testing
console.assert(changingText.classList.contains('morph'), 'You have chosen poorly.');
// clearing

// Viewing DOM Elements
console.dir(changingText);
console.log(changingText);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  console.log(`This is ${dog.name} and they are ${dog.age} years old.`);
  console.log(`${dog.name} is ${dog.age * 7} in dog years.`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('foo');
console.count('bar');
console.count('bar');

console.count('foo');
console.count('bar');
console.count('bar');
console.count('foo');
console.count('foo');
console.count('foo');
console.count('bar');
console.count('bar');
console.count('bar');
console.count('bar');

// timing

console.time('getting stuff');
fetch('https:api.github.com/users/dsmathews')
.then(data => data.json())
.then(data => {
    console.timeEnd('getting stuff');
    console.log(data);
});

console.table(dogs);

