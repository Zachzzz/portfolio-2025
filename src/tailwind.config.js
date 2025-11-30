module.exports = {
    theme: {
        extend: {
            keyframes: {
                'gradient-rotate': {
                    '0%': { 'background-position': '0% 50%' },
                    '50%': { 'background-position': '100% 50%' },
                    '100%': { 'background-position': '0% 50%' },
                },
            },
            animation: {
                'gradient-rotate': 'gradient-rotate 8s ease infinite', // Adjust duration and timing as needed
            },
        },
    },
    plugins: [],
};