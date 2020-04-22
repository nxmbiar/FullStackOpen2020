import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { connect } from 'react-redux'
// import { voteAnecdote } from '../reducers/anecdoteReducer'
// import { setMessage } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote }) => {
    // const dispatch = useDispatch()
    // const vote = (anecdote) => {
    //     dispatch(voteAnecdote(anecdote))
    //     dispatch(setMessage(`Voted for ${anecdote.content}`, 5))
    // }

    return (
        <div>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                {/* <button onClick={() => vote(anecdote)}>vote</button> */}
            </div>
        </div>
    )
}

const AnecdoteList = (props) => {
    const anecdotes = props.anecdotes
    
    return (
        <div>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <Anecdote key={anecdote.id} anecdote={ anecdote } />    
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    let anecdotes = state.anecdotes
    if(state.filter !== null) {
        anecdotes = state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter))
    }
    return {
        anecdotes
    }
}
const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)
export default ConnectedAnecdoteList