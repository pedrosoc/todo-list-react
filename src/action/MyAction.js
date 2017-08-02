import {myDispatcher} from '../dispatcher';
import ActContants from '../action'

export default {

	newItem: function(newItem){
		myDispatcher.handleAction({
			actionType: ActContants.NEW_ITEM,
			data: newItem
		});
	},

	removeItem: function(removeItemKey){
		myDispatcher.handleAction({
			actionType: ActContants.REMOVE_ITEM,
			data: removeItemKey
		});
	}
	
}