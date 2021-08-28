<script context="module">
	export async function load({ page }) {
		let id = page.params.id;
		console.log(id, 'id');

		const data = await fetch('http://localhost:3000/data.json');
		const res = await data.json();

		const foodResult = res.find((f) => f.id === Number(id));
		console.log(foodResult, 'foodres');
		console.log(Object.values(id), 'objvalsid');

		return { props: { foodResult } };
	}
</script>

<script>
	import Button from '../../UI/Button.svelte';

	export let foodResult;
	$: console.log(foodResult);
</script>

<main class="py-4 mt-16 grid w-1/2 mx-auto shadow-md">
	<div class="w-full py-4">
		<h1 class="text-3xl text-red-900 text-center">{foodResult.name}</h1>
	</div>
	<div class="w-full">
		<p class="text-center text-xl">{foodResult.description}</p>
	</div>
	<div class="w-full">
		<img src={foodResult.url} alt={foodResult.name} class="mx-auto" />
	</div>
	<p class="text-center text-2xl">Ingredients:</p>
	<div class="py-16 text-center max-w-4xl mx-auto">
		{#each foodResult.ingredients as ing}
			<p class="text-xl inline bg-gray-200 px-4 mx-1 p-1 leading-loose rounded-md shadow-md">
				{ing}
			</p>
		{/each}
	</div>
	<div class="w-full h-auto py-4 grid justify-center">
		<Button href="/">Back</Button>
	</div>
</main>
