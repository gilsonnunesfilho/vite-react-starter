import plugin from 'tailwindcss/plugin'

export const pluginScrollbar = plugin(({ addVariant, addUtilities }) => {
  addVariant('scrollbar', '&::-webkit-scrollbar')
  addVariant('scrollbar-track', '&::-webkit-scrollbar-track')
  addVariant('scrollbar-thumb', '&::-webkit-scrollbar-thumb')
  addUtilities({
    '.gutter-auto': {
      'scrollbar-gutter': 'auto',
    },
    '.gutter-stable': {
      'scrollbar-gutter': 'stable',
    },
    '.gutter-both': {
      'scrollbar-gutter': 'stable both-edges',
    },
  })
})
