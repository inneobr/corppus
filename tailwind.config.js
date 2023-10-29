/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: "jit",
  theme: {
    container: {
      padding: {
        DEFAULT: ' 15px',        
      },  
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1310px',
    },
    extend: {
      backgroundImage: {
        pesoOverlay: 'url(/assets/peso.png)',
      },
      fontFamily: {
        oswald: [`--font-oswald`, 'sans-serif'],
      },
      colors: {
        primary: '#181B20',
        secondary: '#151538',
        tertiary: '#C0FF72', 
        quaternary: '#E3F971', 
        spot: '#FAEDD3',
        yellow: '#facc15',  
        accent: {
          DEFAULT: '#610858',
          hover: '#4A1344'
        }
      }
    },
  },
  plugins: [],
}
