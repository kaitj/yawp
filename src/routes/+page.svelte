<script>
	import Agent from '$lib/components/Travel/Agent.svelte'
	import { onDestroy, onMount } from 'svelte'

	const WEDDING_DATE = new Date('2026-04-18T15:00:00-05:00')

	let timeLeft = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	}

	let interval 

	function calculateTimeLeft() {
		const now = new Date()
		const diff = Math.max(0, WEDDING_DATE - now)

		const seconds = Math.floor(diff / 1000)
		timeLeft = {
			days: Math.floor(seconds / 86400),
			hours: Math.floor((seconds % 86400) / 3600),
			minutes: Math.floor((seconds % 3600) / 60),
			seconds: seconds % 60
		}
	}

	onMount(() => {
		calculateTimeLeft()
		interval = setInterval(calculateTimeLeft, 1000)
	})

	onDestroy(() => clearInterval(interval))
</script>

<div class="flex flex-col text-center justify-center items-center">
	<!-- Center image -->
	<div class="w-full max-w-2xl mx-auto mb-8">
		<img src="/images/save-the-date.jpg" alt="Save the date" />
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">Save the Date</h2>
		<p class="md:text-lg xs:text-md text-center">
			We're so excited to share that we'll be saying "I do" at our destination wedding in Tulum, Mexico
			and are looking forward to celebrating with our friends and family!
		</p>
	</div>

	<!-- Two column section -->
	<div class="md:text-lg xs:text-md my-auto text-center text-black">
		<div class="flex gap-6 justify-center text-center">
			{#each Object.entries(timeLeft) as [label, value]}
				<div class="flex flex-col">
					<span class="text-3xl md:text-4xl font-bold">
						{String(value).padStart(2, '0')}
					</span>
					<span class="uppercase text-xs tracking-wide text-gray-600">
						{label}
					</span>
				</div>
			{/each}
		</div>
		<br/>
		<strong>Travel Dates: April 15 - April 22, 2026</strong>
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 pt-8 md:text-4xl xs:text-md text-tertiary-400 text-center">
			We can’t wait to celebrate with you!
		</h2>
		<p class="pt-6 md:text-lg xs:text-md text-center">
			Please <a
				target="_blank"
				href="https://withjoy.com/laurensmith-and-jasonkai/rsvp"
				class="underline text-tertiary-500 hover:text-tertiary-400"
				rel="noopener noreferrer">complete the form</a
			>
			at your earliest convenience to receive a quote or if you have any questions,
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
			More details and formal invitations to follow.
		</h2>
	</div>
</div>
