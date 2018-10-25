const request = require('supertest');
const server = require('./api/server');

describe('server', () => {
    it('can run tests', () => {
        expect(true).toBeTruthy();
    });
    it('can run multiple tests', () => {
        expect(false).toBeFalsy();
    });

    describe('GET / route', () => {
        it('should return status code 200', async () => {
            const response = await request(server).get('/');

            expect(response.status).toBe(200);
        });
        it('should return JSON', async () => {
            const response = await request(server).get('/');

            expect(response.type).toBe('application/json');
        });
        it('should return { message: "server up" }', async () => {
            const response = await request(server).get('/');

            expect(response.body).toEqual({ message: "server up" });
        });
    });

    describe('POST /hello/:name route', () =>{
        it('should greet the person based off of name and lastName variables', async () => {
            const name = 'Keiran';
            const lastName = 'Kozlowski';
            const expected = { hello: 'Keiran Kozlowski' };

            const response = await request(server).post(`/hello/${name}`).send( { lastName } );

            expect(response.body).toEqual(expected);
        });
        it('should give the person lastName Doe if none is entered', async () => {
            const name = 'Keiran';
            const expected = { hello: 'Keiran Doe' };

            const response = await request(server).post(`/hello/${name}`);

            expect(response.body).toEqual(expected);
        });
    });

    describe('DELETE /hello/:name route', () =>{
        it('should delete the given name entry', async () => {
            
        });
    });
});