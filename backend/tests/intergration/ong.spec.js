const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {

  beforeEach( async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll( async () => {
    await connection.destroy();
  })

  it('Deveria criar uma nova ONG', async () => {
    const response = await request(app).post('/ongs')
    //.set('Authorization', 'aaaaa') PARA ADICIONAR UM HEADER
    .send({
      name: "TESTE1",
      email: "teste@teste.com.br",
      whatsapp: "11963518745",
      city: "Osasco",
      uf: "SP"
    });

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);

  })
})