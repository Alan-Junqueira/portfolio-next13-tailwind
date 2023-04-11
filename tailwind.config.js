/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        techs: {
          html: '#FC490B',
          css: '#264DE4',
          javascript: '#FFDE25',
          git: '#DD4C35',
          reactJs: '#00D8FF',
          typescript: '#017ACB',
          nextJs: '#000000',
          nodeJs: '#8CC84B',
          github: '#000000',
          sass: '#EC407A',
        },
      },
    },
  },
  plugins: [],
}
