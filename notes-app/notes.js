import chalk from "chalk"
import fs from "fs"

const readNote = (title) => {
    const notes = loadNotes()
    const note = notes.find((note) => note.title === title)
    debugger
    if (!note){
        console.log("notes not found")
        return
    }
    console.log('Title:',note.title)
    console.log('Body:',note.body)
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse("New Note Added"))
    }
    else {
        console.log(chalk.red.inverse("Note title is already used"))
    }

}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e) {
        return []
    }
}

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const removeNote = (title) => {
    const notes = loadNotes()
    const noteToKeep = notes.filter((note) => note.title !== title)
    saveNotes(noteToKeep)
    if (noteToKeep.length !== notes.length) {
        console.log(chalk.green.inverse("Note Removed"))
    }
    else {
        console.log(chalk.red.inverse("No Note found!!"))
    }

}

const listNotes = () =>{
    const notes = loadNotes()
    console.log(chalk.inverse('Your Notes'))
    notes.forEach((note)=>{
        console.log(note.title)
    })

}

export { addNote, readNote, removeNote ,listNotes}