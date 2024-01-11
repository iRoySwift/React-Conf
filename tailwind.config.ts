import type { Config } from "tailwindcss";

function getTintVariantColor(color: any, intensity: number) {
    return `color-mix(in srgb, ${color}, white ${intensity * 100}%)`;
}
function getShadeVariantColor(color: any, intensity: number) {
    return `color-mix(in srgb, ${color}, black ${intensity * 100}% )`;
}
const tintVariants = {
    50: 0.95, //95%
    100: 0.9, //90%
    200: 0.7, //70%
    300: 0.5, //50%
    400: 0.3, //30%
    600: 0.1, //10%
    700: 0.3, //30%
    800: 0.5, //50%
    900: 0.7, //70%
    950: 0.9, //70%
};
const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    50: getTintVariantColor(
                        "var(--color-primary)",
                        tintVariants[50]
                    ),
                    100: getTintVariantColor(
                        "var(--color-primary)",
                        tintVariants[100]
                    ),
                    200: getTintVariantColor(
                        "var(--color-primary)",
                        tintVariants[200]
                    ),
                    300: getTintVariantColor(
                        "var(--color-primary)",
                        tintVariants[300]
                    ),
                    400: getTintVariantColor(
                        "var(--color-primary)",
                        tintVariants[400]
                    ),
                    500: "var(--color-primary)",
                    600: getShadeVariantColor(
                        "var(--color-primary)",
                        tintVariants[600]
                    ),
                    700: getShadeVariantColor(
                        "var(--color-primary)",
                        tintVariants[700]
                    ),
                    800: getShadeVariantColor(
                        "var(--color-primary)",
                        tintVariants[800]
                    ),
                    900: getShadeVariantColor(
                        "var(--color-primary)",
                        tintVariants[900]
                    ),
                    950: getShadeVariantColor(
                        "var(--color-primary)",
                        tintVariants[950]
                    ),
                },
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
    safelist: [
        {
            pattern: /-primary-/,
        },
    ],
};
export default config;
