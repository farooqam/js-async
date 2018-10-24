const delay = async (timeout = 0, success = true) => {
    const promise = new Promise((resolve, reject) => {
        return setTimeout(() => {
            if(success) {
                resolve(`RESOLVED after ${timeout} ms.`);
            }
            else {
                reject(`REJECTED after ${timeout} ms.`);
            }
        }, timeout);
    });

    return promise;
};

module.exports = {
    "delay": delay
};