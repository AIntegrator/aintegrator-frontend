module.exports = {
    content: [
        './src/**/*.{html,ts,scss}',
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                md: '2rem',
                lg: '2.5rem',
                xl: '3rem',
                '2xl': '4rem',
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                '2xl': '1440px',
            },
        },
        extend: {
            fontFamily: {
                sans: ['Poppins', 'system-ui', '-apple-system', 'sans-serif'],
                'neue-haas': ['"Neue Haas Grotesk Display Pro"', '"Neue Haas Grotesk Display"', '"Neue Haas Grotesk"', '"Helvetica Neue"', 'Helvetica', 'Inter', 'Arial', 'sans-serif'],
            },
            spacing: {
                '37': '9.25rem',
                '49': '12.25rem',
                'site': '1144px',
                'section': '196px',
                'block': '148px',
            },
            colors: {
                primary: '#000000',
                secondary: '#111827',
                accent: '#2563eb',
                cta: '#D32F2F',
                'cta-hover': '#c92410',

                // Brand tokens
                'brand-red': '#ED2915',
                'muted-gray': '#4D4D4D',
                'brand-black': '#000000',

                'text-primary': '#000000',
                'text-body': '#303030',
                'text-muted': '#4d4d4d',
                'text-secondary': '#6b7280',
                'text-inverse': '#ffffff',

                'bg-primary': '#ffffff',
                'bg-secondary': '#f9fafb',
                'bg-subtle': '#fafafa',
                'bg-tertiary': '#e9ecf0',
                'bg-dark': '#111827',

                border: '#dadee4',
                'border-light': '#f3f4f6',
            },
            maxWidth: {
                'site': '1144px',
            },
            screens: {
                'xs': '375px',
                '3xl': '1920px',
            },
            keyframes: {
                'scroll-left': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                }
            },
            animation: {
                'scroll-left': 'scroll-left 35s linear infinite',
                'scroll-left-fast': 'scroll-left 25s linear infinite',
                'scroll-mobile': 'scroll-left 20s linear infinite',
            },
        },
    },
    plugins: [],
};
