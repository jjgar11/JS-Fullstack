import React from 'react'
import ReactDOM from 'react-dom/client'

const Header = ({course}) => <h1>{course}</h1>

const Part = ({text, number}) => <p>{text} {number}</p>

const Content = ({parts}) => {
  console.log(parts)
  return (
    <>
      <Part text = {parts[0].name} number = {parts[0].exercises} />
      <Part text = {parts[1].name} number = {parts[1].exercises} />
      <Part text = {parts[2].name} number = {parts[2].exercises} />
    </>
  )
}

const Total = ({parts}) => <p>Number of exercises 
  {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course = {course.name} />
      <Content parts = {course.parts} />
      <Total parts = {course.parts} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);