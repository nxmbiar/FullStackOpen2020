import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({ text }) => <h1>{ text }</h1>

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={ handleClick }>
      {text}
    </button>
  )
}

const Statistic = ({ text, value }) => {
  return(
    <tr>
      <td>{ text }</td>
      <td>{ value }</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const getTotal = () => good+neutral+bad
  if(getTotal() === 0) {
    return <p>No feedback given</p>
  }

  const getAvg = () => (good-bad)/getTotal()
  const getPercent = () => good*100/getTotal()

  return (
  <table>
    <tbody>
      <Statistic text='good' value={ good } />
      <Statistic text='neutral' value={ neutral } />
      <Statistic text='bad' value={ bad } />
      <Statistic text='all' value={ getTotal() } />
      <Statistic text='average' value={ getAvg() } />
      <Statistic text='percent' value={ getPercent() } />
    </tbody>
  </table>
  )


}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGood = () => setGood(good + 1);
  const addNeutral = () => setNeutral(neutral + 1);
  const addBad = () => setBad(bad + 1);

  

  return(
    <div>
      <Header text='give feedback' />
      <Button handleClick={ addGood } text='good' />
      <Button handleClick={ addNeutral } text='neutral' />
      <Button handleClick={ addBad } text='bad' />
      <Header text='statistics' />
      <Statistics good={ good } bad={ bad } neutral={ neutral } />
      
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));