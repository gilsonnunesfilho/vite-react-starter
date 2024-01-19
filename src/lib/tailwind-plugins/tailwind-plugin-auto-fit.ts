import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
import { createPxComment } from './create-px-comments'

export const pluginAutoFit = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        'grid-auto-fit': (value) => ({
          gridTemplateColumns:
            `repeat(auto-fit, minmax(min(${value}, 100%), 1fr))` +
            createPxComment(value),
        }),
      },
      { values: theme('gridAutoFit') },
    )
  },
  {
    theme: {
      gridAutoFit: {
        DEFAULT: '16rem',
        ...defaultTheme.spacing,
      },
    },
  },
)
