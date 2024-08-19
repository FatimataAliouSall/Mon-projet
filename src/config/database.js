const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017/'; 
const client = new MongoClient(url);


async function connectToDatabase() {
    try {
        await client.connect();
         
        const db = client.db("customer_satisfaction")
        console.log('Connected to MongoDB');
        return db;
    } catch (err) {
        console.error('Error connecting to MongoDB:', err);
        throw err;  
    }
}


module.exports = { connectToDatabase };
