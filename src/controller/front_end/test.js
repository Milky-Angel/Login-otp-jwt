const axios = require("axios");

const baseURL = process.env.back_end_host;
// baseURL = http://localhost:4000/backend

exports.Test = (req, res) => {
  // make a get request
  return res.render("pages/admin/dashboard", {
    pageKey: "dashboard"
  });
};
