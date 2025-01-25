<script lang="ts">
	const faqs = [
		{
			question: 'Do I have to put a deposit by the deadline?',
			answer:
				'We strongly encourage our guests to place their deposit by April 15, 2025 to secure their flights and accommodations at preferred prices. After this date, we cannot guarantee room availability or preferred prices.'
		},
		{
			question: 'Can I bring a plus one?',
			answer:
				'Unfortunately our wedding venue has limited capacity and we will not be able to accommodate additional guests in our celebrations. Please review your invitations for indications of additional guests.'
		},
		{
			question: 'Is there anything that is not included?',
			answer:
				'Dreams Tulum is an all-inclusive resort - all food and drinks are included in your booking. Although tips are technically included, you will want to bring some small bills for the staff taking care of you throughout your stay. If you are interested in spa treatments or excursions around the area, you may book them at additional cost through the resort.'
		},
		{
			question: 'Do I need a passport?',
			answer:
				'Yes! As you are traveling internationally you do need a passport valid with at least 6+ months past your travel dates.'
		}
	];
</script>

<div class="flex flex-col text-center justify-center items-center">
	<!-- Center image -->
	<div class="w-full max-w-2xl mb-8">
		<img src="/images/faq/finn_head.jpg" alt="Finn with cocked head" class="w-4/5 mx-auto" />
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">Have questions?</h2>
		<ul class="text-left md:text-lg xs:text-md">
			{#each faqs as faq}
				<li class="mb-6">
					<strong>{faq.question}</strong>
					<br />
					{faq.answer}
				</li>
			{/each}
		</ul>
	</div>
</div>
