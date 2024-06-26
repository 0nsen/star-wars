/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./src/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                gothic: ["ITC Serif Gothic Regular", "serif"],
                extraBold: ["ITC Serif Gothic Extra Bold", "serif"],
                heavy: ["ITC Serif Gothic Heavy", "serif"],
                black: ["ITC Serif Gothic Black", "serif"],
            },
            gridTemplateColumns: {
                "repeat-autofit": "repeat(auto-fit, minmax(320px, 1fr))",
            }
        },
    },
    plugins: [],
}
