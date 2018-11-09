import React from 'react'
import './settings.css'

import Colors from './components/colors'
import Size from './components/size'

const Settings = props => (
	<div className="settings">
		<div className="content">
			<Colors 
				onChange={ props.onColorChange }
				selected={ props.color }
			/>
			<Size
				onChange={ props.onSizeChange }
				size={ props.size }
				maxSize={ props.maxSize }
				minSize={ props.minSize }
			/>
		</div>
	</div>
)

export default Settings