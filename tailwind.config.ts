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
				},
			green: {
				50: '#f0fdf4',
				100: '#d1f4dc',
				150: '#b3e6c4',
				200: '#86d5a3',
				300: '#5bb884',
				400: '#3a9b6a',
				500: '#2d7d56',
				600: '#256648',
				700: '#1e523b',
				800: '#173f2e',
				900: '#0f2d21'
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
