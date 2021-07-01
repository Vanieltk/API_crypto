"use strict";const knex = require("../database/dbconfig")

module.exports = {


    async index(req, res) {
        const moedas = await knex
        .select("mo.id", "mo.moeda", "ti.tipo", "mo.preco", "mo.foto" )
        .from("moedas as mo")
        .leftJoin("tipos as ti", "mo.tipo_id", "ti.id")
        res.status(200).json(moedas)
    },

    async store(req, res) {
        const { moeda, tipo_id, preco, foto } = req.body
        
        if (!moeda || !tipo_id || !preco || !foto) {
            res.status(400).json({ erro: "Favor Enviar moeda, tipo_id, preço e foto" })
            return
        }

        try {
            const novo = await knex("moedas").insert({ moeda, tipo_id, preco, foto })
            res.status(201).json({ id: novo [0] })
        } catch (error) {
            res.status(400).json({ erro: error.message })
        }
    },
}