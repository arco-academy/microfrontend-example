module.exports = {
  content: [
    '../content-app/src/**/*.{js,jsx}',
    '../header-app/src/**/*.{js,jsx}',
    '../shell-app/src/**/*.{js,jsx}',
    './public/index.html'
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        '[auto,auto,1fr]': 'auto auto 1fr',
      },
    },
  },
  plugins: [
    // ...
    require('@tailwindcss/aspect-ratio'),
  ],
}
