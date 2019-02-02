import React,{Component} from 'react';       //App.js is father of component
import CardList from '../components/CardList';
import Scroll from '../components/scroll'
import SearchBox from '../components/searchBox';
import './App.css'


//STATE >>props parent can change the following value and feed state to children , props is come out of state


class App extends Component{       //or React.Component
	constructor(){
		super();
		this.state = {
			robots :[],
			searchfield:''
		}
	}
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users=>this.setState({robots:users}))                    
	}
	onSearchChange=(event)=>{       //if don't use bind or arrow function , this is refer to searchbox->input
		this.setState({searchfield:event.target.value});  //equal to this.state.searchfield
		
	}
	render(){
		const filterRobots=this.state.robots.filter(robots=>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		});
		if(this.state.robots.length===0)
			return <h1>Loading</h1>
		else{
			return (
			<div className='tc'>
				<h1 className='f1'>RobotFriends</h1>
				<SearchBox searchChange={this.onSearchChange}/>
				<Scroll>
					<CardList robots={filterRobots}/>
				</Scroll>
			</div>
			)
		}	
	
	}
}

export default App;