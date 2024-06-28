"use strict";
// Album: Write a function called make_album() that builds a Object describing a music album.
//  The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
//   Use the function to make three dictionaries representing different albums. 
//   Print each return value to show that Objects are storing the album information correctly.
//    Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
//     If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//      Make at least one new function call that includes the number of tracks on an album.
Object.defineProperty(exports, "__esModule", { value: true });
function make_album1(artistName, albumTitle) {
    return { artistName, albumTitle };
}
let album1 = make_album1("Talha Anjum", "Khanabadosh");
let album2 = make_album1("Talhah Yunus", "Shikwa");
let album3 = make_album1("JJ47", "Talk to you later");
console.log(album1);
console.log(album2);
console.log(album3);
//adding tracks
function make_album2(artistName, albumTitle, numberOfTracks) {
    return { artistName, albumTitle, numberOfTracks };
}
let albumx = make_album2("Talha Anjum", "Khanabadosh", 12);
let albumy = make_album2("Talhah Yunus", "Shikwa", 10);
let albumz = make_album2("JJ47", "Talk to you later", 4);
console.log(albumx);
console.log(albumy);
console.log(albumz);
