exports.up = (knex) => {
    return knex.schema.createTable('compras', (table) => {
        table.increments();
        table.string('moeda', 80).notNullable()
        table.decimal('preco_compra',9.2).notNullable()
      })
};

exports.down = (knex) => knex.schema.dropTable('compras')