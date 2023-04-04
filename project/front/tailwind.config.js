module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      'abel': ['Abel', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
      'work-sans': ['Work Sans', 'sans-serif'],
      'red-hat': ['Red Hat Text', 'sans-serif'],
    },
    extend: {
      colors: {
        'yellow': '#FFE600',
        'dark-blue': '#232946',
        'gray': '#5f6c7b',
        'card-title': '#094067',
      },
      boxShadow: {
        'card': '0 2px 20px 2px rgba(0, 0, 0, 0.08)',
      },

      accessibility: ['responsive', 'hover', 'focus', 'active', 'group-hover'],
    },
  },
  plugins: [],
}