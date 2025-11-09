import request from 'supertest';
import { server } from '../index.js';

// This is Inte
describe('Basic Server Test', () => {
  afterAll((done) => {
    server.close(done);
  });

  it('should respond to GET / with a welcome message', async () => {
    const res = await request(server).get('/');
    expect(res.status).toBe(200);
    expect(res.text).toBe('Welcome to the Chat App Server!');
  });

  it('Should respond to GET /yash with a bad Request', async () => {
    const res = await request(server).get('/yash');
    expect(res.status).toBe(400);
    expect(res.text).toBe('Please provide a valid number in the URL, e.g. 5');
  });

  it('Should respond to GET /7 with a bad Request', async () => {
    const res = await request(server).get('/7');
    expect(res.status).toBe(400);
    expect(res.text).toBe('Please provide a number less than or equal to 6');
  });

  it('should return the factorial of 5 when calling GET /5', async () => {
    const res = await request(server).get('/5');
    expect(res.status).toBe(200);
    expect(res.text).toBe('The factorial of 5 is 120');
  });

  it('Should respond to GET /-4 with a bad Request', async () => {
    const res = await request(server).get('/-4');
    expect(res.status).toBe(400);
    expect(res.text).toBe('Negative numbers do not have factorials.');
  });

});