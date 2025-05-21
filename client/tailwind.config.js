/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.js', './src/**/*.jsx', './public/index.html'],
    theme: {
        fontFamily: {
            quicksand: ['Quicksand', 'sans-serif'],
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
            mono: ['Menlo', 'monospace'],
        },
        extend: {},
    },
    plugins: [],
}