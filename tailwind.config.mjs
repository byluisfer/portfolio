/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontSize: {
				'10xl': '10rem',
				'11xl': '11rem',
				'12xl': '12rem',
				'13xl': '13rem',
				'14xl': '14rem',
				'15xl': '15rem',
				'16xl': '16rem',
			},
			colors: {
				'primary': '#1C2B62',
				'secondary': '#9D3BE4',
				'quinary': '#19191F'
			}
		},
	},
	plugins: [],
}
