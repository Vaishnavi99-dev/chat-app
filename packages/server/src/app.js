import express from 'express';
  
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Chat App Server!');
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

export default app;