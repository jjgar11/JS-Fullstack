import { useState } from "react"


const App = () => {
	const [click, setClick] = useState({
		left: 0, right: 0
	})

	const handleLeftClick = () => {
		setClick(prevClick => {
			return ({
				left: prevClick.left + 1,
				right: prevClick.right
			})
		})
		console.log(click)
	}

	const handleRightClick = () => {
		setClick(prevClick => {
			return ({
				left: prevClick.left,
				right: prevClick.right + 1
			})
		})
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