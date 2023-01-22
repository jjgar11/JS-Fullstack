import { useState } from "react"


const App = () => {
	const [click, setClick] = useState({
		left: 0, right: 0
	})

	const handleClick = (button) => {
		const otherButton = (button === 'right') ? 'left' : 'right'
		const newClick = {
			[button]: click[button] + 1,
			[otherButton]: click[otherButton]
		}
		setClick(newClick)
	}

	return (
		<div>
			{click.left}
			{/* <button onClick={
				() => setClick({
					left: click.left + 1, right: click.right
				})
			}>
				left
			</button> */}
			<button onClick={() => handleClick('left')}>
				left
			</button>
			{/* <button onClick={
				() => setClick({
					left: click.left, right: click.right + 1}
				)
			}>
				right
			</button> */}
			<button onClick={() => handleClick('right')}>
				right
			</button>
			{click.right}
		</div>
	)
}


export default App