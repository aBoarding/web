export default (canvas) => {
	let strokes = [],
		drawing = false,
		color,
		size

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
		let context = canvas.getContext('2d')
		
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
	}

	const setColor = newColor => {
		color = newColor
	}

	const setSize = newSize => {
		size = newSize
	}

	const updateStrokes = value => {
		strokes = (typeof value === 'function' ? value(strokes) : value) || []
		redraw()
	}

	return { startDrawing, draw, stopDrawing, setColor, setSize, updateStrokes }
}