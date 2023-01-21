import React, { useState } from "react";

const Display = ({counter}) => {
	const isEven = counter % 2 === 0;
	const message = isEven ? 'Es par' : 'Es impar'

	return (
		<div>
			<h1>{counter}</h1>
			<p>{message}</p>
		</div>
	)
}

const Button = ({handleClick, text}) => 
	<button onClick={handleClick}>
		{text}
	</button>

const App = () => {
	const [counter, setCounter] = useState(0)

	const changeByOne = (num) => setCounter(counter + num)
	// const increaseByOne = () => setCounter(counter + 1)
	// const decreaseByOne = () => setCounter(counter - 1)
	// const setToZero = () => setCounter(0)
	
	return (
		<div>
			<Display counter={counter} />
			<Button 
				// handleClick={increaseByOne} 
				handleClick={ () => changeByOne(1) }
				text={'plus'} />
			<Button 
				// handleClick={setToZero}
				handleClick={ () => changeByOne(-counter) }
				text={'zero'} />
			<Button 
				// handleClick={decreaseByOne}
				handleClick={ () => changeByOne(-1) }
				text={'minus'} />
		</div>
	);
}

export default App;
