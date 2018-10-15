const pool = require('../../databasePool');

class GenerationTable {
    static storeGeneration(generation) {
        return new Promise((resolve, reject) => {
            pool.query(
                'INSERT INTO generation(expiration) VALUES($1) RETURNING id',//the $1 refers to the [generation.expiration]
                [generation.expiration],
                (error, response) => {
                    if(error) return reject(error);
                    
                    // console.log(response.rows[0].id);
                    const generationId = response.rows[0].id;
                    // console.log(generationId)

                    resolve({ generationId });
                }
            );
        });
    }
}

module.exports = GenerationTable;