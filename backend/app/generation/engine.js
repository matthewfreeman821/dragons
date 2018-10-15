const Generation = require('./index');
const GenerationTable = require('./table');

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
        GenerationTable.storeGeneration(this.generation);
        console.log('new generation', this.generation);
        //This calls the building new generation function when the old generation expires
        this.timer = setTimeout(
            () => this.buildNewGeneration(), 
        this.generation.expiration.getTime() - Date.now()
        );
    }
}

module.exports = GenerationEngine;