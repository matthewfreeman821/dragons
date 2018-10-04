const Dragon = require('./dragon.js');//Leave the file extension (.js) to remove any confusion later

const fooey = new Dragon({
    birthdate: new Date(), 
    nickname: 'fooey'
});
const baloo = new Dragon({//Switched to show that order no longer matters
    nickname: 'baloo',
    birthdate: new Date()
});
const mimar = new Dragon();

setTimeout(() => {
    const gooby = new Dragon();
    console.log('gooby', gooby);
}, 3000);

console.log('fooey', fooey);
console.log('baloo', baloo);
console.log('mimar', mimar);