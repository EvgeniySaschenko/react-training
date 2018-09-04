let list= (store= [1, 2, 3, 4], action)=>{

	switch(action.type){
		case('ADD_ITEM_LIST'): {
			return [...store, action.name];
		}
		case('DELETE_ITEM_LIST'): {
			store.splice(action.id, 1);
			return [...store];
		}
	}
	return store;
}

export default list;