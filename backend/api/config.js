"use strict";

require('dotenv').config();
require('colors');

const SECRET_KEY = process.env.SECRET_KEY || 'wyllie-dev';

const PORT = +process.env.PORT || 3001;

function getDatabaseUri() {
    return (process.env.NODE_ENV === 'test')
        ? 'postgresql:///dynamic_restaurant_test'
        : process.env.DATABASE_URL || 'postgresql:///dynamic_restaurant';
}

console.log("Dynamic_restaurant Config:".green);
console.log("SECRET_KEY:".yellow, SECRET_KEY);
console.log("PORT:".yellow, PORT.toString());
console.log("Database:".yellow, getDatabaseUri());
console.log("---");

module.exports = {
    SECRET_KEY,
    PORT,
    getDatabaseUri,
};