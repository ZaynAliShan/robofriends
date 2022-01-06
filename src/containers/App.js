import React from 'react'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'

class App extends React.Component {
//making state.. A state turns is passed by parent to child as a state and when
//child gets it it becomes a prop and cannot be changed anymore!	
	constructor() {
		super()
		this.state = { //now App owns the state so now, it can change it
			//robots and text passed in search field is what decides our functionality in app
			robots: [], //1st hand empty, we will update state in componentDidMount() which is much faster
			searchField: ''
		}
	}

//runs after constructor and render. render gets calls after it again because to render these components
componentDidMount() {
	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => {this.setState({robots: users})});	
}


//making a funtion that will take and event and will trigger itself
//when a search is made
onSearchChange = (event) => {
	this.setState({ searchField: event.target.value })
}

	render() {

	const { robots, searchField } = this.state;
	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase())
	})
	//check for if no robots found, if no check appiled then fetching will keep on waiting
		if(robots.length === 0) {
			return <h1 className='tc heading f1'>Loading...</h1>
		}
		else
		{
			return (
				<div className = 'tc'>
					<h1 className = 'f1 heading'>Robo Friends</h1>
					<SearchBox searchChange = {this.onSearchChange}/>
					<Scroll>
						<ErrorBoundry>
						<CardList robots = {filteredRobots}/> {/*robots here are passed as props*/}
						</ErrorBoundry>
					</Scroll>	
				</div>
			);
		}	
	}
}

export default App;