import { ReactNode } from 'react'
import { LocaleProvider } from './locale-provider'

export function Providers({ children }: { children: ReactNode }) {
  return <LocaleProvider>{children}</LocaleProvider>
}
