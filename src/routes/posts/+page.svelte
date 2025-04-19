<script lang="ts">
	import * as config from '$lib/config';
	import { formatDate } from '$lib/utils.js';

	let { data } = $props()
</script>

<svelte:head>
	<title>{config.title} / posts </title>
</svelte:head>

<section>
	<div class="flex justify-center">
        <div class="">
            <h1>Posts</h1>
            <ul class="-mt-5">
                {#each data.posts as post}
                    <li class="list-item list-outside list-disc">
                        <a class="text-xl font-bold hover:underline" href={post.slug}>{post.title}</a>
                        <p>Descrição: {post.description}</p>
                        <p>{formatDate(post.date)}</p>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</section>
