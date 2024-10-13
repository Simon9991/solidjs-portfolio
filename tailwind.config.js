/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx,css}'],
    theme: {
        extend: {
            colors: {
                // light mode
                'roland-red': '#E64B35',
                'roland-red-accent': '#FF7F50',
                'hangul-gray': '#4A4A4A',
                'hangul-gray-accent': '#6A6A6A',
                'eiffel-gold': '#d29d3f',
                'eiffel-gold-accent': '#F4C430',
                'seoul-sky': '#87CEEB',
                'seoul-sky-accent': '#0077BE',
                'soft-white': '#F5F5F5',
                'soft-white-accent': '#FFFFFF',
                'cassis-lavender': '#8E4585',
                'cassis-lavender-accent': '#A159A1',

                // dark mode
                'midnight-blue': '#1A1A2E',
                'midnight-blue-accent': '#2A2A3E',
                'roland-red-light': '#FF6B6B',
                'roland-red-light-accent': '#FF8C8C',
                'hangul-silver': '#D3D3D3',
                'hangul-silver-accent': '#E3E3E3',
                'eiffel-gold-light': '#FFD700',
                'eiffel-gold-light-accent': '#FFEA00',
                'seoul-sky-dark': '#0E4D92',
                'seoul-sky-dark-accent': '#1E5DA2',
                'cassis-lavender-dark': '#6B3E6F',
                'cassis-lavender-dark-accent': '#7D4E80',
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
