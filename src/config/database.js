module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'comprovante',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
