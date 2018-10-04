const Generation = require('./generation.js');

class GenerationEngine {
    constructor() {
        this.generation = null;
        this.timer = null;
    }
    start() {
        this.buildNewGeneration();
    }
    stop() {
        clearTimeout(this.timer);
    }
    buildNewGeneration() {
        this.generation = new Generation();
        console.log('new generation', this.generation);
        //This calls the building new generation function when the old generation expires
        this.timer = setTimeout(
            () => this.buildNewGeneration(), 
        this.generation.expiration.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;