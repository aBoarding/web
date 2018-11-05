import React from 'react'
import './drawing.css'

import Canvas from 'canvas/canvas'
import Settings from './components/settings/settings'

import DrawingHelper from 'drawingHelper'

export default class Drawing extends React.Component {

	state = {
		selectedColor: '#353535'
	}

	componentDidMount() {
		this.drawingHelper = new DrawingHelper(this.canvas)
	}

	selectColor(selectedColor) {
		this.setState({ selectedColor })
		this.drawingHelper.setColor(selectedColor)
	}

	selectSize(selectedSize) {
		this.setState({ selectedSize })
		this.drawingHelper.setSize(selectedSize)
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
					minSize={ 5 }
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