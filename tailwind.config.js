const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {

  purge: [

    './src/**/css.js',
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.ts',
    './src/**/*.jsx'
  ],

  darkMode: false, // or 'media' or 'class'

  theme: {

    minWidth: {

      '0': '0',
      '12': '3rem',
      '16': '4rem',
      '24': '6rem',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
      'content': '30rem',
    },

    screens: {

      xxs: '375px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    },

    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      '5/6': '83%',
      '11/12': '91.6%',
      'full': '100%',
    },

    extend: {

      colors: colors,

      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },

      fontSize: {

        'md': '1rem',
      },

      height: {

        '12': '3.0rem',
        '14': '3.5rem',
        '16': '4.0rem',
        '18': '4.5rem',
        '20': '5.0rem',
        '22': '5.5rem'
      },

      maxWidth: {

        'header': '10rem',
        '7xl': '80rem',
        '8xl': '96rem'
      },

      minHeight: {

        '8':  '2.0rem',
        '10': '2.5rem',
        '12': '3.0rem',
        '14': '3.5rem',
        '16': '4.0rem',
        '18': '4.5rem',
        '20': '5.0rem',
        '22': '5.5rem',
        '28': '7rem',
        '30': '7.5rem',
        '32': '8rem',
        '40': '10rem'
      },

      spacing: {

        '9.5': '2.25rem',
        '17': '4.25rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '72': '18rem',
        '76': '19rem',
        '80': '20rem',
        '84': '21rem',
        '96': '24rem',
      }
    },

    boxShadow: {

      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      none: 'none',
    }
  },

  variants: {

    extend: {

      outline: ['hover', 'active'],
      ringWidth: ['hover', 'active'],
      ringColor: ['hover', 'active'],
      ringOffsetWidth: ['hover', 'active'],
      ringOffsetColor: ['hover', 'active'],
    }
  },

  plugins: [

    // require('@tailwindcss/typography'),
    // require('@tailwindcss/forms')
  ],

  experimental: {

    applyComplexClasses: true,
  }
}
