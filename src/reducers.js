import { shallowEqual } from 'react-redux';

export const originalState = {
	apple: {kind: "Braeburn", quantity: 1},
    mushroom: {kind: "Portabella", quantity: 1}
};


export function reducer(state=originalState, action) {  
  switch (action.type) {
      case 'setData':
        console.log(`reducer, case setData: originalState = ${JSON.stringify(originalState)} `);
        return originalState;   	  	  
      case 'incrementCount': 
		const num = (action.num + 1) % 10;
		if (action.name === "apple") {
			const newState = {...state, apple: {...state.apple, quantity: num}}
			console.log(`reducer, case incrementCount: action.name === ${action.name} state = ${JSON.stringify(state)} newState = ${JSON.stringify(newState)} shallowEqual(state.apple, newState.apple) = ${shallowEqual(state.apple, newState.apple)} shallowEqual(state.mushroom, newState.mushroom) = ${shallowEqual(state.mushroom, newState.mushroom)}`);
			return newState;
		}
		const newState = {...state, mushroom: {...state.mushroom, quantity: num}}
		console.log(`reducer, case incrementCount: action.name === ${action.name} state = ${JSON.stringify(state)} newState = ${JSON.stringify(newState)} shallowEqual(state.apple, newState.apple) = ${shallowEqual(state.apple, newState.apple)} shallowEqual(state.mushroom, newState.mushroom) = ${shallowEqual(state.mushroom, newState.mushroom)}`);			
		return newState;	  
      default:
	      return state;
  }
}
