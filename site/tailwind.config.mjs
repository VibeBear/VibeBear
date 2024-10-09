/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('https://vibebear.studio/vibebear.png')",
				'jungle': "url('https://vibebear.studio/cover.png')",
				'glypheon': "url('https://vibebear.studio/glypheon.png')",
			},
			colors: {
				'theme': '#13151a',
			},
		},
	},
	plugins: [],
}
