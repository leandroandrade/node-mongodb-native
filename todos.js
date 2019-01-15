'use strict';

const db = require('./database');

const get = async () => {
    return await db.getDB().collection('todo').find().toArray();
};

module.exports = {
    get
};
