const request = require('supertest');
const app = require('../server');

describe('GET /api/v1/bootcamps ', () => {
  it('displays bootcamps', done => {
    expect.assertions(1);
    request(app)
      .get('/api/v1/bootcamps')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200)
      .end((err, res) => {
        if (err) throw err;
        expect(res.body).toMatchObject({
          success: true,
          msg: expect.any(String)
        });
        done();
      });
  });
});
