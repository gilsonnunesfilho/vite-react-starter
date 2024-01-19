import plugin from 'tailwindcss/plugin'

export const pluginStack = plugin(({ addUtilities }) => {
  addUtilities({
    '.stack': {
      'grid-template-areas': '"stack"',
      '& > *': {
        'grid-area': 'stack',
      },
    },
  })
})
