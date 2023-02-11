import { persistentAtom } from '@nanostores/persistent';
// import { atom } from 'nanostores';

// ====== MPA ======
export const count = persistentAtom<number>('count', 0, {
	encode: (value) => value.toString(),
	decode: (value) => Number(value),
});

// ====== SPA ONLY ======
// State for the current page only, if reload happens because page changes, state is lost.
// export const count = atom(0);
