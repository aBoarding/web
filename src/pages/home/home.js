import React from 'react'
import './home.css'
import Choosing from './components/choosing'

export default class Home extends React.Component {

	state = {}

	connect(channel) {
		let { type } = this.state
		this.props.history.push(`/${ type }/${ channel }`)
	}

	render() {
		return (
			<section className="fullscreen">
				{
					!this.state.type && (
						<Choosing
							title="Função"
							data={[
								{ label: 'Professor', value: 'teacher' },
								{ label: 'Aluno', value: 'student' }
							]}
							onSelect={ type => this.setState({ type }) }
						/>
					)
				}
				{
					this.state.type && (
						<Choosing
							title="Matéria"
							data={[
								{ label: 'Matemática', value: 'math' },
								{ label: 'Portugues', value: 'port' },
								{ label: 'Física', value: 'physics' },
								{ label: 'Inglês', value: 'english' }
							]}
							onSelect={ channel => this.connect(channel) }
						/>
					)
				}
			</section>
		)
	}
}