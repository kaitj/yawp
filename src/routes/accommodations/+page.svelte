<script lang="ts">
	const rooms = [
		{
			type: 'Deluxe King',
			image: '/images/accommodations/king.webp',
			description: [
				'One king-sized bed',
				'Private, furnished balcony or terrace',
				'Up to 3 guests (adults + children), max of 2 adults',
				'Adult-only option available'
			]
		},
		{
			type: 'Deluxe Double',
			image: '/images/accommodations/double.webp',
			description: [
				'Two double beds',
				'Private, furnished balcony or terrace',
				'Up to 4 guests (adults + children), max of 3 adults',
				'Adult-only option available'
			]
		}
	];
</script>

<div class="flex flex-col justify-center items-center">
	<div class="w-full max-w-2xl mx-auto mb-8">
		<img src="/images/accommodations/dreams-tulum.webp" alt="Dreams Tulum" />
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black text-center">
		<h2 class="h2 p-6 md:text-4xl xs:text-md text-tertiary-400">Dreams Tulum</h2>
		<p class="md:text-lg xs:text-md text-justify">
			We have reserved a block of rooms at <strong>Dreams Tulum</strong> for our wedding guests.
			Booking within this block ensures that you'll stay close to the wedding party and enjoy the
			convenience of being in the heart of the celebration! To secure your spot in the room block,
			please book by
			<strong>[Reservation Deadline Date]</strong> for our promotional rates. After this date, the block
			will be released, and rooms will be subject to availability. You’re still welcome to book a room
			at the resort after the deadline, but we cannot guarantee you'll stay near the wedding party.
		</p>
		<br />
		<section class="grid grid-cols-1 md:grid-cols-2 gap-4">
			{#each rooms as room}
				<div class="card flex flex-col h-full">
					<div class="card-header h-full w-full bg-primary-400 rounded-t-xl">
						<img src={room.image} alt={room.type} class="object-fit h-full w-full" />
					</div>
					<div class="card-body relative min-h-[200px] px-4 bg-primary-400 rounded-b-xl">
						<h3 class="mt-4 md:text-lg xs:text-md">{room.type}</h3>
						<ul class="list-disc pl-8 mt-2 text-left md:text-lg xs:text-md">
							{#each room.description as info}
								<li>{info}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</section>
		<p class="text-left">
			<em>*Room upgrades available, subject to availability</em>
		</p>
		<br />
		<p class="md:text-lg xs:text-md text-justify">
			For booking information, please visit <a
				target="_blank"
				href="#"
				class="underline text-tertiary-500 hover:text-tertiary-400"
				rel="noopener noreferrer">[Booking Link]</a
			>.
		</p>
	</div>
</div>
