const request = require('supertest');
const db = require('../db');
const app = require('../app');

require('dotenv').config();

/**
 * Connect to the database before running any tests.
 */
beforeAll(async () => {
    await db.sequelize.sync({ force: true });
});

describe('GET /persons/all', () => {
    it('should return all persons', async () => {
        const response = await request(app).get('/persons/all');
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /persons/:id', () => {
    it('should return a person', async () => {
        const person = await db.Person.create({
            firstName: 'John',
            lastName: 'Doe',
            id: 1
        });
        const response = await request(app).get(`/persons/${person.id}`);
        console.log('Response: ' + JSON.stringify(response));
        expect(response.statusCode).toBe(200);
        await db.Person.destroy({
            where: {
                id: 1
            }
        });
    });
});


describe('PUT /persons', () => {
    it('should create a new person', async () => {
        const response = await request(app)
            .put('/persons')
            .send({
                firstName: 'Robert',
                lastName: 'Davis',
                id: 1
            });
        expect(response.statusCode).toBe(200);
    });
});

describe('DELETE /persons/:id', () => {
    it('should delete a person', async () => {
        const response = await request(app).delete(`/persons/1`);
        expect(response.statusCode).toBe(200);
        const person = await db.Person.findByPk(1);
        expect(person).toBeNull();
    });
});

/**
 * Close the database connection after running all the tests.
 */
afterAll(async () => {
    await db.sequelize.close();
}); 