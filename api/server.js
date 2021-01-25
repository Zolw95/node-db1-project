const express = require("express");
const server = express();
const db = require("../data/dbConfig.js");
const accountsRouter = require("../data/accounts/accountsRouter");

server.use(express.json());
server.use(accountsRouter);

// Connect to database
db();

module.exports = server;
