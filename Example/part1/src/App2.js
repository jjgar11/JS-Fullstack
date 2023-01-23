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

const Button2 = ({ handleButton, text }) => {
	return(
		<button onClick={handleButton}>
			{text}
		</button>
	)
}

const App = () => {
	const [click, setClick] = useState({
		left: 0, right: 0, center: 0
	})
	const [allClicks, setAll] = useState([])
	const [value, setValue] = useState(10)

	const handleClick = (button) => () => {
		setClick({...click, [button]: click[button] + 1})
		setAll(allClicks.concat(button[0].toUpperCase()))
	}

	return (
		<>
		<div>
			{click.left}
			<Button handleButton={handleClick} side='left' />
			<Button handleButton={handleClick} side='center' />
			{click.center}
			<Button handleButton={handleClick} side='right' />
			{click.right}
			<History allClicks={allClicks} />
		</div>
		<div>
			{value}
			<Button2 handleButton={() => setValue(1000)} text={'thousand'} />
			<Button2 handleButton={() => setValue(0)} text={'reset'} />
			<Button2 handleButton={() => setValue(value+1)} text={'increment'} />
		</div>
		</>
	)
}


export default App