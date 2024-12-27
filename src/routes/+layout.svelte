<script lang="ts">
	import Banner from '$lib/components/Navbar/Banner.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import '../app.postcss';
	// Floating UI for Popups
	import { arrow, autoUpdate, computePosition, flip, offset, shift } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

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

	onMount(() => {
		updateBackground();
		window.addEventListener('resize', updateBackground);
		return () => window.removeEventListener('resize', updateBackground);
	});

	// Unlock logic
	let unlocked = false;
	let password = '';
	let errorMessage = '';
	let correctPassword = 'MrFinnegan';

	function handleLogin() {
		if (password === correctPassword) {
			unlocked = true;
		} else {
			errorMessage = 'Incorrect password. Please try again.';
		}
	}
</script>

<svelte:head>
	<title>Lauren & Jason</title>
</svelte:head>

<div
	class="relative min-h-screen"
	style="background-image: url('{currentBackground}'); background-size: cover; background-position: center;"
	aria-label="Background"
>
	<!-- Background container -->
	<div class="absolute inset-0">
		<!-- Apply background blur and opacity -->
		<div class="absolute inset-0 bg-black/20 backdrop-blur-sm">
			<!-- Main content area -->
			<div class="relative flex items-center justify-center min-h-screen">
				{#if unlocked}
					<div
						class="bg-white/95 min-h-screen w-full p-4 md:p-6 lg:p-8 md:mx-auto md:w-4/5 lg:w-3/5"
					>
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
								<p class="text-center md:text-xl xs:text-md mb-6 text-tertiary-300">
									Enter the password to continue
								</p>
								<div class="flex flex-col items-center">
									<input
										type="password"
										bind:value={password}
										placeholder="Password"
										class="mb-4 px-4 py-2 border border-tertiary-300 rounded focus:outline-none focus:ring-2 focus:ring-tertiary-400 md:text-xl xs:text-md text-tertiary-300 placeholder-tertiary-200"
									/>
									<button
										on:click={handleLogin}
										class="px-6 py-2 bg-tertiary-300 text-white md:text-xl xs:text-md font-semibold rounded hover:bg-tertiary-600"
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
		</div>
	</div>
</div>
