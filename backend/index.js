// const Dragon = require('./dragon.js');//Leave the file extension (.js) to remove any confusion later

// const fooey = new Dragon({
//     birthdate: new Date(), 
//     nickname: 'fooey'
// });
// const baloo = new Dragon({//Switched to show that order no longer matters
//     nickname: 'baloo',
//     birthdate: new Date(),
//     traits: [{traitType: 'backgroundColor', traitValue: 'green'}]
// });
// const mimar = new Dragon();

// setTimeout(() => {
//     const gooby = new Dragon();
//     console.log('gooby', gooby);
// }, 3000);

// console.log('fooey', fooey);
// console.log('baloo', baloo);
// console.log('mimar', mimar);

const Generation = require('./generation.js');

const generation = new Generation();

console.log('generation', generation);

const gooby = generation.newDragon();
console.log('gooby', gooby);

setTimeout(() => {
    const mimar = generation.newDragon();
    console.log('mimar', mimar);
}, 15000)