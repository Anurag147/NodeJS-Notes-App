const note = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');//Used for parsing parameters passed

//Add a new yargs command to handle add operations
yargs.command({
    command:'add',
    describe:'Add a new note',
    builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        //Retrieve title value passed in parameter
        //console.log('Adding a note: '+argv.title+ " "+argv.body) 

        //Save the note to data store
        note.addNote(argv.title,argv.body);     
    }
});

//Add a new yargs command to handle remove operations
yargs.command({
    command:'remove',
    describe:'Remove a new note',
    builder: {
        title:{
            describe:'Note Title',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        note.removeNote(argv.title);
    }
});

//Add a new yargs command to handle list operations
yargs.command({
    command:'list',
    describe:'List all notes',
    handler(){
        note.listNotes();
    }
});

//Add a new yargs command to handle read operations
yargs.command({
    command:'read',
    describe:'Read a note',
    handler(){
        console.log('Read a note')
    }
});

yargs.parse();//Parse all the parameters as defined in the configuration

//const command = process.argv[2]; //Used for fetching arguments passed

//Load Node JS module by using require
//const fs = require('fs');

//Use Node JS Module to write a file using writeFileSync method
//fs.writeFileSync('notes.txt','This file was created by a Node JS App'); 

//Append the file by using appendFileSync method
//fs.appendFileSync('notes.txt','. The message is now updated.');

//Call Node JS function using command node javascript file name eg: node App.js 

//Import variable from a different javascript file
//const name = require('./utils');
//console.log(name);

//Import function from a different javascript file
//const add = require('./utils');
//console.log(add(2,4));

//Import all modules from validator npm module
//const validator = require('validator');
//console.log(validator.isEmail('abc@def.com')); //Print if a string is email or not

//const getNotes = require('./notes');
//console.log(getNotes());

//const chalk = require('chalk'); //Use chalk module to do console operations to print text in colors
//console.log(chalk.blue.bold('hello'));

//console.log(process.argv[2]); //node JS module process to print passed arguments