import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import './style.css'

import Drawing from 'drawing/drawing'

const Routes = () => (
	<BrowserRouter>
		<Route exact path="/" component={ Drawing }/>
	</BrowserRouter>
)

render(<Routes/>, document.getElementById('main'))