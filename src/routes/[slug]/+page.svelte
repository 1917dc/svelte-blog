<script lang="ts">
    import { formatDate } from "$lib/utils";
    import * as config from '$lib/config.js'

    let {data} = $props()
</script>

<svelte:head>
    <title>{config.title} / {data.meta.title}</title>
    <meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<article>
    <div class="justify-center flex">
        <div class="mr-40">
            <hgroup>
                <h1>{data.meta.title}</h1>
                <p class="-mt-5 font-medium">Publicado em {formatDate(data.meta.date)}</p>
            </hgroup>

            <div class="my-2">
                <div class="flex gap-5">
                    <p class="font-bold">Tags: </p>
                    {#each data.meta.categories as category}
                        <a class="hover:underline" href="/categorias/{category}">&num;{category}</a> 
                    {/each}
                </div>
            </div>
        </div>
    </div>
    <div class="flex justify-center">
        <div class="max-w-2/3">
            <data.content/>
        </div>
    </div>
</article>