import plugin from 'tailwindcss/plugin'

export const pluginDynamicViewport = plugin(({ addUtilities }) => {
  addUtilities({
    '.min-h-screen-s': {
      'min-height': ['100vh /* fallback */', '100svh'],
    },
    '.min-h-screen-l': {
      'min-height': ['100vh /* fallback */', '100lvh'],
    },
    '.min-h-screen-d': {
      'min-height': ['100vh /* fallback */', '100dvh'],
    },
    '.h-screen-s': {
      height: ['100vh /* fallback */', '100svh'],
    },
    '.h-screen-l': {
      height: ['100vh /* fallback */', '100lvh'],
    },
    '.h-screen-d': {
      height: ['100vh /* fallback */', '100dvh'],
    },
    '.max-h-screen-s': {
      'max-height': ['100vh /* fallback */', '100svh'],
    },
    '.max-h-screen-l': {
      'max-height': ['100vh /* fallback */', '100lvh'],
    },
    '.max-h-screen-d': {
      'max-height': ['100vh /* fallback */', '100dvh'],
    },
  })
})
