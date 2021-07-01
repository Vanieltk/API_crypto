
exports.seed = function(knex) {
  return knex('tipos').del()
    .then(function () {
      return knex('tipos').insert([
        {tipo:'Criptomoeda'},
        {tipo:'Defi'},
        {tipo:'Token'},
        {tipo:'Fan Token'},
        {tipo:'Real'}
      ]);
    });
};
