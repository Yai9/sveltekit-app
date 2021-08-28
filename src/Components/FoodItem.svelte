<script>
	import Button from '../UI/Button.svelte';
	export let id;
	export let name = '';
	export let url = '';

	const showFoodDetails = (id) => {
		window.location.pathname = `/burgers/${id}`;
	};
</script>

<article class="bg-white m-4 mx-16  py-4 rounded-md border-2 ">
	<div>
		<h1 class="text-2xl text-center text-red-900">{name}</h1>
	</div>
	<div class="justify-center w-full">
		<img class="mx-auto " src={url} alt={name} />
	</div>
	<div class="w-full grid justify-items-center">
		<Button customClass="" on:click={showFoodDetails(id)}>Show Details</Button>
	</div>
</article>
