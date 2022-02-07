import chalk from "chalk"
import fs from "fs"

const getNotes= function(){
    return 'Your Notes'
}

const addNotes = function(title,body){
    const notes = loadNotes()

    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if (duplicateNotes.length === 0){
        
        notes.push({
            title:title,
            body:body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added"))
    }
    else{
        console.log(chalk.red.inverse("Note title is already used"))
    }

}


const loadNotes = function(){
    try{
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}


const saveNotes = function(notes){
    const dataJSON= JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}




const removeNote = function(title){
    const notes = loadNotes()
    const noteToKeep = notes.filter(function(note){
        return note.title !== title

    })
    saveNotes(noteToKeep)
    if (noteToKeep.length !== notes.length){
        console.log(chalk.green.inverse("Note Removed"))
    }
    else{
        console.log(chalk.red.inverse("No Note found!!"))
    }

}

export {addNotes,getNotes,removeNote}