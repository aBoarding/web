let ws

const connect = (type, channel, callback) => {
	ws = new WebSocket(`ws://localhost:3000?type=${ type }&channel=${ channel }`)
	ws.onopen = callback
}

const onStreamUpdate = callback => {
	ws.onmessage = msg => callback(JSON.parse(msg.data))
}

const updateStream = value => {
	ws.send(JSON.stringify(value))
}

export default { connect, onStreamUpdate, updateStream }