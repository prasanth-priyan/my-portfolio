module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ['Khand', 'sans-serif'],
                body: ['Switzer', 'sans-serif'],
            },
            colors: {
                accent: '#00D9FF', // Electric cyan
            },
        },
    },
    plugins: [],
};
