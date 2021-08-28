<script>
	let primaryClass =
		'border-red-900 bg-gradient-to-r from-red-500 via-red-700 to-red-900  px-8 py-4 bg-red-900 text-white rounded-md shadow-md pointer';

	export let type = '';
	export let href = '';
	export let customClass = '';
</script>

<div>
	{#if href}
		<a class={primaryClass} {href}><slot /></a>
	{:else}
		<button class={primaryClass + ' ' + customClass} {type} on:click><slot /></button>
	{/if}
</div>
