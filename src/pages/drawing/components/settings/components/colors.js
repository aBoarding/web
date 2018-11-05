import React from 'react'

const colors = ['red', 'green', 'blue', '#353535', 'white']

const Colors = props => (
	<div className="colors">
		{
			colors.map(color => (
				<div
					key={ color }
					onClick={ () => props.onChange(color) }
					className={ `color ${ props.selected === color ? 'active' : '' }` }
				>
					<div className="side" style={{ backgroundColor: color }}/>
					<div className="front" style={{ backgroundColor: color }}/>
				</div>
			))
		}
	</div>
)

export default Colors