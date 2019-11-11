const http = require('http');
import express, {Response, Request, Application} from "express";

const app: Application  = express();
app.get("/", (req: Request, res: Response) => {
    res.status(200).set({
        "connection": "keep alive",
        "cache-control": "no-cache",
        "content-Type": "application/json",
    });
    const data = {
        message: "welcome",
    };
    setInterval(() => {
        res.write(JSON.stringify(data))
    }, 2000)
});
app.get("/countdown", (req: Request, res: Response) =>{
    res.status(200).set({
        "connection": "keep alive",
        "cache-control": "no-cache",
        "content-Type": "application/json",
    });
countdown(res, 13)
});
function countdown(res: Response, count: number){
    res.write(`data: time left ${count} \n\n`);
    if (count){
        setTimeout(() => countdown(res, count-1), 1000)
    }
    else {
        res.write(`times up! \n\n`);
        res.end();
    }
}

app.listen(5000, () => console.log("go to http://localhost:5000"));