import { useLocale } from '@/providers/locale-provider'
import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (
  value: number | bigint,
  options: Intl.NumberFormatOptions = {
    currency: 'BRL',
  },
) => {
  const { locale } = useLocale()
  return new Intl.NumberFormat(locale, options).format(value)
}

export const formatList = (
  list: Iterable<string>,
  options: Intl.ListFormatOptions = {
    type: 'conjunction',
    style: 'long',
  },
) => {
  const { locale } = useLocale()
  return new Intl.ListFormat(locale, options).format(list)
}

export const formatDate = (
  date?: number | Date | undefined,
  options: Intl.DateTimeFormatOptions = {},
) => {
  const { locale } = useLocale()
  return new Intl.DateTimeFormat(locale, options).format(date)
}

export const formatDateRange = (
  startDate: number | bigint | Date,
  endDate: number | bigint | Date,
  options: Intl.DateTimeFormatOptions = {},
) => {
  const { locale } = useLocale()
  return new Intl.DateTimeFormat(locale, options).formatRange(
    startDate,
    endDate,
  )
}

export const formatRelativeTime = (
  value: number,
  unit: Intl.RelativeTimeFormatUnit = 'minute',
  options: Intl.RelativeTimeFormatOptions = {},
) => {
  const { locale } = useLocale()
  return new Intl.RelativeTimeFormat(locale, options).format(value, unit)
}

export function getDateDifferenceInDays(date1: Date, date2: Date): number {
  const timeDifference = date1.getTime() - date2.getTime()
  const millisecondsInADay = 24 * 60 * 60 * 1000
  return timeDifference / millisecondsInADay
}

type Order = 'asc' | 'desc'

interface SortConfig<T> {
  by: keyof T
  order?: Order
}

export function sortBy<T>(list: T[], config: SortConfig<T>[]): T[] {
  return list.slice().sort((a, b) => {
    for (const { by, order = 'asc' } of config) {
      const valueA = a[by]
      const valueB = b[by]

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        if (valueA < valueB) return order === 'asc' ? -1 : 1
        if (valueA > valueB) return order === 'asc' ? 1 : -1
      } else if (typeof valueA === 'number' && typeof valueB === 'number') {
        const result = (valueA - valueB) * (order === 'asc' ? 1 : -1)
        if (result !== 0) return result
      }
    }

    return 0
  })
}
