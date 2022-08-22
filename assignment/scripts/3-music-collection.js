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

// testing if addToCollection function adds to collection
console.log(collection);


//~~~~~ showCollection Function

function showCollection(array){
    console.log("The array length is:", array.length);
    for (item of array){
        console.log(`${item.title} by ${item.artist}, published in ${item.yearPublished}`);
    }
}


//~~~~~~tesing showCollection function

console.log("this is a test of showCollection:");
showCollection(collection);



// ~~~~~~~ findByArtist function

function findByArtist(searchedArtist){
    let searchResults = [];

    for(let i=0; i<collection.length; i++ ){
        itemArtist = collection[i].artist;
        
        if(itemArtist === searchedArtist){
            searchResults.push(collection[i]);
        }
    }
    
    return searchResults
}


// ~~~~~~ test findByArtist function:

console.log('This is a test of findByArtist')
console.log(`Testing one match: ${findByArtist("Wilco")}`);
console.log(`Testing no matches: ${findByArtist("Metallica")}`);
console.log(`Testing two matches: ${findByArtist("Stevie Wonder")}`);

console.log("Testing one match: ",findByArtist("Wilco"));
console.log("Testing no matches: ",findByArtist("Metallica"));
console.log("Testing two matches: ",findByArtist("Stevie Wonder"));