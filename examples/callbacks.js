const findSong = (filter, cb) => {
    //find with the song with the filter
    console.log(`Find song: ${filter.name}`);
    const foundSong = {
        id: '1234abcd',
        name: filter.name,
        author: 'Fountains of Wayne',
        year: 2004,
        duration: 2.53
    };
    cb(null, foundSong);
};

const saveSong = (song, cb) => {
    //save song
    console.log(`Save song: ${song.name}`);
    const savedInfo = {
        id: '1234abcd',
        date: new Date(),
        records: 1
    };
    cb(null, savedInfo);
};

findSong({name: 'Hey Julie'}, (error, song) => {

    if (error) {
        console.error('There was an error at searching the song');
        return;
    }

    const updatedSong = {...song, album: 'Welcome Interstate Managers'};
    saveSong(updatedSong, (error, dbInfo) => {
        if (error) {
            console.error('There was an error while updating the song');
            return;
        }

        findSong({name: 'Stacy\'s Mom'}, (error, song) => {
            if (error) {
                console.error('There was an error at searching the song');
                return;
            }

            console.log(`Here is the song I really wanted: ${song.name}`);
        });
    });
});