import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './style.css'

import Drawing from 'drawing/drawing'
import Home from 'home/home'

const Routes = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={ Home }/>
			<Route exact path="/:type/:channel" component={ Drawing }/>
		</Switch>
	</BrowserRouter>
)

render(<Routes/>, document.getElementById('main'))