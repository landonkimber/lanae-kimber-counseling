/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
    theme: {
        fontFamily: {
            quicksand: ['Quicksand', 'sans-serif'],
            assistant: ['Assistant', 'serif'],
            martel: ['Martel', 'serif'],
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            mono: ['Menlo', 'monospace'],
        },
        extend: {
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0', transform: 'translateY(1rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                fadeInDelayed: {
                    '0%': { opacity: '0', transform: 'translateY(1rem)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },

            },
            animation: {
                fadeIn: 'fadeIn 1s ease-out forwards',
                fadeInDelayed: 'fadeInDelayed 1.5s ease-out forwards',
            },
        },
    },
    plugins: [],
}