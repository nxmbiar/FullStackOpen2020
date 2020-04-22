import React from 'react'
import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const getId = () => (100000 * Math.random()).toFixed(0)

    const addNew = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        const id = getId()
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content, id))
        dispatch(setMessage(`Added new ${content}`, 5))
      }
    
    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={ addNew }>
                <div><input name='anecdote'/></div>
                <button>create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm