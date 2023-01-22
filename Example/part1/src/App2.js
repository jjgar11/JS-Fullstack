import { useState } from "react"

const App = () => {
	const [click, setClick] = useState({
		left: 0, right: 0
	})

	return (
		<div>
			{click.left}
			<button onClick={
				() => setClick({
					left: click.left + 1, right: click.right
				})
			}>
				left
			</button>
			<button onClick={
				() => setClick({
					left: click.left, right: click.right + 1}
				)
			}>
				right
			</button>
			{click.right}
		</div>
	)
}


export default App