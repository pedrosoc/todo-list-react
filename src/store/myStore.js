import {EventEmitter} from 'events';
import extend from 'lodash/extend';

import {myDispatcher} from '../dispatcher';
import ActContants from '../action'

function addItem(item) {

	return myItem.addItem(item);

}

function removeItem(itemKey) {

	return myItem.removeItem(item);

}

// junta nossa Store com os eventos do EventEmitter
var MyStore = merge(EventEmitter.prototype, {

	getAllItens: function() {
		return myItem.getAllItens();
	},

	emitChange: function() {
		this.emit('change');
	},

	addChangeListener: function(callback) {
		this.on('change', callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	}

});

// registra a minha store em um Dispatcher
myDispatcher.register(function(payload) {

	var action = payload.action;
	var text;

	//define se a Store vai tratar da action
	switch(action.actionType) {

		case ActContants.NEW_ITEM:
			addItem(action.data);
			break;

		case ActContants.REMOVE_ITEM:
			removeItem(action.data);
			break;

		default:
			return true;
	}

	MyStore.emitChange();

	return true;

});

export default MyStore;