import { useSelector } from 'react-redux';
// Default Redux hook allowing us select a part of our state menaged by the store.
// for classbassed component we have to use 'connect' hook from redux.

import classes from './Counter.module.css';

const Counter = () => {
	const counter = useSelector((state) => state.counter);

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
