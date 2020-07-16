const { promisify } = require("util");
const setTimeoutPromise = promisify(setTimeout);

const getFive = () => Promise.resolve(5);
const addTwo = (number) => Promise.resolve(number + 2);
const remotePrint = (message) => {
    console.error(`We have a problem man!!! Your message: ${message} can be printed`);
    return Promise.reject(message);
};
const printLocally = (message) => {
    console.log(`Here is your message: ${message}`);
    return setTimeoutPromise(4000, message);
}

(async () => {
    let data;
    const five = await getFive();
    const seven = await addTwo(five);
    const nine = await addTwo(seven);
    try {
        await remotePrint(nine);
    }
    catch (originalMessage) {
        data = await printLocally(originalMessage);
    }
    console.log('This demo ends here, right?');
    console.log('have you guessed the value?', data);
    console.log('Keep tune, we have more stuff');
})();
