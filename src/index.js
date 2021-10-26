const express = require('express');
const teams = require('./routes/teams');

const app = express();

app.use(express.json());
app.use(teams);

app.listen(3001, () => {
  console.log('Server is running on PORT 3001');
});
