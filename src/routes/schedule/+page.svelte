<script lang="ts">
    interface Event {
        day: string;
        date: string;
        time: string;
        name: string;
        location: string;
        description: string;
        attire?: string;
		image?: string;
    }

    	const events: Event[] = [
		{
			day: 'Thursday',
			date: 'April 16, 2026',
			time: '7:00 PM',
			name: 'Welcome Party',
			location: 'Rectangular Pool Terrace',
			description: 'An open-air terrace beside a glowing pool to start the celebrations.',
			attire: 'Tropical / Hawaiian',
			image: '/images/schedule/pool.jpg'
		},
		{
			day: 'Saturday',
			date: 'April 18, 2026',
			time: '3:00 PM',
			name: 'Wedding Ceremony',
			location: 'Beach',
			description: 'Celebrate with us right on the sand, with ocean breezes, and ocean views.',
			attire: 'Beach Cocktail',
			image: '/images/schedule/beach.jpg'
		},
		{
			day: 'Saturday',
			date: 'April 18, 2026',
			time: '5:30 PM',
			name: 'Cocktail Hour',
			location: 'Cenoté Terrace',
			description: 'Overlooking a natural cenoté and wrapped in lush greenery, this peaceful terrace sets the tone for the evening—an inviting place to mingle and enjoy a drink.',
			attire: 'Beach Cocktail',
			image: '/images/schedule/cenote_terrace.jpeg'
		},
		{
			day: 'Saturday',
			date: 'April 18, 2026',
			time: '6:30 PM',
			name: 'Reception',
			location: 'Secret Garden',
			description: 'Enjoy an evening in a hidden garden filled with tropical plants, soft lighting, and a cozy, intimate feel.',
			attire: 'Beach Cocktail',
			image: '/images/schedule/secret_garden.jpg'
		},
		{
			day: 'Monday',
			date: 'April 20, 2026',
			time: '1:30 PM',
			name: 'Excursion',
			location: 'Inha Reef',
			description: 'Join us for a yacht and snorkeling excursion (transportation included).',
			attire: 'Swimwear',
			image: '/images/schedule/yacht.jpeg'
		}
	];
</script>

