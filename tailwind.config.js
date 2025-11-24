/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#030014", // Deep midnight blue/black
                foreground: "#e2e8f0",
                primary: {
                    DEFAULT: "#7c3aed", // Violet
                    foreground: "#ffffff",
                },
                secondary: {
                    DEFAULT: "#1e1b4b", // Dark indigo
                    foreground: "#a5b4fc",
                },
                accent: {
                    DEFAULT: "#06b6d4", // Cyan
                    foreground: "#ffffff",
                },
                card: {
                    DEFAULT: "rgba(17, 25, 40, 0.75)",
                    foreground: "#e2e8f0",
                },
                muted: {
                    DEFAULT: "#1f2937",
                    foreground: "#9ca3af",
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            animation: {
                "meteor-effect": "meteor 5s linear infinite",
                "shimmer": "shimmer 2s linear infinite",
                "marquee": "marquee 25s linear infinite",
                "marquee2": "marquee2 25s linear infinite",
            },
            keyframes: {
                meteor: {
                    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
                    "70%": { opacity: "1" },
                    "100%": {
                        transform: "rotate(215deg) translateX(-500px)",
                        opacity: "0",
                    },
                },
                shimmer: {
                    from: {
                        backgroundPosition: "0 0",
                    },
                    to: {
                        backgroundPosition: "-200% 0",
                    },
                },
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                marquee2: {
                    "0%": { transform: "translateX(100%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
        },
    },
    plugins: [],
}
