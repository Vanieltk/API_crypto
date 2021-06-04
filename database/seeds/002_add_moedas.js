
exports.seed = function(knex) {
  return knex('moedas').del()
    .then(function () {
      return knex('moedas').insert([
        {moeda: "Litecoin", tipo_id:1, preco:200, foto:"https://libertex.org/sites/default/files/styles/blog_detail_hero/public/2020-11/litecoin_main.jpg?itok=ywix1YmO"},
        {moeda: "Bitcoin", tipo_id:1, preco:38500, foto:"https://criptoeconomia.com.br/wp-content/uploads/2020/09/bitcoin-logo.png"},
        {moeda: "Ren", tipo_id:2, preco:0.50, foto:"https://defirate.com/wp-content/uploads/2020/06/Ren-Protocol-Review.png"}
      ]);
    });
};
