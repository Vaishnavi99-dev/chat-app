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

});