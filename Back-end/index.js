const cors = require('cors');
const express = require('express');
const { CronJob } = require('cron');
const router = require('./routes/router');
const ranking = require('./controllers/ranking');

const server = (PORT) => {
  const app = express();
  
  app.use(cors());// allows server to interact with the client side
  app.use(express.json());// parses(analyzing) incoming requests with JSON
  app.use(express.urlencoded({ extended: true }));
  
  app.use(router);
  
  const job = new CronJob({
    cronTime: '5 16 * * 1-5',
    onTick: ranking.storeRanking(),
    start: false,
    timeZone: 'America/New_York',
  });
  job.start();

  const server = app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server listening at http://localhost:${PORT}`);
  });

  return server;
}

module.exports = server;
