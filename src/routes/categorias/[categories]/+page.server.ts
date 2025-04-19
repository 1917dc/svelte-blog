import type { Post } from '$lib/types.js';

export async function load({ fetch, params }) {
    const response = await fetch('/api/posts')
    const posts: Post[] = await response.json()
    let sortedPosts: Post[] = []
    posts.forEach(post => {
        if(post.categories.includes(params.categories)) {
            sortedPosts.push(post)
        }
    });

    return {
        category: params.categories,
        posts: sortedPosts
    }
}