const getFive = () => Promise.resolve(5);
const addTwo = (number) => Promise.resolve(number + 2);
const remotePrint = (message) => {
    console.error(`We have a problem man!!! Your message: ${message} can be printed`);
    return Promise.reject(message);
};
const printLocally = (message) => {
    console.log(`Here is your message: ${message}`);
    return Promise.resolve(message);
}

getFive()
    .then((five) => {
        return addTwo(five)
            .then((seven) => {
                return addTwo(seven);
            })
    })
    .then((nine) => {
        return remotePrint(nine)
            .catch((originalMessage) => {
                return printLocally(originalMessage);
            })
    })
    .then((data) => {
        //What is data value?
        console.log('This demo ends here, right?');
        console.log('have you guessed the value?', data);
        return 'Keep tune, we have more stuff';
    })
    .then((goodbye) => {
        console.log(goodbye);
    });