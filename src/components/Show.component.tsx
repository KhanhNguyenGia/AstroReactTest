import { useStore } from '@nanostores/react';
import { count } from '../store/count';

const ShowCounter = () => {
	const $count = useStore(count);
	return <div className='border-red-500 border-solid border-2 mb-10'>Count: {$count}</div>;
};

export default ShowCounter;
