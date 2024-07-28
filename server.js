const express = require('express');
const app = express();
const port = 300;

app.get('/add', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);



  const sum = num1 + num2;
  res.send(`The sum of ${num1} and ${num2} is ${sum}`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
