/*export default function({ dispatch }) {
	return next => action => {
		// if the action does not have payload
		// or the payload does not have a .then property
		// we don't care about it, send it on
		if(!action.payload || !action.payload.then) {
			return next(action);
		}
			// make sure the action's promise resolves
			action.payload
				.then(response => { 
				 	const newAction = {...action, payload: response} 
				 	dispatch(newAction)
				 })
	}
}*/

export default function({dispatch}) {
	return  next => async action => {
		if(!action.payload || !action.payload.then) {
			return next(action)
		}

		const res = await action.payload
		const newAction = {...action, payload: res}
		dispatch(newAction) 
	}
}
