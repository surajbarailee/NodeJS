import chalk from 'chalk';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';
import {addNote,listNotes,removeNote,readNote} from "./notes.js";



// Creating add command

yargs(hideBin(process.argv)).command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe: 'Note Body',
            demandOption: true,
            type:'string'

        }
    },
    handler(argv){
        addNote(argv.title,argv.body)
    }
}
).parse();

// Listing list command

yargs(hideBin(process.argv)).command({
    command:'list',
    describe:'Listing notes',
    handler(){
        listNotes()
    }
}
).parse();

// Reading notes

yargs(hideBin(process.argv)).command({
    command:'read',
    describe:'Reading a note',
    builder:{
        title:{
            describe: "read title",
            demandOption:true,
            type:"string"
        }
    },

    handler(argv){
        readNote(argv.title)
    }
}
).parse();


// Removing notes

yargs(hideBin(process.argv)).command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            describe:"Notes title",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        removeNote(argv.title)
    }
}).parse();
