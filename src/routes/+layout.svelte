<script lang="ts">
	import Banner from '$lib/components/Navbar/Banner.svelte'
	import Navbar from '$lib/components/Navbar/Navbar.svelte'
	import { authStore } from '$lib/stores/auth'
	import '../app.postcss'
// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom'
	import { storePopup } from '@skeletonlabs/skeleton'
	import { onMount } from 'svelte'

	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	// Define background images for different screen sizes
	const backgrounds = {
		mobile: '/images/anna-sullivan-tulum.jpg',
		desktop: '/images/jorge-fernandez-salas-tulum.jpg'
	};

	let currentBackground = backgrounds.desktop;

	function updateBackground() {
		if (window.innerWidth <= 640) {
			currentBackground = backgrounds.mobile;
		} else {
			currentBackground = backgrounds.desktop;
		}
	}

	// Unlock logic
	let unlocked = false;
	let password = '';
	let errorMessage = '';
	let correctPassword = 'MrFinnegan';

	function handleLogin() {
		if (password === correctPassword) {
			authStore.set({ unlocked: true });
			localStorage.setItem('authState', JSON.stringify({ unlocked: true }));
			unlocked = true;
		} else {
			errorMessage = 'Incorrect password. Please try again.';
		}
	}

	// Subscribe to auth store changes
	authStore.subscribe((value) => {
		unlocked = value.unlocked;
	});

	onMount(() => {
		// Check localStorage first
		const storedAuth = localStorage.getItem('authState');
		if (storedAuth) {
			try {
				const { unlocked: isUnlocked } = JSON.parse(storedAuth);
				if (isUnlocked) {
					unlocked = true;
					authStore.set({ unlocked: true });
				}
			} catch (error) {
				console.error('Error parsing stored auth state:', error);
				localStorage.removeItem('authState');
			}
		}

		updateBackground();
		window.addEventListener('resize', updateBackground);
		return () => window.removeEventListener('resize', updateBackground);
	});
</script>

<svelte:head>
	<title>Lauren & Jason</title>
</svelte:head>

<!-- Fixed background container w/ blur overlay-->
<div
	class="fixed inset-0 w-full h-full"
	style="background-image: url('{currentBackground}'); background-size: cover; background-position: center;"
	aria-label="Background"
>
	<div class="absolute inset-0 bg-black/40 backdrop-blue-sm"></div>
</div>

<!-- Main content area -->
<div class="relative flex items-center justify-center min-h-screen w-full">
	{#if unlocked}
		<div class="bg-sand-150/95 min-h-screen w-full p-4 md:p-6 lg:p-8 md:mx-auto md:w-4/5 lg:w-3/5">
			<header class="top-0 z-10">
				<Navbar />
			</header>

			<main class="flex-grow">
				<slot />
			</main>
		</div>
	{:else}
		<div class="min-h-screen w-full p-4 md:p-6 lg:p-8 md:mx-auto md:w-4/5 lg:w-3/5">
			<header class="top-0 z-10">
				<Banner />
			</header>

			<main class="mt-16 flex-1 h-full">
				<div class="grid place-items-center">
					<p class="text-center md:text-xl xs:text-md mb-6 text-tertiary-400">
						Enter the password to continue
					</p>
					<div class="flex flex-col items-center">
						<input
							type="password"
							bind:value={password}
							placeholder="Password"
							class="mb-4 px-4 py-2 border border-tertiary-400 rounded focus:outline-none focus:ring-2 focus:ring-tertiary-400 md:text-xl xs:text-md text-tertiary-400 placeholder-tertiary-200"
						/>
						<button
							on:click={handleLogin}
							class="px-6 py-2 bg-tertiary-400 text-white md:text-xl xs:text-md font-semibold rounded hover:bg-tertiary-600"
						>
							Login
						</button>
						{#if errorMessage}
							<p class="mt-4 text-red-500 md:text-lg xs:text-xs">{errorMessage}</p>
						{/if}
					</div>
				</div>
			</main>
		</div>
	{/if}
</div>
