const Dragon = require('../dragon');
const {REFRESH_RATE, SECONDS} = require('../config');

const refreshRate = REFRESH_RATE * SECONDS;

class Generation {
    constructor() {
        this.expiration = this.calculateExpiration();
        this.generationId = undefined;
    }
    
    calculateExpiration() {
        //This sets the new generation to be around either 50% longer, or 50% shorter
        const expirationPeriod = Math.floor(Math.random() * (refreshRate/2));
        //Milliseconds until expiration, ternary expression
        const msUntilExpiration = Math.random() < .5 ?
            refreshRate - expirationPeriod :
            refreshRate + expirationPeriod;
        return new Date(Date.now() + msUntilExpiration);
    }

    newDragon() {
        if(Date.now() > this.expiration) {
            throw new Error(`This generation expired on ${this.expiration}`);
        }
        return new Dragon({ generationId: this.generationId });
    }
}

module.exports = Generation;