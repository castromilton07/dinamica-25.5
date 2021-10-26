const express = require('express');
const { createTeam, readTeam } = require('../controllers/teams');
const rescue = require('express-rescue');

const teams = express.Router();

teams.use((err, _req, res, _next) => {
  res.status(400).json({ error: err.message });
});

teams.post('/teams', createTeam);
teams.get('/teams', readTeam);

module.exports = teams;
