const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; 
const client = new MongoClient(uri);

let db;

async function connectToDatabase() {
    try {
        await client.connect();
        db = client.db('customer_satisfaction');  
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;  
    }
}

function getDb() {
    if (!db) {
        throw new Error('Database not initialized');
    }
    return db;
}

module.exports = { connectToDatabase, getDb };
