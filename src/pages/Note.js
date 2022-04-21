import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


const Note = () => {

  const { noteId } = useParams()

  let time_now = new Date(new Date().setHours(new Date().getHours() + 2))

  const noteUrl = `https://flask-api-kfe5mkrebq-ey.a.run.app/notes/${noteId}`

  const allNotesUrl = `https://flask-api-kfe5mkrebq-ey.a.run.app/notes/all`

  let navigate = useNavigate()

  let [note, setNote] = useState(null)

  useEffect(() => {

    window.scrollTo(0, 0);

    document.body.style.zoom = "130%";

    let noteUrl = `https://flask-api-kfe5mkrebq-ey.a.run.app/notes/${noteId}`

    let getNote = async () => {
      if (noteId === 'new') return
      let response = await fetch(noteUrl)
      let data = await response.json()
      setNote(data)
    }

    getNote()

  }, [noteId])

  const createNote = async () => {

    await fetch(allNotesUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': time_now })
    })
  }


  const updateNote = async (noteUrl) => {
    await fetch(noteUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': time_now })
    })
  }

  const deleteNote = async () => {
    await fetch(noteUrl, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/notes/')
  }

  let handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote(noteUrl)
    } else if (noteId !== "new") {
      updateNote(noteUrl)
    } else if (noteId === 'new' && note !== null) {
      createNote(allNotesUrl)
    }

    navigate('/notes/')
  }


  return (
    <div className="note">
      <h3 className='save'>
        <Link to={'/notes/'}>
          <button onClick={handleSubmit}>Save</button>
        </Link>
      </h3>
      <h3 className='delete'>
        <Link to={'/notes/'}>
          <button onClick={deleteNote}>Delete note</button>
        </Link>
      </h3>

      <textarea onChange={(event) => { setNote({ ...note, 'body': event.target.value }) }} placeholder="Take a note..." value={note?.body}></textarea>
    </div >
  )
}

export default Note;