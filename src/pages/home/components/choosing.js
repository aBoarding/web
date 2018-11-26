import React from 'react'

const Choosing = props => (
	<div className="choosing">
		<h1>{ props.title }</h1>
		<ul>
			{
				props.data.map(item => (
					<li 
						onClick={ () => props.onSelect(item.value) }
						key={ item.value }
					>
						{ item.label }
					</li>
				))
			}
		</ul>
	</div>
)

export default Choosing