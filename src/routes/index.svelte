<script>
	import TextInput from '../UI/TextInput.svelte';
	import FoodList from '../Components/FoodList.svelte';

	let value = '';
</script>

<main class="mt-24">
	<p class="text-center text-2xl text-red-900">Search any food</p>
	<TextInput type="text" inputValue={value} on:input={(event) => (value = event.target.value)} />
	<FoodList {value} />
</main>
