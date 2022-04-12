module.exports = {
    content: ['./src/**/*.{html,vue,js}'],
    theme: {
      colors: {
        'blue': '#3311bb',
        'lightblue': '#f0f6f8', 
        'pink': '#ef4189',
        'lightpink': '#fdebeb',
        'dark': '#00061a',
        'gray': '#e8eff2'
      },
      fontFamily: {
        sans: ['Averta', 'sans-serif'],
        serif: ['Averta', 'sans-serif'],
      },
      extend: {
        spacing: {
        },
        borderRadius: {
        }
      }
    },
    plugins: [
      require('@tailwindcss/typography'),
      function ({ addComponents }) {
          addComponents({
              '.container-blog': {
                  '@screen sm': {
                      maxWidth: '640px',
                      paddingRight: '0',
                      paddingLeft: '0',
                  },
                  '@screen xl': {
                      maxWidth: '700px',
                      paddingRight: '0',
                      paddingLeft: '0',
                  },
              },
          });
        },
      ],
  }