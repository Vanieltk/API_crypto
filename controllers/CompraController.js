const knex = require("../database/dbconfig");
const { post } = require("../routes");

module.exports = {

    async compra(req, res) {
        const compras = await knex("compras")
        res.status(200).json(compras)
    },

    async delete (req, res) {
        const id = req.params.id;
        try {
            await knex("compras").del().where({ id });
            res.status(200).json("Compra Deletada");
        } catch (error) {
            res.status(400).json({ msg: error.message });

        }
    },

    async update (req, res){
        const id = req.params.id;
        const{moeda , preco_compra} = req.body
        try {
        novacompra = await knex('compras').update({ moeda, preco_compra}).where({id})
        res.status(200).json("Incluido com Sucesso")
        }catch(error){
            res.status(400).json({msg: error.message})
        }
    },

    async post (req, res){
        const { moeda, preco_compra } = req.body

        if (!moeda || !preco_compra) {
            res.status(400).json({ erro: "Favor digitar a moeda e o valor" })
            return
        }
        try {
            const novo = await knex("compras").insert({ moeda, preco_compra })
            res.status(201).json({ id: novo [0] })
        } catch (error) {
            res.status(400).json({ erro: error.message })
        }   
    }
    }

