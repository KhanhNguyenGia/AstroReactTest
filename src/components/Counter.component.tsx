import { useState } from 'react';

export type CounterProps = {};

const Counter = () => {
	const [count, setCount] = useState(1);

	const increment = () => {
		setCount((prev) => Math.min(prev + 1, 100));
	};

	const decrement = () => {
		setCount((prev) => Math.max(prev - 1, 1));
	};

	return (
		<div className='flex items-center justify-center gap-5'>
			<button className='bg-red-400 rounded-lg px-3 py-2' onClick={decrement}>
				-
			</button>
			<input
				type='number'
				min={1}
				max={100}
				value={count}
				onChange={(e) => setCount(+e.target.value)}
			/>
			<button className='bg-green-400 rounded-lg px-3 py-2' onClick={increment}>
				+
			</button>
		</div>
	);
};

export default Counter;
