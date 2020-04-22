import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (anecdote) => {
    // const object = { content }
    const response = await axios.post(baseUrl, anecdote)
    return response.data
  }
  
const voteAnecdote = async (anecdote) => {
    anecdote.votes += 1
    const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdote)
    return response.data
}

export default {
    getAll,
    createNew,
    voteAnecdote
}