const express = require('express');
const jsonData = require('../user.json');
const userData = jsonData[0];

exports.getData = (req, res, next) => {
    // await mongodb call
    res.status(200).json(userData);
  }