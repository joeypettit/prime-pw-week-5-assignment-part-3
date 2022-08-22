console.log('***** Music Collection *****')


//Global Variables

let collection = [];



//~~~~ Function addToCollection

function addToCollection(albumTitle, albumArtist, albumYear) {
    let record = {
        title: albumTitle,
        artist: albumArtist,
        yearPublished: albumYear
    };
    collection.push(record);
    return record;
}

// ~~~~~~ addToCollection Test:

//testing return
console.log(addToCollection("Sung Tongs", "Animal Collective", 2004));
console.log(addToCollection("A Ghost is Born", "Wilco", 2004));
console.log(addToCollection("A Love Supreme", "John Coltrane", 1964));
console.log(addToCollection("Innervisions", "Stevie Wonder", 1974));
console.log(addToCollection("Songs in the Key of Life", "Stevie Wonder", 1976));
console.log(addToCollection("Doggystyle", "Snoop Dogg", 1994));

// testing if function adds to collection
console.log(collection);
