
exports.up = (knex) => {
    return knex.schema.createTable('tipos', (table) => {
        table.increments()
        table.string('tipo', 60).notNullable()
      })
};

exports.down = (knex) => knex.schema.dropTable('tipos')