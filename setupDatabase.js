const fs = require('fs');
const path = require('path');
const mysql = require('mysql2');
const config = require('./config/config.json'); 
 
const dbConfig = config.development;

const pool = mysql.createPool({
    host: dbConfig.host,
    user: dbConfig.username,
    password: dbConfig.password, 
    database: dbConfig.database,
    port: dbConfig.port,
    multipleStatements: true
});

function runScript(scriptPath) {
    return new Promise((resolve, reject) => {
        const script = fs.readFileSync(path.join(__dirname, scriptPath), 'utf-8');
        pool.query(script, (err, results) => {
            if (err) return reject(err);
            resolve(results);
        });
    });
}

async function setupDatabase() {
    try {
        await runScript('schema.sql');
        console.log('Database schema created or reset.');
        await runScript('seed.sql');
        console.log('Database seeded successfully.');
    } catch (error) {
        console.error('Failed to setup database:', error);
    } finally {
        pool.end();
    }
}

module.exports = setupDatabase;
