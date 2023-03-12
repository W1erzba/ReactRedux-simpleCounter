import { useSelector, useDispatch } from 'react-redux';
// Default Redux hook allowing us select a part of our state menaged by the store.

import classes from './Counter.module.css';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector((state) => state.counter);

	const incrementHandler = () => {
		dispatch({ type: 'increment' });
	};

	const decrementHandler = () => {
		dispatch({ type: 'decrement' });
	};

	const toggleCounterHandler = () => {};

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>Increment</button>
				<button onClick={decrementHandler}>Decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;

/*
TODO: Class based components version TODO:

import { Component } from 'react';
import { connect } from 'react-redux';
for classbassed component we have to use 'connect' hook from redux.

class Counter extends Component {
	// constructor() - no state here so do not needed
	incrementHandler() {
		this.props.increment();
	}

	decrementHandler() {
		this.props.decrement();
	}

	toggleCounterHandler() {}

	render() {
		return (
			<main className={classes.counter}>
				<h1>Redux Counter</h1>
				<div className={classes.value}>{this.props.counter}</div>
				<div>
					<button onClick={this.incrementHandler.bind(this)}>Increment</button>
					<button onClick={this.decrementHandler.bind(this)}>Decrement</button>
				</div>
				<button onClick={this.toggleCounterHandler}>Toggle Counter</button>
			</main>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		counter: state.counter,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment: () => dispatch({ type: 'increment' }),
		decrement: () => dispatch({ type: 'decrement' }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter); // connect is higherOrder componentm and there we have function with has to have argument also so there we are giving a Counter as a seccond argument and mapStateToProps as seccond also with subArgument with is mapDispatchToProps with is an class version of dispatch from store....
*/
