import { fork } from "child_process";
import { response } from "express";
import { childPostReqService, childLongFunctionService } from "./child.service.js"

export const childPostReqController = (req,res) => {
    const child = fork("./src/Child/child.service.js");
    const data = req.body;

    child.send(data);

    child.on("message", (message) => {
        if(Object.keys(data).includes('name')){
            return res.json({
                message: message
            });
        }
        else {
            return res.json({});
        }
    })

    child.on("exit", (code) => {
        console.log(`Child exited with a code ${code}.`);
    })
}

export const childLongFunctionController = (req,res) => {
    const child = fork("./src/Child/child.service.js");

    let sum = 0;

    for (let i = 0; i < 10; i++) {
        sum += i;
    }

    child.send(sum);

    child.on("messsage", (message) => {
        return res.json({
            sum: sum,
            message: message
        })
    })

    child.on("exit", (code) => {
        console.log(`Child exited with a code ${code}.`);
    })
}