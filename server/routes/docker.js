const express = require('express');
const router = express.Router();
const SSH = require('simple-ssh');

var ssh = new SSH({
  host: 'drews-mac-mini.lan',
  user: 'use',
  pass: 'pass'
});

router.get('/', async (req, res) => {
  var output = '';
  try {
    ssh
      .exec('cd /Users/drewmichel/Documents/Programming/React', {
        out: function(stdout) {
          console.log(stdout);
        },
        err: function(stderr) {
          console.log(stderr);
        }
      })
      .exec('git clone https://github.com/drewmichel1995/PenTest-Docker.git', {
        out: function(stdout) {
          console.log(stdout);
        },
        err: function(stderr) {
          output += stderr;
        }
      })
      .exec('docker-compose up -d', {
        out: function(stdout) {
          console.log(stdout);

          res.status(200).send('Wayne');
        },
        err: function(stderr) {
          console.log(stderr);
        }
      })
      .start();
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
