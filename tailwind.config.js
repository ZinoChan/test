const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
            fontFamily: { 
                main: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
                secondary: ['Open Sans', ...defaultTheme.fontFamily.serif]
            },

            colors: {
                primary: "#FF5C00",
                'dark-blue': "#0A1830",
                'very-dark-blue': "#343F56",
                'dark-gray': "#C4C4C4",
                'very-light-gray': "#FDFDFD"
            },
           
        },
    },
    variants: {
      

    },
    plugins: [],
}