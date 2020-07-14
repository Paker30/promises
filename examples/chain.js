const getFive = () => Promise.resolve(5);

getFive()
.then((five) => {
    return five + 2;
})
.then((seven) => {
    return seven * 2;
});