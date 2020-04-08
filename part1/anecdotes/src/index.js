import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text}) => {
  return (
    <button onClick={ handleClick}>
      { text }
    </button>
  )
} 

const Header = ({ text }) => <h1>{text}</h1>
const App = ({ anecdotes }) => {
  const len = anecdotes.length;
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(len).fill(0))

  const getRandom = () => Math.floor((len)*Math.random(0,len))

  const newAnecdote = () => {
    setSelected(getRandom());
  }

  const voteAnecdote = () => {
    const newVotes = [...votes]
    newVotes[selected]+=1
    setVotes(newVotes)
  }

  const maxVotes = votes.indexOf(Math.max(...votes));
  console.log(maxVotes, Math.max(...votes));

  return (
    <div>
      <Header text='Anecdote of the day'/>
      { anecdotes[selected] }<br /> has { votes[selected] } votes<br />
      <Button text='get anecdote' handleClick={ newAnecdote } />
      <Button text='vote' handleClick= { voteAnecdote } />
      <Header text='Anecdote with most votes'/>
      { anecdotes[maxVotes] }<br /> has { votes[maxVotes] } votes<br />

    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />, document.getElementById('root')
)