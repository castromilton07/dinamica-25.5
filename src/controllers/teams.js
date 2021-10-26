const { authName, authInitial, authCountry } = require('../services/authentication');

const teams = [];

module.exports = {
  createTeam(req, res) {
    try {
      const verifyAll = (name, initals, country) => (
        authName(name) && authInitial(initals) && authCountry(country)
        ? true : false
      );
    
      const { name, initials, country, league } = req.body;
    
      if (!verifyAll(name, initials, country)) return res.status(400).json({ message: 'invalid data' });

      const team = { name, initials, country, league };
      teams.push(team);

      return res.status(200).json({ teamInfo: team });
    } catch (e) {
      return res.status(400).json({ message: e.message });
    }
  },

  readTeam(_req, res) {
    if (teams.length === 0) return res.status(200).json({ teams });

    return res.status(200).json(teams);
  }
};
