
exports.up = (knex) => {
    return knex.schema.createTable('moedas', (table) => {
        table.increments();
        table.string('moeda', 80).notNullable()
        table.string('foto').notNullable()
        table.decimal('preco',9.2).notNullable()
        table.boolean('destaque').notNullable().defaultTo(false)
        
        table.integer('tipo_id').notNullable().unsigned()
        table.foreign('tipo_id')
            .references('tipos.id')
            .onDelete('restrict')
            .onUpdate('cascade')

        table.timestamps(true, true)
      })
};

exports.down = (knex) => knex.schema.dropTable('moedas')