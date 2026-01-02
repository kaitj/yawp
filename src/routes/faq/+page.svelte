<script lang="ts">
	const faqs = [
		{
			question: 'What is the dress code?',
			answer:
				'We want you to be comfortable! For the wedding ceremony and reception, the attire is Beach Cocktail. According to GPT, this means "dress like you\'re going to a classy party that happens to be near sand - think cocktail hour with a sea breeze, not margaritas after snorkeling."'
		},
		{
			question: 'Can I bring a guest?',
			answer:
				'Due to venue capacity at the resort, we can only accommodate guests named on your invitation. Thank you for understanding!'
		},
		{
			question: 'Do I need to bring a gift?',
			answer:
				'Your presence is truly the greatest gift to us. We know that traveling for our destination wedding takes time and expense, so please do not feel any obligation to bring a gift. If you do wish to honour us with one, a contribution to our <a href="https://withjoy.com/laurensmith-and-jasonkai/registry" class="underline text-tertiary-500 hover:text-green-400" target="_blank" rel="noopener noreferrer">honeymoon fund</a> would be warmly appreciated, but your presence is more than enough.'
		},
		{
			question: 'Do I need a passport?',
			answer:
				'A valid passport is required for travel to Mexico. Please check your passport expiration dates, as they must be valid for at least 6 months past your travel dates. If you need to renew, please do so as soon as possible.'
		},
		{
			question: 'What about transportation to the resort?',
			answer:
				'We have arranged round-trip airport transfers for all our guests booking through our room block! Other travel arrangements can also be made through our <a href="mailto:sstirling@destinationweddings.com" class="underline text-tertiary-500 hover:text-green-400">travel agent</a> if you booked outside of the room block.'
		},
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
					<strong class="text-green-700">{faq.question}</strong>
					<br />
					{@html faq.answer}
				</li>
			{/each}
		</ul>
	</div>
</div>
