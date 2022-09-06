import React from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import './App.css';

const Apple = () => {	
	const dispatch = useDispatch();
	const appleState = useSelector(
		(state) => {
		// console.log(`Apple useSelector: state = ${JSON.stringify(state)}`)
		return state.apple;
		}, 
		shallowEqual 
	);	
	const num = parseInt(appleState.split(" ")[1]);
	console.log(`Apple num = ${num}`);	
    return (
	<div>
      <button type="button" className="my-button"
				onClick={() => dispatch({type: 'incrementCount', name: "apple", num: num})}
	  >
		Apple
      </button>
	  <div className="my-component">
		<img src="https://blog.geekitude.com/wp-content/uploads/2022/09/braeburn_variety-page-50x50-1.png" alt="Braeburn apple"/>{appleState}
	  </div>
	</div>
    );
}
	  
const Mushroom = () => {	
	const dispatch = useDispatch();
	const mushroomState = useSelector(
		(state) => {
		// console.log(`Mushroom useSelector: state = ${JSON.stringify(state)}`)
		return state.mushroom;
		}, 
		shallowEqual 
	  );	
	const num = parseInt(mushroomState.split(" ")[1]);
	console.log(`Mushroom num = ${num}`);
	return (
	<div>
	  <button type="button" className="my-button"
			onClick={() => dispatch({type: 'incrementCount', name: "mushroom", num: num})}
	  >
		Mushroom
	  </button>
	  <div className="my-component">
		<img src="https://blog.geekitude.com/wp-content/uploads/2022/09/portobello-2006620_1280_50.png" alt="Portabella mushrooms"/>{mushroomState}
	  </div>
	</div>
	);
}

function App() {
  return (
    <div className="App">
	<p>Click either "Apple" or "Mushroom" button. The counter in the corresponding white box will increase. With React Dev Tools enabled in the browser, it will show which component has re-rendered.</p>
		<Apple/>
		<Mushroom/>
    </div>
  );
}

export default App;
