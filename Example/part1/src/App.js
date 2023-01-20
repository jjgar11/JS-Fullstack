const Hello = (props) => {
	return (
		<>
		Hello {props.name}
		</>
	)
}
const Age = (props) => {
	return (
		<>
		you are {props.age} years old
		</>
	)
}
const Datenow = (props) => {
	return (
		<>
		it is {props.date}
		</>
	)
}

const App = () => {

	const name = 'Sara'
	const age = 10
	const now = new Date()

	return (
		<div>
			<h1>Greetings</h1>
			<p>
				<Hello name = 'Juan' />, <Age age = {26+10} />
			</p>
			<p>
				<Hello name = {name} />, <Age age = {age} />
			</p>
			<p>
				<Hello name = {'World'} />, <Datenow date = {now.toString()} />
			</p>
		</div>
	);
}

export default App;
