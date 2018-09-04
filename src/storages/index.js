import Redux, { createStore, combineReducers } from 'redux';
import list from './list';

let reducers= combineReducers({
	list: list
});

module.exports= createStore(reducers);