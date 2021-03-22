process.env.NODE_ENV = 'test';
const request = require('supertest');
const app = require('./app');
const dbConnection = require('./db/dbConnection');

afterAll(() => dbConnection.destroy());

beforeEach(() => dbConnection.seed.run());

describe('/dates', () => {
  describe(':area', () => {
    describe(':date', () => {
      describe('/GET', () => {
        it('status 200, it returns an object binDay with the correct bin day ', () => {
          return request(app)
            .get('/api/dates/Lacy%20Street/2021-03-18')
            .expect(200)
            .then(({ body }) => {
              console.log(body);
            });
        });
      });
    });
  });
});
describe('/areas', () => {
  describe(':area', () => {
    describe('/GET', () => {
      it('status 200, it returns a list of bin days by area', () => {
        return request(app)
          .get('/api/areas/Lacy%20Street')
          .expect(200)
          .then(({ body }) => {
            console.log(body);
          });
      });
      it('status 200, accepts query getNextDate', () => {
        return request(app)
          .get('/api/areas/Lacy%20Street?getNextDate=true')
          .expect(200)
          .then(({ body }) => {
            console.log(body);
          });
      });
    });
  });
});
