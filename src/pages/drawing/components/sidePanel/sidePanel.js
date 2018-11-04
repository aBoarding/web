import React from 'react'
import './sidePanel.css'

import Colors from './components/colors'

const SidePanel = props => (
	<div className="side-panel">
		<div className="content">
			<h1>COLORS</h1>
		</div>
		<div className="content">
			<Colors 
				onChange={ props.onColorChange }
				selected={ props.selectedColor }
			/>
		</div>
	</div>
)

export default SidePanel