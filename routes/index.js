var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {

  try {

    res.send("API IS WORKING !");

    res.status(201).json({
      message: "GARAGE API ALERT !"
    })

  } catch (error) {
    res.status(404).json({
      message: error.message
    })
  }

});

module.exports = router;
