
exports.seed = function(knex) {
  return knex('compras').del()
    .then(function () {
      return knex('compras').insert([
        {moeda: "Litecoin", preco_compra:200},
        {moeda: "Bitcoin", preco_compra:38500},
      ]);
    });
};
