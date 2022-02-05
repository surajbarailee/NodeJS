import chalk from 'chalk'
import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'



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
    handler:(argv)=>{
        console.log('Title',argv.title)
        console.log('Body',argv.body)
    }
}
).parse();

// Listing list command

yargs(hideBin(process.argv)).command({
    command:'list',
    describe:'Listing notes',
    handler:()=>{
        console.log('Listing all the nodes')
    }
}
).parse();

// Reading notes

yargs(hideBin(process.argv)).command({
    command:'read',
    describe:'Reading a note',
    handler:()=>{
        console.log('Reading a note')
    }
}
).parse();


// Removing notes

yargs(hideBin(process.argv)).command({
    command:'remove',
    describe:'Remove a note',
    handler:()=>{
        console.log('Removing a note')
    }
}).parse();