<div class="flex flex-col text-center justify-center items-center">
	<div class="w-full max-w-2xl mb-8">
		<div class="w-3/5 mx-auto h-96 overflow-hidden">
			<img 
				src="/images/schedule/fitzroy_islands.jpg" 
				alt="The Fitzroy Islands in Australia" 
				class="w-full h-full object-cover object-bottom rounded-lg border-2 border-green-700"
			/>
		</div>
	</div>

    <h2 class="h2 p-6 md:text-4xl xs:text-2xl text-tertiary-400">Schedule of Events</h2>

	<!-- Timeline -->
	<div class="w-full max-w-5xl mx-auto mb-8 relative">
		<!-- Vertical line (hidden on mobile) -->
		<div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-green-700 transform -translate-x-1/2"></div>

		{#each events as event, index}
			<div class="relative mb-12 md:mb-16">
				<!-- Mobile layout (stacked) -->
				<div class="md:hidden px-6">
					<!-- Timeline dot -->
					<div class="md:ml-8 bg-green-700 rounded-lg shadow-md p-5 text-left text-white">
						<h3 class="text-xl font-semibold text-tertiary-400">{event.day}</h3>
						{#if event.image}
							<img src="{event.image}" alt="{event.location}" class=" mx-auto mt-2 rounded-lg"/>
						{/if}
						<p class="text-sm text-green-700">{event.date}</p>
						<p class="font-semibold text-tertiary-400 mb-2">{event.time}</p>
						<h4 class="text-lg font-semibold mb-2">{event.name}</h4>
						<p class="text-sm mb-3">
							<span class="font-semibold text-tertiary-400">Location:</span>
							{event.location}
						</p>
						<p class="text-justify text-sm mb-3">{event.description}</p>
						{#if event.attire}
							<p class="text-sm">
								<span class="font-semibold text-tertiary-400">Attire:</span>
								{event.attire}
							</p>
						{/if}
					</div>
				</div>

				<!-- Desktop layout (alternating) -->
				<div class="hidden md:block">
					{#if index % 2 === 0}
						<!-- Left side -->
						<div class="grid grid-cols-2 gap-8 items-center">
							<div class="text-right">
								<div class="bg-green-700 rounded-lg shadow-md p-6 text-white">
									<div class="mb-3">
										<h3 class="text-xl font-semibold text-tertiary-400">{event.day}</h3>
										<p class="text-sm text-white">{event.date}</p>
									</div>
									<p class="font-semibold text-tertiary-400 mb-2">{event.time}</p>
									<h4 class="text-xl font-semibold mb-2">{event.name}</h4>
									<p class="text-sm text-white mb-3">
										<span class="font-semibold text-tertiary-400">Location:</span>
										{event.location}
									</p>
									<p class="text-right mb-3">{event.description}</p>
									{#if event.attire}
										<p class="text-sm text-right">
											<span class="font-semibold text-tertiary-400">Attire:</span>
											{event.attire}
										</p>
									{/if}
								</div>
							</div>
							<div class="relative">
								<!-- Timeline dot -->
								<div class="absolute left-1 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-green-400 border-4 border-green-700 shadow-md z-10"></div>
								{#if event.image}
									<img src="{event.image}" alt="{event.location}" class="w-4/5 mx-auto ml-6 rounded-lg border-4 border-green-700"/>
								{/if}
							</div>
						</div>
					{:else}
						<!-- Right side -->
						<div class="grid grid-cols-2 gap-8 items-center">
							<div class="relative">
								<!-- Timeline dot -->
								<div class="absolute right-1 top-1/2 transform -translate-y-1/2 translate-x-1/2 w-6 h-6 rounded-full bg-green-400 border-4 border-green-700 shadow-md z-10"></div>
								{#if event.image}
									<img src="{event.image}" alt="{event.location}" class="w-4/5 mx-auto mr-6 rounded-lg border-4 border-green-700"/>
								{/if}
							</div>
							<div class="text-left">
								<div class="bg-green-700 rounded-lg shadow-md p-6 text-white">
									<div class="mb-3">
										<h3 class="text-xl font-semibold text-tertiary-400">{event.day}</h3>
										<p class="text-sm text-white">{event.date}</p>
									</div>
									<p class="font-semibold text-tertiary-400 mb-2">{event.time}</p>
									<h4 class="text-xl font-semibold mb-2">{event.name}</h4>
									<p class="text-sm text-white mb-3">
										<span class="font-semibold text-tertiary-400">Location:</span>
										{event.location}
									</p>
									<p class="text-left mb-3">{event.description}</p>
									{#if event.attire}
										<p class="text-sm">
											<span class="font-semibold text-tertiary-400">Attire:</span> {event.attire}
										</p>
									{/if}
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>

	<!-- Additional Information
	<div class="w-full max-w-4xl mx-auto mb-8 text-white px-6">
		<div class="bg-green-700 rounded-lg p-6">
			<h3 class="text-xl font-semibold mb-4 text-tertiary-400">Important Notes</h3>
			<div class="text-left space-y-3 md:text-base xs:text-sm">
				<p>
					<strong>Attire Guidance:</strong> "Formal Beach Attire" means cocktail dresses, sundresses, 
					or suits in light, breathable fabrics. Avoid stiletto heels as events will be on sand and grass.
				</p>
				<p>
					<strong>Weather:</strong> Average temperatures in May range from 75-85°F. We recommend 
					bringing sunscreen and staying hydrated throughout the festivities.
				</p>
				<p>
					<strong>Children:</strong> We love your little ones, but we've reserved this weekend as an 
					adults-only celebration. We hope this allows you to relax and enjoy yourselves.
				</p>
			</div>
		</div>
	</div> -->
</div>