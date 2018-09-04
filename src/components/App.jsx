import React from 'react';
import List from './List/index.jsx';
import ListRedux from './ListRedux/index.jsx';


let listEmploes= [
	1, 2, 3
]


class App extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div className="App">
				<List data={ listEmploes } />
				<ListRedux />
			</div>
		)
	}
}

export default App;