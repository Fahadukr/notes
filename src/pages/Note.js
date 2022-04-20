import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';


const Note = () => {

  let navigate = useNavigate()

  const { id } = useParams()

  let [note, setNote] = useState(null)

  useEffect(() => {

    let getNote = async () => {
      if (id === 'new') return
      let response = await fetch(`http://127.0.0.1:5000/notes/${id}`)
      let data = await response.json()
      setNote(data)
    }

    getNote()

  }, [id])

  const createNote = async () => {


    await fetch(`http://127.0.0.1:5000/notes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }


  const updateNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }

  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:5000/notes/${id}/`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
    navigate('/')
  }

  let handleSubmit = () => {
    if (id !== "new" && !note.body) {
      deleteNote()
    } else if (id !== "new") {
      updateNote()
    } else if (id === 'new' && note !== null) {
      createNote()
    }

    navigate('/')
  }


  return (
    <div className="note">
      <h3 className='save'>
        <Link to={'/'}>
          <button onClick={handleSubmit}>Save</button>
        </Link>
      </h3>
      <h3 className='delete'>
        <Link to={'/'}>
          <button onClick={deleteNote}>Delete note</button>
        </Link>
      </h3>

      <textarea onChange={(event) => { setNote({ ...note, 'body': event.target.value }) }} placeholder="Take a note..." value={note?.body}></textarea>
    </div >
  )
}

export default Note;