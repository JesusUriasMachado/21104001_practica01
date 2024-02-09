const request = require('supertest');
const app = require('./api'); 

test('GET /tasks returns all tasks', async () => {
  const response = await request(app).get('/tasks');
  expect(response.status).toBe(200);
});

test('GET /tasks returns all tasks', async () => {
    const response = await request(app).get('/tasks/1');
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('Task 1');
  });

test('POST /tasks', async () => {
    const response = await request(app)
    .post('/tasks')
    .send({id: 3, title: 'title', description: 'description'});
    expect(response.status).toBe(201);
});

test('PUT /tasks', async () => {
    const response = await request(app).put('/tasks/1')
    .send({id: 1, title: 'title', description: 'description'});
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('title');
});

test('DELETE /tasks', async () => {
    const response = await request(app).delete('/tasks/1');
    expect(response.status).toBe(204);
});