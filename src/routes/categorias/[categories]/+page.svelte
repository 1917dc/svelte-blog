<script lang="ts">
    import { formatDate } from "$lib/utils.js";

    let { data } = $props();
</script>

<div>
    <div class="justify-center flex">
        <h1>Posts from <span>&num;{data.category}</span></h1>
    </div>
    <div class="flex justify-center">
        <ul class="mr-30">
            {#each data.posts as post}
                <li class="list-item list-outside list-disc">
                    <a class="text-xl font-bold hover:underline" href={"/" + post.slug}>{post.title}</a>
                    <p>Descrição: {post.description}</p>
                    <p>{formatDate(post.date)}</p>
                </li>
            {/each}
        </ul>
    </div>
</div>