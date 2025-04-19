import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { createHighlighter } from 'shiki';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md'],
	remarkPlugins: [remarkMath],       // Parse LaTeX blocks
	rehypePlugins: [rehypeKatex],
	highlight: {
		highlighter: async(code, lang = 'text') => {
			const highlighter = await createHighlighter({
				themes: ['kanagawa-dragon'],
				langs: ['javascript', 'typescript', 'java', 'rust']
			})

			await highlighter.loadLanguage('javascript', 'typescript', 'java', 'rust')
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme: 'kanagawa-dragon'}))

			return `{@html \`${html}\` }`
		}
	},
}

const config = {
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
	kit: { adapter: adapter() },
	extensions: ['.svelte', '.md']
};

export default config;
