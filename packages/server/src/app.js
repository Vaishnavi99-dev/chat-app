import express from 'express';
import factorial from './utils.js';
  
const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the Chat App Server!');
});

// Route for number 

app.get('/:num', (req, res) => {
  const num = Number(req.params.num);

  if (isNaN(num)) {
    return res.status(400).send('Please provide a valid number in the URL, e.g. 5');
  }

  if(num > 6) {
    return  res.status(400).send('Please provide a number less than or equal to 6');
  }

  try {
    const result = factorial(num);
    res.send(`The factorial of ${num} is ${result}`);
  } catch (error) {
    res.status(400).send(error.message);
  } 
});

export default app;