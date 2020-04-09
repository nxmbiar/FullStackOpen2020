import React from 'react';

const Header = ({ text }) => <h1>{text}</h1>

const Part = ({ part }) => <p>{part.name} {part.exercises}</p>

const Content = ({ parts }) => {
  return (
    <div>
      { parts.map(part => <Part key={ part.id } part={ part } />) }
    </div>
  );
}

const Total = ({ parts }) => {
  let total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return (
    <p><b>Total of { total } exercises</b></p>
  );
}

const Course = ({ course }) => {
    return (
      <div>
        <Header text={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course