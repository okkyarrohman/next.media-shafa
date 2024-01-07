import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
                roboto: ["Roboto", "sans-serif"],
            },
            backgroundImage: {
                sekolah: "url('/resources/assets/background-sekolah.png')",
            },
            colors: {
                first: "#9A720A",
                "first-light": "#CDA53D",
                "first-dark": "#674000",
                second: "rgba(90, 73, 9, 1)",
                background: "#FFEED3",
                abu: "#EEEFF1",
            },
        },
    },

    plugins: [forms],
};
