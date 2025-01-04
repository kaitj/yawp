import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

const initialState = isBrowser
	? JSON.parse(localStorage.getItem('authState') || '{"unlocked": false}')
	: { unlocked: false };

export const authStore = writable(initialState);

if (isBrowser) {
	authStore.subscribe((value) => {
		localStorage.setItem('authState', JSON.stringify(value));
	});
}
