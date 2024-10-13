/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
    theme: {
        extend: {
            colors: {
                // light mode
                'roland-red': '#E64B35',
                'hangul-gray': '#4A4A4A',
                'eiffel-gold': '#D4AF37',
                'seoul-sky': '#87CEEB',
                'soft-white': '#F5F5F5',

                // dark mode
                'midnight-blue': '#1A1A2E',
                'roland-red-light': '#FF6B6B',
                'hangul-silver': '#D3D3D3',
                'eiffel-gold-light': '#FFD700',
                'seoul-sky-dark': '#0E4D92',
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['hover', 'focus', 'dark'],
            textColor: ['hover', 'focus', 'dark'],
            borderColor: ['hover', 'focus', 'dark'],
        },
    },
    plugins: [],
    darkMode: 'selector',
};
