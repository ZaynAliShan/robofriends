import React from 'react'

//we can wrap cardList with ErrorBoundry so that when
//cardList fails, ErrorBoundry can return 
class ErrorBoundry extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			hasError: false
		}
	}

//how are we goona change the has error?
//We hava this life cycle method //if error this life cycle triggers
	componentDidCatch() {
		this.setState({hasError: true})
	}

	render (){
		if(this.state.hasError) {
			return <h1>Ops, Something is wrong!</h1>
		}
		return this.props.children;
	}
}

export default ErrorBoundry;