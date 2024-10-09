/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'hero': "url('vibebear.png')",
				'jungle': "url('cover.png')",
				'glypheon': "url('glypheon.png')",
			},
			colors: {
				'theme': '#13151a',
			},
		},
	},
	plugins: [],
}
