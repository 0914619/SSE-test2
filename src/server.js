"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http = require('http');
var controller = __importStar(require("./control"));
var express = require('express');
var app = express();
http.createServer(function (request, response) {
    response.writeHead(200, {
        Connection: 'keep-alive',
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache'
    });
    app.get('/home', controller.home);
    app.get('/home/roomA', controller.roomA);
    app.get('/home/roomB', controller.roomB);
    app.get('/home/roomC', controller.roomC);
    app.get('/outside', controller.outside);
}).listen(5000);
