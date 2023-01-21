import React, { useState } from "react";

const Display = ({counter}) => <div>{counter}</div>

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const App = () => {
	const [counter, setCounter] = useState(0)

	// setTimeout(
	// 	() => setCounter(counter + 1), 1000
	// )

	const handleClick = (num) => setCounter(counter + num)
	const setToZero = () => setCounter(0)
	
	return (
		<div>
			<Display counter={counter} />
			<Button 
				handleClick={() => handleClick(1)} 
				text={'plus'} />
			<Button 
				handleClick={() => handleClick(-counter)}
				text={'zero'} />
			<Button 
				handleClick={setToZero}
				text={'zero 2'} />
			<Button 
				handleClick={() => handleClick(-1)}
				text={'minus'} />
		</div>
	);
}

export default App;
