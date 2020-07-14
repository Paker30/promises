const findSong = (filter) => {
    //find with the song with the filter
    console.log(`Find song: ${filter.name}`);
    const foundSong = {
        id: '1234abcd',
        name: filter.name,
        author: 'Fountains of Wayne',
        year: 2004,
        duration: 2.53
    };

    return Promise.resolve(foundSong);
};

const saveSong = (song) => {
    //save song
    console.log(`Save song: ${song.name}`);
    const savedInfo = {
        id: '1234abcd',
        date: new Date(),
        records: 1
    };

    throw new Error('Damn it, song could not be saved!!!!');
};

findSong({ name: 'Hey Julie' })
    .then((song) => {
        const updatedSong = { ...song, album: 'Welcome Interstate Managers' };
        return saveSong(updatedSong);
    })
    .then((dbInfo) => {
        return findSong({ name: 'Stacy\'s Mom' });
    })
    .then((song) => {
        console.log(`Here is the song I really wanted: ${song.name}`);
    })
    .catch((error) => {
        console.error('Ups there has been an error', error.message);
    })