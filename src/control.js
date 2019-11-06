"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = require('url');
var http = require('http');
//-----------------------------------------------------------------------------------------------------------^ necessary
var hours = new Date().getHours();
console.log(hours);
var minutes = new Date().getMinutes();
console.log(minutes);
var seconds = new Date().getSeconds();
console.log(seconds);
var time = hours + ":" + minutes + ":" + seconds; // this needs to be in every time interval in order to get the actual time and not the time that's first used
//-----------------------------------------------------------------------------------------------------------^ time
//let id = 0;
//-----------------------------------------------------------------------------------------------------------^ counter
exports.home = function (req, res) {
    res.send(time);
    var id = 0;
    setInterval(function () {
        var time = hours + ":" + minutes + ":" + seconds;
        res.write("hello, welcome home.\n  the time is: " + time + "\n");
        res.write("\n\n");
    }, 4000);
    id++;
    if (id == 5) {
        res.write("ok you're a sleep\n " + time);
        res.end();
    }
};
//-----------------------------------------------------------------------------------------------------------^ home
/*
export let roomA =(req: Request, res: Response) => {
    let id = 0;
    setInterval( () => {
    res.write(`you are in room A.\n  the time is: ${time}\nid: ${id}\n`);
    res.write(`\n\n`);
    }, 4000);
    id++;
    if (id == 5){
        res.write(`ok you're a sleep\n ${time}`);
        res.end();
    }
};
//-----------------------------------------------------------------------------------------------------------^ room a


export let roomB =(req: Request, res: Response) => {

    let id = 0;
    setInterval( () => {
        res.write(`you are in room B.\n  the time is: ${time}\nid: ${id}\n`);
        res.write(`\n\n`);
    }, 4000);
    id++;
    if (id == 5){
        res.write(`ok you're a sleep\n ${time}`);
        res.end();
    }
};
//-----------------------------------------------------------------------------------------------------------^ room b


export let roomC =(req: Request, res: Response) => {
    let id = 0;
    setInterval( () => {
        res.write(`you are in room C.\n  the time is: ${time}\nid: ${id}\n`);
        res.write(`\n\n`);
    }, 4000);
    id++;
    if (id == 5) {
        res.write(`ok you're a sleep\n ${time}`);
        res.end();
    }
};
//-----------------------------------------------------------------------------------------------------------^ room c


export let outside =(req: Request, res: Response) => {

    http.createServer((request: Request, response: Response) => {
        response.writeHead(200, {
            Connection: 'keep-alive',
            'Content-Type': 'text/event-stream',
            'Cache-Control': 'no-cache'
        });

        res.send("you are outside, see you next time"); // no info end SSE
        response.write(`id: -1\ndata: you left the house ${time}\n\n\n`);
        response.end();
    }).listen(5000);
*/
//-----------------------------------------------------------------------------------------------------------^ outside
