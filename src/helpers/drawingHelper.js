export default (canvas) => {
	let context = canvas.getContext('2d'),
		strokes = [],
		drawing = false,
		color,
		size,
		onRedrawCallbacks = []

	const startDrawing = e => {
		if(e.target.tagName !== 'CANVAS') return
		drawing = true
			
		createStroke()
		dragStroke(e)
	}

	const draw = e => {
		drawing && dragStroke(e)
	}

	const stopDrawing = () => {
		drawing = false
	}

	const getMousePosition = e => ({
		x: e.pageX, 
		y: e.pageY
	})

	const createStroke = () => {
		strokes.push({ points: [], color, size })
	}

	const dragStroke = e => {
		strokes[strokes.length - 1].points.push(getMousePosition(e))
		redraw()
	}

	const redraw = () => {
		context.clearRect(0, 0, canvas.width, canvas.height)
		context.lineJoin = 'round'

		strokes.forEach(stroke => {
			context.strokeStyle = stroke.color || 'black'
			context.lineWidth = stroke.size || 5
			context.beginPath()

			stroke.points.forEach((point, i) => {
				i == 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y)
			})

			context.stroke()
		})

		onRedrawCallbacks.forEach(callback => callback(strokes))
	}

	const setColor = newColor => {
		color = newColor
	}

	const setSize = newSize => {
		size = newSize
	}

	const updateStrokes = value => {
		let updatedStrokes = (typeof value === 'function' ? value(strokes) : value) || []
		if(strokesDidNotChange(updatedStrokes)) return

		strokes = updatedStrokes
		redraw()
	}

	const strokesDidNotChange = next => (
		strokes && next &&
		strokes[strokes.length - 1] && next[next.length - 1] &&
		strokes[strokes.length - 1].points && next[next.length - 1].points && 
		strokes[strokes.length - 1].points.length == next[next.length - 1].points.length
	)

	const onRedraw = callback => {
		onRedrawCallbacks.push(callback)
	}

	return { startDrawing, draw, stopDrawing, setColor, setSize, updateStrokes, onRedraw }
}