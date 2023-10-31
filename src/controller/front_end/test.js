const axios = require("axios");

const baseURL = process.env.back_end_host;
// baseURL = http://localhost:4000/backend

exports.Test = (req, res) => {
  // make a get request
  let url = baseURL + "/test";
  axios.get(url)
    .then(function (response) {
      res.send(response.data);
    })
    .catch((err) => {
      res.send(err);
    });
};
