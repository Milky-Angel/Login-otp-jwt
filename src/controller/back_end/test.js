const axios = require("axios");
const express = require("express");

// config.js
const config = require("../../config");
// const inputValidation = require("../../helpers/inputValidation");

exports.Test = (req, res) => {
  try {

    // let validationResult = inputValidation(req.body);

    // if (validationResult !== true) {
    //   // Validation failed; send a validation error response
    //   return res.status(400).json({ message: validationResult });
    // }

    res.json({
      data: config.status,
      message: "Validation scucces",
    });
  } catch {
    return res .status(404)  .json({ message: "Internal error occer please try again" });
  }
};

