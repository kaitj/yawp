<script lang="ts">
	import { page } from '$app/state';
	import { AppBar, TabAnchor, TabGroup } from '@skeletonlabs/skeleton';
	import { Menu } from 'lucide-svelte';

	let isMenuOpen = false;

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	const tabs = [
		{ href: '/', label: 'Save the Date' },
		// { href: '/', label: 'Welcome' },
		// { href: '#', label: 'Wedding Party' },
		// { href: '#', label: 'Story' },
		// { href: '#', label: 'Schedule' },
		{ href: '/travel', label: 'Travel' },
		{ href: '/accommodations', label: 'Accommodations' }
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
			active="text-tertiary-300"
			hover="hover:text-tertiary-300"
			flex="flex-1 lg:flex-none"
			rounded=""
			border=""
			class="items-center w-full text-sm md:text-sm lg:text-md xl:text-lg space-x-2 md:space-x-8"
		>
			{#each tabs as tab}
				<TabAnchor
					href={tab.href}
					selected={page.url.pathname === tab.href}
					class="whitespace-nowrap uppercase">{tab.label}</TabAnchor
				>
			{/each}
		</TabGroup>
	</nav>
</AppBar>

<!-- Mobile Navigation Menu -->
{#if isMenuOpen}
	<nav class="md:hidden flex flex-col p-2 text-tertiary-300 w-full rounded-lg space-y-2">
		{#each tabs as tab}
			<TabAnchor
				href={tab.href}
				selected={page.url.pathname === tab.href}
				class="block w-full text-center p-3 rounded-md uppercase"
				on:click={toggleMenu}
			>
				{tab.label}
			</TabAnchor>
		{/each}
	</nav>
{/if}
