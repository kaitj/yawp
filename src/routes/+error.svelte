<script lang="ts">
	import { page } from '$app/stores';
</script>

<div class="flex flex-col justify-center items-center">
	<div class="w-full max-w-2xl mx-auto mb-8">
		<img src="/images/finn_error.jpg" alt="Finn in snow" class="mx-auto" />
	</div>

	<div class="w-full max-w-4xl mx-auto mb-8 text-black text-center">
		<h2>{$page.status}: {$page.error.message} <br /> Here is a picture of Finn instead</h2>
	</div>
</div>
