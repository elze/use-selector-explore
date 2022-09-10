import { shallowEqual } from 'react-redux';

export const originalState = {
	apple: `Braeburn 1`,
    mushroom: `Portabella 1`	
};


export function reducer(state=originalState, action) {  
  switch (action.type) {
      case 'incrementCount': 
		const num = (action.num + 1) % 10;
		if (action.name === "apple") {
			const newState = {...state, apple: `Braeburn ${num}`}
			console.log(`reducer, case incrementCount: action.name === ${action.name} state = ${JSON.stringify(state)} newState = ${JSON.stringify(newState)} shallowEqual(state.apple, newState.apple) = ${shallowEqual(state.apple, newState.apple)} shallowEqual(state.mushroom, newState.mushroom) = ${shallowEqual(state.mushroom, newState.mushroom)}`);
			return newState;
		}
		const newState = {...state, mushroom: `Portabella ${num}`}
		console.log(`reducer, case incrementCount: action.name === ${action.name} state = ${JSON.stringify(state)} newState = ${JSON.stringify(newState)} shallowEqual(state.apple, newState.apple) = ${shallowEqual(state.apple, newState.apple)} shallowEqual(state.mushroom, newState.mushroom) = ${shallowEqual(state.mushroom, newState.mushroom)}`);			
		return newState;	  
      default:
	      return state;
  }
}
