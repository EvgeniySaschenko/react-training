import React from 'react';
import ReactRedux, { connect } from 'react-redux';

class ListRedux extends React.Component{
	constructor(props){
		super(props);
	}

	addItem(){
		this.props.addItem( this.refs.field.value );
	}

	deleteItem(e){
		this.props.deleteItem( e.target.getAttribute('data-id') );
	}
	

	render(){
		let template= this.props.data.map((e, i)=>{
			return(
				<li key={ i }> {e} 
					<button data-id={ i } onClick={ this.deleteItem.bind(this)}>х</button>
				</li>
			)
		})

		return(
			<div>
				<ul className="ListRedux">
					{ template }
				</ul>

				<input ref="field" type="text"/>
				<button onClick={ this.addItem.bind(this) }>Add2</button>
			</div>
		)
	}
}

export default connect(
	store =>{
		return { 
			data: store.list
		}
	},
	dispatch =>{
		return{
			addItem( name ){
				dispatch({
					type: 'ADD_ITEM_LIST',
					name: name
				})
			},
			deleteItem( id ){
				dispatch({
					type: 'DELETE_ITEM_LIST',
					id: id
				})
			}
		}
	}
)(ListRedux)