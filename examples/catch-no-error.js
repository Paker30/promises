const isEven = (num) => num % 2 === 0;
const getNaturalNumber = () => Math.floor(Math.random() * (10 - 1)) + 1;

const getNumber = () => {
    const seconds = new Date().getSeconds();
    return isEven(seconds)
        ? Promise.resolve(getNaturalNumber())
        : Promise.reject(getNaturalNumber() * -1);
}

getNumber()
    .catch((negativeNumber) => negativeNumber * -1)
    .then((number) => {
        console.log(`Here we only received positive numbers: ${number}`);   //There is no if
    });