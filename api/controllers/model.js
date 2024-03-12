"use strict";

require("dotenv").config();

const runPythonScraper = require("./runner");
module.exports = {

    runScraper: async(req, res, next) => {

        console.log(req.body)
        
        runPythonScraper(5,6)
            .then(output => {
                res.json({
                    code: 200,
                    data:  JSON.parse(output),
                });
            })
    },

    runEx: async(req, res, next) => {
        runPythonScraper(5,6)
            .then(output => {
                res.json({
                    code: 200,
                    data:  JSON.parse(output),
                });
            })
    },
}