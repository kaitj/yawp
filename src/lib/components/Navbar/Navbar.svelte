<script lang="ts">
	import { afterNavigate } from '$app/navigation'
	import { AppBar } from '@skeletonlabs/skeleton'
	import { Menu } from 'lucide-svelte'

	let isMenuOpen = false;
	let currentPath = window.location.pathname;

	afterNavigate(({ to }) => {
		if (to) currentPath = to.url.pathname;
	});

	const tabs = [
		{ href: '/', label: 'Home' },
		{ href: '/schedule', label: 'Schedule' },
		{ href: '/story', label: 'Story' },
		{ href: '/wedding-party', label: 'Wedding Party'},
		{ href: '/accommodations', label: 'Accommodations' },
		{ href: '/travel', label: 'Travel' },
		{ href: '/faq', label: 'Q & A' }
	];
</script>

<!-- Mobile Header -->
<AppBar class="md:hidden p-4" background="bg-transparent" gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
	<svelte:fragment slot="lead"><div></div></svelte:fragment>
	<h1 class="h1 text-4xl text-tertiary-400 text-center">Lauren & Jason</h1>
	<svelte:fragment slot="trail">
		<button class="text-tertiary-400 p-2" on:click={() => isMenuOpen = !isMenuOpen} aria-label="Toggle navigation menu">
			<Menu size={24} />
		</button>
	</svelte:fragment>
</AppBar>

<!-- Desktop Header -->
<AppBar class="hidden md:flex flex-col items-center justify-center p-4 md:p-6" background="bg-transparent">
	<h1 class="h1 text-4xl md:text-5xl lg:text-6xl text-tertiary-400 text-center mb-4">Lauren & Jason</h1>
	<nav class="text-tertiary-400 w-full">
		<div class="flex flex-wrap items-center justify-center md:mt-8 gap-x-2 md:gap-x-3 lg:gap-x-6 gap-y-2 text-xs md:text-sm lg:text-base">
			{#each tabs as tab (tab.href)}
				<a 
					href={tab.href}
					class="uppercase px-2 py-1 transition-colors {currentPath === tab.href ? 'text-green-700' : 'text-tertiary-400 hover:text-green-400'}"
				>
					{tab.label}
				</a>
			{/each}
		</div>
	</nav>
</AppBar>

<!-- Mobile Navigation Menu -->
{#if isMenuOpen}
	<nav class="md:hidden flex flex-col p-2 rounded-lg space-y-2">
		{#each tabs as tab (tab.href)}
			<a
				href={tab.href}
				class="block w-full text-center p-3 rounded-md uppercase {currentPath === tab.href ? 'text-tertiary-500' : 'text-tertiary-400'}"
				on:click={() => isMenuOpen = false}
			>
				{tab.label}
			</a>
		{/each}
	</nav>
{/if}