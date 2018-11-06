import React from 'react'
import './drawing.css'

import Canvas from 'canvas/canvas'
import Settings from './components/settings/settings'

import DrawingHelper from 'drawingHelper'

export default class Drawing extends React.Component {

	state = { selectedColor: '#353535' }

	componentDidMount() {
		this.drawingHelper = new DrawingHelper(this.canvas)
		window.addEventListener('keydown', e => this.handleCtrlZ(e))
	}

	selectColor(selectedColor) {
		this.setState({ selectedColor })
		this.drawingHelper.setColor(selectedColor)
	}

	selectSize(selectedSize) {
		this.setState({ selectedSize })
		this.drawingHelper.setSize(selectedSize)
	}

	handleCtrlZ(e) {
		e.key === 'z' && e.ctrlKey &&
			this.drawingHelper.updateStrokes(prevStrokes => prevStrokes.slice(0, -1))
	}

	render() {
		return (
			<div 
				className="drawing"
				onMouseDown={ e => this.drawingHelper.startDrawing(e)}
				onMouseMove={ e => this.drawingHelper.draw(e) }
				onMouseUp={ () => this.drawingHelper.stopDrawing() }
				onMouseLeave={ () => this.drawingHelper.stopDrawing() }
			>
				<Settings
					color={ this.state.selectedColor }
					size={ this.state.selectedSize }
					maxSize={ 50 }
					minSize={ 30 }
					onColorChange={ color => this.selectColor(color) }
					onSizeChange={ size => this.selectSize(size) }
				/>
				<Canvas
					bind={ canvas => this.canvas = canvas }
				/>
			</div>
		)
	}
}