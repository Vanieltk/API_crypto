
const request = require('supertest')
const app = require('../app')
const knex = require("../database/dbconfig")

let compras;

beforeEach(() => {
    compras = [{
        moeda:'BTC',
        preco_compra: 180000

    },{
        moeda:'ETH',
        preco_compra: 2000
    },{
        moeda:'link',
  }];
});
//incluir

test('deve ser possivel adicionar uma nova compra', async () => {
    const res = await request(app)
        .post('/compras')
        .send(compras[0]);

    expect(res.body).toMatchObject({ ...compras[0].preco_compra})
});

test('deve ser statusCode 400 ao nao enviar nome da moeda ou valor de Compra', async () => {
    const res = await request(app)
        .post('/compras')
        .send(compras[2])
    expect(400)
});



// listar

test('deve listar as Compras', async () => {
    const res = await request(app)
        .get('/compras')
    expect(res).toMatchObject(res)
})

test('deve ser statusCode 200 ao listar as Compras', async () => {
    const res = await request(app)
        .get('/compras')
    expect(200)
})


//deleta
test('deve deletar uma Compra que foi efetuada', async () => {
    const res = await request(app).delete('/compras/1')
    expect(res.body).toBe("Compra Deletada")
})

// alteração
test('deve ser possivel atualizar uma compra', async () => {
    const response = await request(app)
        .post('/compras')
        .send(compras[0]);

    const updatedCompras = {
        ...compras[0],
        moeda: 'Bitcoin'
    };

    const responseUpdate = await request(app)
        .put(`/compras/${response.body.id}`)
        .send(updatedCompras);
    expect(responseUpdate.body).toMatchObject(updatedCompras);
})
