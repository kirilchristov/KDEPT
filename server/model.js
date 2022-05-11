const { Pool } = require('pg');
const uri = 'postgres://kxlccucx:r36sXng5kIFdi9SLYyp6L_EvOrm0aomV@lallah.db.elephantsql.com/kxlccucx';

const pool = new Pool({
    connectionString: uri
});

module.exports = {
    query: (textQuery, value, callback) => {
        console.log('quering db: ', textQuery, 'Value: ', value);
        return pool.query(textQuery, value, callback);
    }
}

