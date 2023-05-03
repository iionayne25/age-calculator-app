/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'poppins':"'Poppins',sans-serif",
      }
    },
    colors:{
      purple:'#854DFF',
      lightRed:'#FF5757',
      white:'#ffffff',
      offWhite:'#F0F0F0',
      lightGrey:'#DBDBDB',
      smokeyGrey:'#716F6F',
      offBlack:'#141414',

    }
  },
  plugins: [],
}
