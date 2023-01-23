import { useState } from "react"


const History = ({ allClicks }) => {
	if (allClicks.length === 0) {
		return (
			<div>The app is used by pressing the buttons</div>
		)
	}
	return (
		<div>button press history: {allClicks.join(' ')}</div>
	)
}

const Button = ({ handleButton, side }) => {
	return(
		<button onClick={handleButton(side)}>
			{side}
		</button>
	)
}

const App = () => {
	const [click, setClick] = useState({
		left: 0, right: 0, center: 0
	})
	const [allClicks, setAll] = useState([])

	const handleClick = (button) => () => {
		setClick({...click, [button]: click[button] + 1})
		setAll(allClicks.concat(button[0].toUpperCase()))
	}

	return (
		<div>
			{click.left}
			<Button handleButton={handleClick} side='left' />
			<Button handleButton={handleClick} side='center' />
			{click.center}
			<Button handleButton={handleClick} side='right' />
			{click.right}
			<History allClicks={allClicks} />
		</div>
	)
}


export default App