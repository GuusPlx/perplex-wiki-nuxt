module.exports = {
  content: ['./src/**/*.{html,vue,js}'],
  theme: {
    colors: {
      blue: '#3311bb',
      lightblue: '#f0f6f8',
      pink: '#ef4189',
      lightpink: '#fdebeb',
      dark: '#00061a',
      gray: '#e8eff2',
      white: '#fff',
    },
    fontFamily: {
      sans: ['Averta', 'sans-serif'],
      serif: ['Averta', 'sans-serif'],
    },
    extend: {
      spacing: {},
      borderRadius: {},
      gridTemplateColumns: {
        cards: 'repeat(auto-fill, minmax(min(100%, var(--min-card-width, 320px)), 1fr))',
      },
      fontSize: {
        mainTitle: 'clamp(5.625rem, 4.5vw + 2rem, 8.125rem)',
      },
      screens: {
        '2xl': '1500px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container-blog': {
          paddingRight: '1rem',
          paddingLeft: '1rem',
          '@screen sm': {
            maxWidth: '640px',
          },
          '@screen md': {
            paddingRight: '2rem',
            paddingLeft: '2rem',
          },
          '@screen xl': {
            maxWidth: 'var(--blog-container-width)',
          },
        },
      })
    },
  ],
}
