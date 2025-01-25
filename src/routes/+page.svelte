<script>
	import Agent from '$lib/components/Travel/Agent.svelte';
</script>

<div class="flex flex-col text-center justify-center items-center">
	<!-- Center image -->
	<div class="w-full max-w-2xl mx-auto mb-8">
		<img src="/images/save-the-date.jpg" alt="Save the date" />
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">Save the Date</h2>
		<p class="md:text-lg xs:text-md text-justify">
			We're so excited to share that we'll be saying "I do" on <strong>April 18, 2026</strong>
			and we would love for you to save the date to join us at our destination wedding in Tulum, Mexico!
		</p>
	</div>

	<!-- Two column section -->
	<div class="w-full max-w-4xl grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-8 text-black">
		<!-- Details -->
		<div class="md:text-lg xs:text-md text-center">
			<p>
				Reserve your spot and take advantage of the early-birds rates with a <strong
					>$250 CAD deposit per person</strong
				>, ensuring your ticket and accommodations for an unforgettable week.
			</p>
		</div>

		<!-- Vertical divider -->
		<div class="hidden md:block w-px bg-tertiary-400"></div>

		<!-- Forms -->
		<div class="md:text-lg xs:text-md my-auto text-center">
			<p>
				<strong>Travel Dates: April 15 - April 22, 2026<br /><br />Wedding: April 18, 2026</strong>
			</p>
		</div>
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 pt-8 md:text-4xl xs:text-md text-tertiary-400 text-center">
			We can’t wait to celebrate with you!
		</h2>
		<p class="pt-6 md:text-lg xs:text-md text-justify">
			Please <a
				target="_blank"
				href="https://withjoy.com/laurensmith-and-jasonkai/rsvp"
				class="underline text-tertiary-500 hover:text-tertiary-400"
				rel="noopener noreferrer">RSVP</a
			>
			at your earliest convenience to take advantage of the promotional rates. If you have any questions,
			please do not hesitate to get in
			<a
				href="mailto:lauren.jason.tietheknot@gmail.com"
				class="underline text-tertiary-500 hover:text-tertiary-400"
			>
				touch with us</a
			>
			or reach out to our <Agent />
		</p>

		<h2 class="h2 pt-8 md:text-4xl xs:text-md text-tertiary-400 text-center">
			More details and formal invitations to follow
		</h2>
	</div>
</div>
