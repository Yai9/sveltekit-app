<script>
	import { flip } from 'svelte/animate';
	import { scale } from 'svelte/transition';
	import { food } from '../Stores/food-store';
	import FoodItem from './FoodItem.svelte';

	export let value = '';

	$: searchValue = value
		? $food.filter((i) => i.name.toLowerCase().includes(value.toLowerCase()))
		: $food;
</script>

<section class="grid w-full mt-4 grid-cols-1 gap-1 md:grid-cols-2 ">
	{#each searchValue as foodItem (foodItem.id)}
		<div transition:scale animate:flip={{ duration: 400 }}>
			<FoodItem
				id={foodItem.id}
				name={foodItem.name}
				desc={foodItem.description}
				url={foodItem.url}
			/>
		</div>
	{/each}
</section>
