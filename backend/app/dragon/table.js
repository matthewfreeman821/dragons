const pool = require('../../databasePool');
const DragonTraitTable = require('../dragonTrait/table');

class DragonTable {
    static storeDragon(dragon) {
        const { birthdate, nickname, generationId, isPublic, saleValue, sireValue } = dragon;

        return new Promise((resolve, reject) => {
            pool.query(
                `INSERT INTO dragon(birthdate, nickname, "generationId", "isPublic", "saleValue", "sireValue") 
                VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
                [birthdate, nickname, generationId, isPublic, saleValue, sireValue],
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
                `SELECT birthdate, nickname, "generationId", "isPublic", "saleValue", "sireValue" 
                FROM dragon 
                WHERE dragon.id = $1`,
                [dragonId],
                (error, response) => {
                    if (error) return reject(error);

                    if (response.rows.lengthe === 0) return reject(new Error('no dragon'));

                    resolve(response.rows[0]);
                }
            )
        });
    }

    static updateDragon({ dragonId, nickname, isPublic, saleValue, sireValue }) {
        const settingsMap = { nickname, isPublic, saleValue, sireValue };

        const validQueries = Object.entries(settingsMap).filter(([settingKey, settingValue]) => {
            if (settingValue !== undefined) {
                return new Promise((resolve, reject) => {
                    pool.query(
                        `UPDATE dragon SET "${settingKey}" = $1 WHERE id = $2`,
                        [settingValue, dragonId],
                        (error, response) => {
                            if (error) return reject(error);

                            resolve();
                        }
                    )
                });
            }
        });

        return Promise.all(validQueries);
    }
}

///////////////////////////////////////////////////
// Below debugs to ensure getDragon function works
//////////////////////////////////////////////////
// DragonTable.getDragon({ dragonId: 1 })
//     .then(dragon => console.log(dragon))
//     .catch(error => console.error(error));

///////////////////////////////////////////////////
// Below debugs to ensure getDragon function works
//////////////////////////////////////////////////
// DragonTable.updateDragon({ dragonId: 1, nickname: 'Farvanaugh' })
//     .then(() => console.log('successfully updated dragon'))
//     .catch(error => console.error('error', error));

module.exports = DragonTable;