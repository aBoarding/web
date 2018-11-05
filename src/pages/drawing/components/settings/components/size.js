import React from 'react'

export default class Size extends React.Component {

	state = {}

	componentDidMount() {
		window.addEventListener('mousemove', e => this.move(e))
		window.addEventListener('mouseup', e => { this.moving = false })
	}

	startMoving(e) {
		this.moving = true
		this.move(e)
	}

	move(e) {
		if(!this.moving) return
		let { left } = this.size.getBoundingClientRect(), { pageX } = e

		this.setState({ 
			position: Math.min(
				Math.max(pageX - left, this.handle.offsetWidth / 2), 
				this.bar.offsetWidth + (this.handle.offsetWidth / 2)
			)
		})

		this.props.onChange(this.getSizeForPercentage())
	}

	getFillPercentage() {
		if(!this.bar || !this.handle) return 0
		return ((this.state.position - this.handle.offsetWidth / 2) * 100) / this.bar.offsetWidth
	}

	getSizeForPercentage() {
		return Math.round(
			((this.getFillPercentage() * (this.props.maxSize - this.props.minSize)) / 100) 
			+ this.props.minSize
		)
	}

	render() {
		return (
			<div className="size" ref={ ref => this.size = ref }>
				<div 
					ref={ ref => this.handle = ref }
					className="handle"
					style={{ left: this.state.position }}
				/>
				<div 
					ref={ ref => this.bar = ref }
					className="bar"
					onMouseDown={ e => this.startMoving(e) }
				>
					<div 
						className="fill"
						style={{ width: `${ this.getFillPercentage() }%` }}
					/>
				</div>
				<span className="label">{ this.props.size || this.props.minSize }</span>
			</div>
		)
	}
}