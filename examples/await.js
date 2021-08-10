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
    console.log(`Save song: ${song.name} from ${song.album}`);
    const savedInfo = {
        id: '1234abcd',
        date: new Date(),
        records: 1
    };

    return Promise.resolve(savedInfo);
};

(async () => {

    try {
        const song = await findSong({ name: 'Hey Julie' });
        const updatedSong = { ...song, album: 'Welcome Interstate Managers' };
        const dbInfo = await saveSong(updatedSong);
        const otherSong = await findSong({ name: 'Stacy\'s Mom' });
        console.log(`Here is the song I really wanted: ${otherSong.name} by ${otherSong.author}`);
    }
    catch (error) {
        console.error('Ups there has been an error');
    }
})();
