const http = require('http');
import * as controller from './control';
import {Application, Response, Request} from "express";
const express = require('express');

const app: Application = express();

http.createServer((request: Request, response: Response) => {
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
