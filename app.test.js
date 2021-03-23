process.env.NODE_ENV = 'development';
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
              expect(body).toMatchObject({
                date: 'Thu Mar 18 2021',
                area: 'Lacy Street',
                colour: expect.any(String)
              });
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
            expect(Array.isArray(body)).toBe(true);
            expect(body[0]).toMatchObject({
              recyclableItems: expect.any(String),
              area: 'Lacy Street',
              colour: expect.any(String),
              date: expect.any(String)
            });
          });
      });

      it('status 200, accepts query getNextDate', () => {
        return request(app)
          .get('/api/areas/Lacy%20Street?getNextDate=true')
          .expect(200)
          .then(({ body }) => {
            expect(body).toMatchObject({
              recyclableItems: expect.any(String),
              area: 'Lacy Street',
              colour: expect.any(String),
              date: expect.any(String)
            });
          });
      });
    });
  });
});

describe('/colours', () => {
  describe('/GET', () => {
    it.only('status 200, it returns an object with a key of recyclableitems', () => {
      return request(app)
        .get('/api/colours/green')
        .expect(200)
        .then(({ body: { recyclableItems } }) => {
          console.log(recyclableItems);
          expect(recyclableItems).toMatchObject({
            colour: 'green',
            recyclableItems: expect.any(String)
          });
        });
    });
  });
});
