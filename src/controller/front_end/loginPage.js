const axios = require("axios");

const config = require("../../config");
const baseURL = process.env.back_end_host;
// baseURL = http://localhost:4000/backend

console.log(config);
exports.Login = (req, res) => {
    let inputs = {}
    let staticList = {}

    try {
        staticList.userType = config.userType

    } catch (err) {
        console.log(err)
        req.flash('danger', "An internal error occered.")
    }
    // make a get request
    return res.render("pages/login_signup", {
        staticList: staticList,
        inputs: inputs
    });
};
