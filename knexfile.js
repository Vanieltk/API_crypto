// Update with your config settings.


// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : '127.0.0.1',
      user : 'root',
      password : '1234',
      database : 'TrocaVidro'
    },
    migrations: {
      tableName: 'migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};

/*
module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host : 'freedb.tech',
      user : 'freedbtech_lucasgarcia',
      password : 'lucasbg',
      database : 'freedbtech_trocavidro'
    },
    migrations: {
      tableName: 'migrations',
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    }
  }
};
*/