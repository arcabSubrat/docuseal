module.exports = {
  plugins: [require('daisyui')],
  theme: {
    extend: {
      fontFamily: {
        mono: ['AsterMono', 'monospace'],
        sans: ['AsterMono', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        arcab: {
          'color-scheme': 'light',
          primary: '#000fff',
          secondary: '#ef9fbc',
          accent: '#eeaf3a',
          neutral: '#000fff',
          'base-100': '#ffffff',
          'base-200': '#efeae6',
          'base-300': '#e7e2df',
          'base-content': '#291334',
          '--rounded-btn': '0',
          '--tab-border': '2px',
          '--tab-radius': '0',
        },
      },
    ],
  },
}
