import plugin from 'tailwindcss/plugin'
import defaultTheme from 'tailwindcss/defaultTheme'
import { createPxComment } from './create-px-comments'

export const pluginAutoFill = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        'grid-auto-fill': (value) => ({
          gridTemplateColumns:
            `repeat(auto-fill, minmax(min(${value}, 100%), 1fr))` +
            createPxComment(value),
        }),
      },
      { values: theme('gridAutoFill') },
    )
  },
  {
    theme: {
      gridAutoFill: {
        DEFAULT: '16rem',
        ...defaultTheme.spacing,
      },
    },
  },
)
