import { useState } from "react"


const App = () => {
	const [click, setClick] = useState({
		left: 0, right: 0
	})

	const handleLeftClick = () => {
		setClick({...click, left: click.left+1})
		console.log(click)
	}

	const handleRightClick = () => {
		setClick({...click, right: click.right+1})
		console.log(click)
	}

	return (
		<div>
			{click.left}
			<button onClick={handleLeftClick}>
				left
			</button>
			<button onClick={handleRightClick}>
				right
			</button>
			{click.right}
		</div>
	)
}


export default App