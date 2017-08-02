import {Dispatcher}  from 'flux';

const myDispatcher = new Dispatcher();

myDispatcher.handleAction = function(action) {
	this.dispatch({
		source: 'VIEW_ACTION',
		action: action
	});
}

export {myDispatcher};