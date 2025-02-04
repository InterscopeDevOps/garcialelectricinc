/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				tertiary: 'var(--tertiary)',
				fourth: 'var(--fourth)',
				title: 'var(--title)',
				text: 'var(--text)',
				btnColor: 'var(--btn-color)',
				btnHover: 'var(--btn-hover-color)',
				btnBorder: 'var(--btn-border-color)',
			},
			keyframes: {
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'slide-out-right': {
					'0%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
					'100%': {
						opacity: '0',
						transform: 'translateX(100%)',
					},
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(100%)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				'fade-in-out': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9999)',
					},
					'5%': {
						opacity: '1',
					},
					'95%': {
						opacity: '1',
					},
					'100%': {
						opacity: '0',
						transform: 'scale(1.05)',
					},
				},
				'moveWaveLeftRight': {
					'0%': {
						transform: 'translateX(0)',
					},
					'100%': {
						transform: 'translateX(100px)',
					},
				},
				'moveWaveRightLeft': {
					'0%': {
						transform: 'translateX(100px)',
					},
					'100%': {
						transform: 'translateX(0)',
					},
				},
				'moveWaveTopBottom': {
					'0%': { transform: 'translateY(-100px)' },
					'100%': { transform: 'translateY(0)' },
				},
				'moveWaveBottomTop': {
					'0%': { transform: 'translateY(100px)' },
					'100%': { transform: 'translateY(0)' },
				},
				'rollIn': {
					'0%': {
						transform: 'translateX(100%) rotate(180deg)',
					},
					'100%': {
						transform: 'translateX(0) rotate(0deg)',
					},
				},
				'fadeSlideUp': {
					'0%': {
					  transform: 'translateY(100%)',
					  opacity: '0',
					},
					'100%': {
					  transform: 'translateY(0)',
					  opacity: '1',
					},
				  },
				  fadeSlideDown: {
					'0%': {
					  transform: 'translateY(-100%)',
					  opacity: '0',
					},
					'100%': {
					  transform: 'translateY(0)',
					  opacity: '1',
					},
				  },
			},
			animation: {
				'slide-in-left': 'slide-in-left 1s ease',
				'slide-in-right': 'slide-in-right 1s ease',
				'slide-out-right': 'slide-out-right 1s ease',
				'fade-slide-up': 'fadeSlideUp 1s ease',
				'fade-in-out': 'fade-in-out 15s infinite alternate ease-in-out',
				'fade-slide-down': 'fadeSlideDown 1s ease-out',
				'moveWaveLeftRight': 'moveWaveLeftRight 6s ease-in-out alternate infinite',
				'moveWaveRightLeft': 'moveWaveRightLeft 6s ease-in-out alternate infinite',
				'moveWaveTopBottom': 'moveWaveTopBottom 8s ease-in-out alternate infinite',
				'moveWaveBottomTop': 'moveWaveBottomTop 7s ease-in-out alternate infinite',
				'rollIn': 'rollIn 1s ease-in-out',
			},
		},
	},

	plugins: [],
}
