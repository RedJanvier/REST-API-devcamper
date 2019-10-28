const request = require('supertest');
const app = require('../app');

describe('GET /api/v1/bootcamps ', () => {
  it('displays bootcamps', done => {
    request(app)
      .get('/api/v1/bootcamps')
      .expect('Content-Type', 'application/json; charset=utf-8')
      .expect(200, {
        success: true,
        msg: 'Show all bootcamps'
      })
      .then(() => done());
  });
});
