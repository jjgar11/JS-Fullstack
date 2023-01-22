import { useState } from "react"


const App = () => {
	const [click, setClick] = useState({
		left: 0, right: 0
	})

	const handleClick = (button) => setClick({...click, [button]: click[button] + 1})

	return (
		<div>
			{click.left}
			<button onClick={() => handleClick('left')}>
				left</button>
			<button onClick={() => handleClick('right')}>
				right</button>
			{click.right}
		</div>
	)
}


export default App