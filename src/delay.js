const delay = (timeout = 0, success = true) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
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

const useDelay = (timeout = 0, success = true) => {
    return delay(timeout, success);
};

module.exports = useDelay;