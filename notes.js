const fs = require('fs');

const getNotes = () => {
    return "Notes...";
};

//Add note to json file
const addNote = (title,body) => {
    //debugger; Used for debugging this app in chrome with URL: chrome://inspect
    const notes = loadNotes();
    const findNote = notes.filter(x=>x.title === title);
    if(findNote.length === 0){
        notes.push({
            title:title,
            body:body
        }); //Add the newly added note to entire notes collection
        saveNotes(notes);
        console.log("Note Saved");
    }
    else{
        console.log('Duplicate Title Not Allowed');
    }
};

//Remove note from json file
const removeNote = (title) => {
    const notes = loadNotes();
    const findNote = notes.filter(x=>x.title !== title);
    saveNotes(findNote);
    console.log("Note Removed");
};

//Log all notes from json file
const listNotes = () => {
    const notes = loadNotes();
    notes.map((note)=>{
        console.log(`Title: ${note.title}, Body: ${note.body}`);
    });
};

//Save all notes in the file, it overwrites all file contents
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json',dataJSON);
};

//Load all notes from json file
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON); //Return JSON string found in notes.json file
    }
    catch(e){
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
};