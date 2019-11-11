"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get("/", function (req, res) {
    res.status(200).set({
        "connection": "keep alive",
        "cache-control": "no-cache",
        "content-Type": "application/json",
    });
    var data = {
        message: "welcome",
    };
    setInterval(function () {
        res.write(JSON.stringify(data));
    }, 2000);
});
app.get("/countdown", function (req, res) {
    res.status(200).set({
        "connection": "keep alive",
        "cache-control": "no-cache",
        "content-Type": "application/json",
    });
    countdown(res, 13);
});
function countdown(res, count) {
    res.write("data: time left " + count + " \n\n");
    if (count) {
        setTimeout(function () { return countdown(res, count - 1); }, 1000);
    }
    else {
        res.write("times up! \n\n");
        res.end();
    }
}
app.listen(5000, function () { return console.log("go to http://localhost:5000"); });
