import React from 'react'
import './canvas.css'

export default class Canvas extends React.Component {

	state = {
		canvas: {}
	}

	componentWillMount() {
		this.updateCanvasDimensions(window.innerWidth, window.innerHeight)
	}

	componentDidMount() {
		this.watchWindow()
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
					ref={ ref => this.props.bind && this.props.bind(ref) }
				/>
			</div>
		)
	}
}