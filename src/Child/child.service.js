console.log("Child Created!", process.pid);

export const childPostReqService = (data) => {
    try {
        return {
            responseCode: 200,
            message: "Success",
            data: data
        }
    }
    catch (err) {
        return {
            responseCode: 500,
            message: "Error"
        }
    }
}

export const childLongFunctionService = () => {
    try {
        return {
            responseCode: 200,
            message: "Successful"
        }
    }
    catch (err) {
        return {
            responseCode: 500,
            message: "Error"
        }
    }
}

process.on("message", (message) => {
    if (Object.keys(message).includes('name')) {
        const result = childPostReqService(message);
        process.send(result);

        setTimeout(process.exit, 5000);
    }
    else if (message) {
        console.log(message)
        const result = childLongFunctionService();
        process.send(result);

        setTimeout(process.exit, 5000);
    }
})