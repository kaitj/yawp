import { skeleton } from '@skeletonlabs/tw-plugin';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import { join } from 'path';
import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
	theme: {
		extend: {
			colors: {
				sand: {
					50: '#fdf8f4',
					100: '#f9f1e9',
					150: '#f6ebdf',
					200: '#f3e4d3',
					300: '#ecd3b5',
					400: '#e4bf91',
					500: '#d9a86a',
					600: '#b58350',
					700: '#8e6540',
					800: '#6d4c32',
					900: '#523926'
				}
			}
		}
	},
	plugins: [
		forms,
		typography,
		skeleton({
			themes: {
				preset: [
					{
						name: 'seafoam',
						enhancements: true
					}
				]
			}
		})
	]
} satisfies Config;
