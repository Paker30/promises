const getFive = () => Promise.resolve(5);

getFive()
    .then((five) => {
        five + 2;
    })
    .then((seven) => {
        console.log(`Seven:`, seven);
    })
    .then(() => {
        console.log('Promise chain keeps for ever');
    });