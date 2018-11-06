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
		let { left } = this.size.getBoundingClientRect(), 
			{ pageX } = e,
			position = Math.min(
				Math.max(pageX - left, this.handle.offsetWidth / 2), 
				this.bar.offsetWidth + (this.handle.offsetWidth / 2)
			)

		this.setState({ position })
		this.props.onChange(this.getSizeForPercentage(position))
	}

	getSizeForPercentage(position) {
		let min = this.props.minSize,
			max = this.props.maxSize - min

		return Math.round(((this.getFillPercentage(position) * max) / 100) + min)
	}

	getFillPercentage(position) {
		if(!this.bar || !this.handle) return 0
		return (((position || this.state.position) - this.handle.offsetWidth / 2) * 100) / this.bar.offsetWidth
	}

	render() {
		return (
			<div 
				ref={ ref => this.size = ref }
				className="size"
				onMouseDown={ e => this.startMoving(e) }
			>
				<div 
					ref={ ref => this.handle = ref }
					className="handle"
					style={{ left: this.state.position }}
				/>
				<div 
					ref={ ref => this.bar = ref }
					className="bar"
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