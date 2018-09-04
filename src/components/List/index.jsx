import React from 'react';

class List extends React.Component{
	constructor(props){
		super(props);
		this.state= this.props;
	}

	addItem(){
		this.state.data.push( document.getElementById('field').value );
		this.setState( this.state.data )
	}

	deleteItem(e){
		e.target.getAttribute('data-id')
		this.setState( this.state.data.splice(e.target.getAttribute('data-id'), 1) )
	}


	render(){
		let template= this.state.data.map((e, i)=>{
			return(
				<li key={ i }>
					{ e }
					<button data-id={ i } onClick={ this.deleteItem.bind(this) }>x</button>
				</li>
			)
		})

		return(
			<div>
				<ul className="List">
					{ template }
				</ul>
				<input type="text" ref="field" id="field" />
				<button onClick={ this.addItem.bind(this) }>Add</button>
			</div>
		)
	}
}

export default List;