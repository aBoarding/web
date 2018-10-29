import React from 'react'
import './drawing.css'

export default class Drawing extends React.Component {

	state = {
		canvas: {}
	}

	componentWillMount() {
		this.updateCanvasDimensions(window.innerWidth, window.innerHeight)
	}

	componentDidMount() {
		this.watchWindow()
		this.context.scale(window.devicePixelRatio, window.devicePixelRatio)

		this.context.fillStyle = "#000"
		this.context.fillRect(0, 0, 500, 500)
	}

	watchWindow() {
		window.onresize = e => {
			let { innerWidth, innerHeight } = e.target
			this.updateCanvasDimensions(innerWidth, innerHeight)
		}
	}

	updateCanvasDimensions(width, height) {
		this.setState({ canvas: { 
			innerWidth: width * window.devicePixelRatio, 
			innerHeight: height * window.devicePixelRatio
		}})
	}

	render() {
		return (
			<div className="drawing">
				<canvas 
					width={ this.state.canvas.innerWidth }
					height={ this.state.canvas.innerHeight }
					ref={ ref => this.context = ref.getContext('2d') }
				/>
			</div>
		)
	}
}