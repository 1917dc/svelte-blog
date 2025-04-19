<script lang="ts">
	import '../app.css';
	import Header from './header.svelte';

	let { children, data } = $props();
</script>

<div class="min-h-screen bg-neutral-950">
	<div class="h-full grid mx-auto max-w-full">
		<Header/>
		<main>
			{@render children()}
		</main>
	</div>
</div>