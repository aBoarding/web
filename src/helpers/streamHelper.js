const ws = new WebSocket('ws://localhost:3000?type=teacher')

const onStreamUpdate = callback => {
	ws.onmessage = msg => callback(JSON.parse(msg.data))
}

const updateStream = value => {
	ws.send(JSON.stringify(value))
}

export default { onStreamUpdate, updateStream }