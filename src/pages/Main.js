import React, { useState, useEffect } from "react";
import ListItem from "../components/ListItem";
import AddButton from '../components/AddButton'

const Main = () => {

    let [notes, setNotes] = useState([])

    useEffect(() => {

        window.scrollTo(0, 0);

        document.body.style.zoom = "130%";

        let getNotes = async () => {
            let response = await fetch("https://flask-api-kfe5mkrebq-ey.a.run.app/notes/all")

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
            <div className="add-button">
                <AddButton />
            </div>
        </div>
    )
}


export default Main;