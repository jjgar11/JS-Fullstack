import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const ButtonNext = ({ handleClick }) => {
	return (
		<button onClick={handleClick}>Next anecdote</button>
	)
}

const ButtonVote = ({ handleClick }) => {
	return (
		<button onClick={handleClick}>Vote</button>
	)
}

const MostVoted = ({ anecdotes, votes }) => {
	const max = Math.max(...votes)
	const most = votes.indexOf(Math.max(...votes))
	return (
		<div>
			<h2>Anecdote with most votes</h2>
			<p>{anecdotes[most]}<br />
			has {max} votes<br />
			</p>
		</div>
	)
}

const App = ({ anecdotes }) => {

	const randomNumber = (length) => {
		return Math.floor(Math.random() * length) 
	}
	
	const [selected, setSelected] = useState(randomNumber(anecdotes.length))
	const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))

	const addVotes = (selected) => () => {
		const copy = [...votes]
		copy[selected] += 1
		setVotes(copy)
	}

	const nextAnecdote = (length) => () => {
		let num = selected
		while(num === selected) {
			num = randomNumber(length)
		}
		setSelected(num)
	}

	return (
		<>
		<div>
			<h1>Anecdote of the day</h1>
			{anecdotes[selected]}<br />
			has {votes[selected]} votes
		</div>
		<ButtonVote handleClick={addVotes(selected)} />
		<ButtonNext handleClick={nextAnecdote(anecdotes.length)} />
		<MostVoted anecdotes={anecdotes} votes={votes} />
		</>
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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App anecdotes={anecdotes} />
  </React.StrictMode>
);
