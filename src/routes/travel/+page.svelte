<script lang="ts">
	import Agent from '$lib/components/Travel/Agent.svelte'
</script>

<div class="flex flex-col text-center justify-center items-center">
	<!-- Center image -->
	<div class="w-full max-w-2xl mb-8">
		<img src="/images/travel/finn.jpeg" alt="Save the date" class="w-4/5 mx-auto rounded-lg border-2 border-green-700" />
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">To Mexico</h2>
		<div
			class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 text-black text-center"
		>
			<!-- Details (need to be reworded-->
			<div class="md:text-lg xs:text-md">
				<h3 class="mb-4 text-green-700">From Toronto</h3>
				<p class="text-justify">
					We have arranged round-trip flights for our guests traveling from Pearson International
					Airport (YYZ) to Cancún International Airport (CUN) with Air Transat. This seat (and
					accommodation) is guaranteed with your deposit.
				</p>
			</div>

			<!-- Vertical divider -->
			<div class="hidden md:block w-px bg-tertiary-400"></div>

			<!-- Forms -->
			<div class="md:text-lg xs:text-md my-auto">
				<h3 class="mb-4 text-green-700">From Elsewhere</h3>
				<p class="text-justify">
					For guests traveling from outside of Toronto, you have the option to <strong
						>(1) fly to Toronto and travel with the wedding party</strong
					>
					or <strong>(2) arrange your own flights and book room-only</strong>. For either option,
					please contact our <Agent />.
				</p>
			</div>
		</div>
		<br />

		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">To Resort</h2>
		<p class="text-justify md:text-lg xs:text-md">
			The resort is approximately 75 minutes from Cancún International Airport (CUN). If you're
			traveling from Toronto, round-trip transfers have already been arranged. If you're flying in
			from somewhere else, round-trip transfers can be arranged with our <Agent />.
		</p>
	</div>
</div>
