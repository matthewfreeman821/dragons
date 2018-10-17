////////////////////////////////////////////////////////////////////////
//This was removed from production after creating the Generation Class
////////////////////////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////////////////////////////
//This was removed from production after creating the Generation Engine Class
//////////////////////////////////////////////////////////////////////////////

// const Generation = require('./generation.js');

// const generation = new Generation();

// console.log('generation', generation);

// const gooby = generation.newDragon();
// console.log('gooby', gooby);

// setTimeout(() => {
//     const mimar = generation.newDragon();
//     console.log('mimar', mimar);
// }, 15000)

///////////////////////////////////////////////////////////////////////////////////
//This was setup when the Generation Engine was created in order to test
///////////////////////////////////////////////////////////////////////////////////
const express = require('express');
const GenerationEngine = require('./generation/engine');
const dragonRouter = require('./api/dragon');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/dragon', dragonRouter);
app.use('/generation', generationRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        type: 'error', message: err.message
    })
});

engine.start();

module.exports = app;