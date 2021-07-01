"use strict";const knex = require("../database/dbconfig");
const { post } = require("../routes");

module.exports = {

    async tipo(req, res) {
        const tipos = await knex("tipos")
        res.status(200).json(tipos)
    }
}