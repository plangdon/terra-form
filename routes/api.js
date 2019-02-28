var express = require('express');
var router = express.Router();

const { exec } = require('child_process');

router.get('/cycle', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  exec('ls', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

  res.status(200).send('cycle')
});

router.get('/lightning', function(req, res, next) {
  //res.render('index', { title: 'Express' });

  exec('ls', (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(stdout);
});

module.exports = router;
