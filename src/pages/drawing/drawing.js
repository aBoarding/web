import React from 'react'
import './drawing.css'

import Canvas from 'canvas/canvas'
import SidePanel from './components/sidePanel/sidePanel'

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

	render() {
		return (
			<div 
				className="drawing"
				onMouseDown={ e => this.drawingHelper.startDrawing(e)}
				onMouseMove={ e => this.drawingHelper.draw(e) }
				onMouseUp={ () => this.drawingHelper.stopDrawing() }
			>
				<SidePanel
					selectedColor={ this.state.selectedColor }
					onColorChange={ color => this.selectColor(color) }
				/>
				<Canvas
					bind={ canvas => this.canvas = canvas }
				/>
			</div>
		)
	}
}