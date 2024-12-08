/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            width: {
                "1100": "1100px"
            },
            backgroundColor: {
                "primary": "#fdf5ed",
                "secondary1": "#1266dd",
                "secondary2": "#f73859",
            },
            screens: {
                'sm': '576px',
                'md': '768px',
                'lg': '992px',
                'xl': '1200px',
                'xxl': '1400px'
            },
            maxWidth: {
                'container-sm': '540px',
                'container-md': '720px',
                'container-lg': '960px',
                'container-xl': '1140px',
                'container-xxl': '1320px',
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: '1rem',
                    sm: '1.5rem',
                },
                margin: {
                    DEFAULT: 'auto',
                },
                screens: {
                    sm: '576px',
                    md: '768px',
                    lg: '992px',
                    xl: '1200px',
                    xxl: '1400px',
                },
                width: "100%",
            },
        },
    },
    plugins: [],
}