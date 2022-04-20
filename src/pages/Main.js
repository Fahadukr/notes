import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from '../components/AddButton'

const Main = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {

        let getNotes = async () => {
            let response = await fetch("http://localhost:5000/notes")
            let data = await response.json()

            setNotes(data)
        }

        getNotes()
    }, [])


    return (
        <div className="notes">
            <div className="notes-header">
                <p className="notes-count">{notes.length}</p>
            </div>

            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem note={note} key={index} />
                ))}
            </div>
            <AddButton />
        </div>
    )
}


export default Main;