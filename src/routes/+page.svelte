<script>
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
	<div class="max-w-2xl mx-auto mb-8">
		<img src="/images/veil.jpeg" alt="Old Mill" class="w-4/5 mx-auto rounded-lg border-2 border-green-700"/>
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">We can't wait to celebrate with you</h2>
		<p class="md:text-lg xs:text-md text-center">
			We're so excited to share that we'll be saying "I do" at our destination wedding in Tulum, Mexico
			and are looking forward to celebrating with our friends and family!
		</p>
	</div>

	<!-- Two column section -->
	<div class="md:text-lg xs:text-md my-auto text-center text-green-700">
		<div class="flex flex-col text-3xl font-bold my-auto text-center text-green-700 mb-8">
			April 18, 2026
		</div>
		<div class="flex gap-6 justify-center text-center">
			{#each Object.entries(timeLeft) as [label, value] (label)}
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
		<br/>
		<p class="pt-6 md:text-lg xs:text-md text-center">
			See the <a href="/schedule" class="underline text-tertiary-500 hover:text-green-400"
				rel="noopener noreferrer">schedule</a> for more details!
		</p>
	</div>
</div>
