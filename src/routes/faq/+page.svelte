<script lang="ts">
	const faqs = [{ question: 'What questions do I have?', answer: 'None -- too smart!' }];
</script>

<div class="flex flex-col text-center justify-center items-center">
	<!-- Center image -->
	<div class="w-full max-w-2xl mb-8">
		<img src="/images/faq/finn_head.jpg" alt="Finn with cocked head" class="w-4/5 mx-auto" />
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black">
		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">Have questions?</h2>
		<ul class="text-left">
			{#each faqs as faq}
				<li>
					<strong>{faq.question}</strong>
					<br />
					{faq.answer}
				</li>
			{/each}
		</ul>
	</div>
</div>
