<script lang="ts">
    interface Person {
		name: string;
		role: string;
		description?: string;
		image?: string;
    }

	const flowerGirl: Person = {
		name: "Liana Reid",
		role: "Flower Girl",
	}

	const bridal: Person[] = [
		{ name: "Isabela Ozamiz", role: "Co-Matron of Honour" },
		{ name: "Sara Santini", role: "Co-Maid of Honour" },
		{ name: "Alexandra McDonald", role: "Bridesmaid" },
		{ name: "Nikki Dehnashi", role: "Bridesmaid" },
		{ name: "Samantha Ligotti", role: "Bridesmaid" },
		{ name: "Jenna Rabaj", role: "Bridesmaid" },
		{ name: "Katherine Sunley", role: "Bridesmaid" }
	];

	const groomsmen: Person[] = [
		{ name: "Ryan Yee", role: "Best Man" },
		{ name: "Curtis McDonald", role: "Groomsmen" },
		{ name: "Ben MacNally", role: "Groomsman" },
		{ name: "Geoffrey Ngo", role: "Groomsman" },
		{ name: "Nick Simard", role: "Groomsman" }
	];

	const bridalHonor = bridal.filter(p => p.role.includes('Honour'));
	const bridalRegular = bridal.filter(p => !p.role.includes('Honour'));
	const groomsmenHonor = groomsmen.filter(p => p.role === 'Best Man');
	const groomsmenRegular = groomsmen.filter(p => p.role !== 'Best Man');

	const desktopSections = [
		{ title: "Maid & Matron of Honour", people: bridalHonor, colorClass: "tertiary" },
		{ title: "Best Man", people: groomsmenHonor, colorClass: "green" },
		{ title: "Bridesmaids", people: bridalRegular, colorClass: "tertiary" },
		{ title: "Groomsmen", people: groomsmenRegular, colorClass: "green" }
	];

	const mobileSections = [
		{ title: "Maid & Matron of Honour", people: bridalHonor, colorClass: "tertiary" },
		{ title: "Bridesmaids", people: bridalRegular, colorClass: "tertiary" },
		{ title: "Best Man", people: groomsmenHonor, colorClass: "green" },
		{ title: "Groomsmen", people: groomsmenRegular, colorClass: "green" }
	];

	function getColorClasses(colorClass: string) {
		return colorClass === 'tertiary' 
			? { header: 'text-tertiary-600', name: 'text-tertiary-400', border: 'border-tertiary-200', ring: 'ring-tertiary-100', borderImg: 'border-tertiary-600' }
			: { header: 'text-green-800', name: 'text-green-400', border: 'border-green-200', ring: 'ring-green-100', borderImg: 'border-green-600' };
	}
</script>

<div class="flex flex-col text-center justify-center items-center py-6">
	<div class="relative mb-12">
		<h2 class="h2 md:text-4xl xs:text-2xl text-tertiary-400">The Wedding Party</h2>
	</div>

	<div class="w-full max-w-6xl mx-auto mb-8 px-6">
		<!-- Flower Girl -->
		<div class="relative flex flex-col items-center">
			<h3 class="text-2xl font-bold mb-4 text-tertiary-600 relative">Flower Girl</h3>
			<div class="space-y-6 md:space-y-4">
				<div class="flex items-center gap-6 bg-white mb-8 md:mb-0 rounded-2xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300 border-2 border-tertiary-200 w-full">
					<div class="text-left">
						<h4 class="text-xl font-bold text-tertiary-400">🌸 {flowerGirl.name}</h4>
						{#if flowerGirl.description}
							<p class="text-sm mt-2 text-gray-600">{flowerGirl.description}</p>
						{/if}
					</div>
				</div>
			</div>
		</div>

		<!-- Desktop Grid -->
		<div class="hidden md:grid md:grid-cols-2 mt-8 gap-x-12 gap-y-8">
			{#each desktopSections as section (section.people)}
				{@const colors = getColorClasses(section.colorClass)}
				<div class="relative">
					<h3 class="text-xl font-bold mb-4 {colors.header} relative h-14 flex items-center justify-center">
						{section.title}
					</h3>
					<div class="space-y-4">
						{#each section.people as person (person.name)}
							<div class="flex items-center gap-4 bg-white rounded-2xl shadow-lg p-4 transform hover:scale-105 transition-transform duration-300 border-2 {colors.border}">
								<div class="flex-shrink-0">
									<div class="w-20 h-20 rounded-full overflow-hidden border-4 {colors.borderImg} shadow-md ring-4 {colors.ring}">
										<img 
											src="{person.image || '/images/wedding-party/placeholder.png'}" 
											alt="{person.name}"
											class="w-full h-full object-cover"
										/>
									</div>
								</div>
								<div class="text-left">
									<h4 class="text-lg font-bold {colors.name}">{person.name}</h4>
									{#if person.description}
										<p class="text-sm mt-2 text-gray-600">{person.description}</p>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<!-- Mobile Layout -->
		<div class="md:hidden space-y-12">
			{#each mobileSections as section (section.people)}
				{@const colors = getColorClasses(section.colorClass)}
				<div class="relative">
					<h3 class="text-xl font-bold mb-6 {colors.header} relative">{section.title}</h3>
					<div class="space-y-4">
						{#each section.people as person (person.name)}
							<div class="flex items-center gap-4 bg-white rounded-2xl shadow-lg p-4 border-2 {colors.border}">
								<div class="flex-shrink-0">
									<div class="w-20 h-20 rounded-full overflow-hidden border-4 {colors.borderImg} shadow-md ring-2 {colors.ring}">
										<img 
											src="{person.image || '/images/wedding-party/placeholder.png'}" 
											alt="{person.name}"
											class="w-full h-full object-cover"
										/>
									</div>
								</div>
								<div class="text-left">
									<h4 class="text-lg font-bold {colors.name}">{person.name}</h4>
								</div>
							</div>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>