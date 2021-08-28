<script>
	export let type;
	export let inputValue = '';
</script>

<div class="w-1/4 mx-auto mt-4">
	<input {type} value={inputValue} on:input />
</div>

<style>
	input {
		display: block;
		width: 100%;
		font: inherit;
		border: none;
		border-bottom: 2px solid #ccc;
		border-radius: 3px 3px 0 0;
		background: white;
		padding: 0.15rem 0.25rem;
		transition: border-color 0.1s ease-out;
	}

	input:focus {
		border-color: #ef4444;
		outline: none;
	}
</style>
