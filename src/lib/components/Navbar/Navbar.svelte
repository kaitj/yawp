<script lang="ts">
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import { AppBar, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { Menu } from 'lucide-svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	let currentPath = page.url.pathname;

	afterNavigate(({ to }) => {
		if (to) {
			currentPath = to.url.pathname;
		}
	});

	const tabs = [
		{ href: '/', label: 'Home' },
		{ href: '/story', label: 'Story' },
		// { href: '#', label: 'Schedule' },
		{ href: '/accommodations', label: 'Accommodations' },
		{ href: '/travel', label: 'Travel' }
		// { href: '#', label: 'Q & A' }
	];
</script>

<!-- Mobile Header -->
<AppBar
	class="md:hidden w-full p-4"
	background="bg-transparent"
	gridColumns="grid-cols-3"
	slotDefault="place-self-center"
	slotTrail="place-content-end"
>
	<svelte:fragment slot="lead">
		<div></div>
	</svelte:fragment>
	<h1 class="h1 lg:text-6xl text-tertiary-300 text-center">Lauren & Jason</h1>
	<svelte:fragment slot="trail">
		<button class="text-tertiary-300 p-2" on:click={toggleMenu} aria-label="Toggle navigation menu">
			<Menu size={24} />
		</button>
	</svelte:fragment>
</AppBar>

<!-- Desktop Header -->
<AppBar
	class="hidden md:flex flex-col items-center justify-center w-full p-6 lg:p-8"
	background="bg-transparent"
>
	<h1 class="h1 xs:text-6xl lg:text-6xl text-tertiary-300 text-center mb-4">Lauren & Jason</h1>

	<nav class="list-nav p-2 md:p-4 text-tertiary-300 w-full overflow-x-auto">
		<TabGroup
			justify="justify-center"
			active="text-tertiary-500"
			hover="hover:text-tertiary-300"
			flex="flex-1 lg:flex-none"
			rounded=""
			border=""
			class="items-center w-full text-sm md:text-sm lg:text-md xl:text-lg space-x-2 md:space-x-8"
		>
			{#each tabs as tab}
				<TabAnchor
					href={tab.href}
					selected={currentPath === tab.href}
					class="whitespace-nowrap uppercase">{tab.label}</TabAnchor
				>
			{/each}
		</TabGroup>
	</nav>
</AppBar>

<!-- Mobile Navigation Menu -->
{#if isMenuOpen}
	<nav class="md:hidden flex flex-col p-2 w-full rounded-lg space-y-2">
		{#each tabs as tab}
			<TabAnchor
				href={tab.href}
				class="block w-full text-center p-3 rounded-md uppercase {currentPath === tab.href
					? 'text-tertiary-500'
					: 'text-tertiary-300'}"
				on:click={toggleMenu}
			>
				{tab.label}
			</TabAnchor>
		{/each}
	</nav>
{/if}
