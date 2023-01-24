import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

const Button = ({ handleClick, qualification, text }) => {
	return(
		<button onClick={() => handleClick(qualification + 1)}>
			{text}
		</button>
	)
}

const NoFeedback = () => <h3>No feedback given</h3>

const Statistics = ({ stats }) => {
	const [good, neutral, bad] = stats
	const total = good+neutral+bad
	const average = total === 0 ? 0 : (good-bad)/total
	const pos = total === 0 ? 0 : good/total*100

	return(
		<div>
			<h2>Statistics</h2>
			<table>
			<tbody>
				<Statistic text='Good' value={good} />
				<Statistic text='Neutral' value={neutral} />
				<Statistic text='Bad' value={bad} />
				<Statistic text='All' value={total} />
				<Statistic text='Average' value={average} />
				<Statistic text='Positive' value={pos + '%'} />
			</tbody>
			</table>
		</div>
	)
}

const Statistic = ({ text, value }) => {
	return <tr>
			<td>{text}</td>
			<td>{value}</td>
		</tr>
}

const App = () => {
	const [good, setGood] = useState(0)
	const [neutral, setNeutral] = useState(0)
	const [bad, setBad] = useState(0)

	return (
		<>
		<div>
			<h1>Give feedback</h1>
		</div>
		<div>
			<Button handleClick={setGood} qualification={good} text='good' />
			<Button handleClick={setNeutral} qualification={neutral} text='neutral' />
			<Button handleClick={setBad} qualification={bad} text='bad' />
		</div>
		{(good+neutral+bad === 0) ? (
			<NoFeedback /> ) : (
		<Statistics stats={[good, neutral, bad]}/> )}
		</>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
