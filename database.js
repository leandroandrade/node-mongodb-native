'use strict';

const MongoClient = require('mongodb').MongoClient;

const database = 'crud_mongodb';
const url = `mongodb://localhost:27017/${ database }`;

const state = {
    db: null
};

(async function () {
    try {
        const client = await MongoClient.connect(url, { useNewUrlParser: true, auto_reconnect: true });
        state.db = client.db(database);
    } catch (err) {
        console.log(err.stack);
    }
})();

const getDB = () => {
    return state.db;
};

module.exports = {
    getDB
};
