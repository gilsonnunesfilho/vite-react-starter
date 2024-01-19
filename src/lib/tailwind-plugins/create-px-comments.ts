function checkIfRem(str: string) {
  return str.includes('rem')
}

function convertRemToPx(str: string) {
  const remValue = parseFloat(str.replace('rem', ''))
  const pxValue = remValue * 16
  return `${pxValue.toString()}px`
}

export function createPxComment(str: string) {
  if (checkIfRem(str)) return `/* ${convertRemToPx(str)} */`
  return ''
}
