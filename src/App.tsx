import {
  formatDate,
  formatList,
  formatRelativeTime,
  getDateDifferenceInDays,
  sortBy,
} from './lib/utils'
import { useLocale } from './providers/locale-provider'

const dayOne = new Date('2024-01-19')
const dayTwo = new Date('2024-01-15')

const users = [
  { name: 'Gilson', age: 66 },
  { name: 'Gilsinho', age: 33 },
  { name: 'Cirleide', age: 65 },
  { name: 'Priscila', age: 33 },
  { name: 'Juliana', age: 29 },
]

const sortedUsers = sortBy(users, [
  { by: 'age', order: 'desc' },
  { by: 'name', order: 'asc' },
])

export function App() {
  const { locale, setLocale } = useLocale()

  return (
    <>
      <div className="border-b px-5 py-2">
        {locale === 'pt-BR' ? (
          <button type="button" onClick={() => setLocale('en-US')}>
            Switch to English
          </button>
        ) : (
          <button type="button" onClick={() => setLocale('pt-BR')}>
            Mudar para português
          </button>
        )}
      </div>
      <div className="p-5">
        <div>
          {formatRelativeTime(getDateDifferenceInDays(dayTwo, dayOne), 'day', {
            style: 'long',
            numeric: 'auto',
          })}
        </div>
        <div>
          {formatDate(new Date(), {
            dateStyle: 'full',
          })}
        </div>
        <div>{formatList(sortedUsers.map((u) => u.name))}</div>
      </div>
    </>
  )
}
