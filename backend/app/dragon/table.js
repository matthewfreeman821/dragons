const pool = require('../../databasePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable {
    static storeDragon(dragon) {
        const { birthdate, nickname, generationId } = dragon;

        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO dragon(birthdate, nickname, "generationId") 
                VALUES ($1, $2, $3) RETURNING id`,
                [birthdate, nickname, generationId],
                (error, response) => {
                    if (error) return reject(error);

                    const dragonId = response.rows[0].id;

                    // Using .map and Promise.all returns an array of promises, ensures the resolve does not happen prior to the completion of the next step
                    Promise.all(dragon.traits.map(({ traitType, traitValue }) => {
                        return DragonTraitTable.storeDragonTrait({
                            dragonId, traitType, traitValue
                        });
                    }))
                    .then(() => resolve({ dragonId }))
                    .catch(error => reject(error));

                }
            )
        });
    }

    static getDragon({ dragonId }) {
        return new Promise((resolve, reject) => {
            pool.query(
                `SELECT birthdate, nickname, "generationId" 
                FROM dragon 
                WHERE dragon.id = $1`,
                [dragonId],
                (error, response) => {
                    if (error) return reject(error);

                    resolve(response.rows[0]);
                }
            )
        });
    }
}

module.exports = DragonTable;