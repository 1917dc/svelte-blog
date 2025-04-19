<script lang="ts">
	import * as config from '$lib/config';
</script>

<nav>
	<div class="flex justify-center">
		<img class="w-40" src="/favicon.png" alt="tapioca" />
		<div class="mt-5">
			<a href="/" class="text-2xl font-bold">[{config.title}]</a>
			<div class="my-3 flex justify-center gap-2">
				<a class="hover:underline" href="/sobre">sobre</a>
				<span>/</span>
				<a class="hover:underline" href="/posts">posts</a>
			</div>
		</div>
	</div>
</nav>
