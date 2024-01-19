import {
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  useState,
  ReactNode,
} from 'react'

type LocaleISO = `${Lowercase<string>}-${Uppercase<string>}`

export type LocaleContextType = {
  locale: LocaleISO
  setLocale: Dispatch<SetStateAction<LocaleISO>>
}

export const LocaleContext = createContext<LocaleContextType | undefined>(
  undefined,
)

export const useLocale = () => {
  const context = useContext(LocaleContext)
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider')
  }
  return context
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<LocaleISO>('pt-BR')

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  )
}

export default LocaleProvider
