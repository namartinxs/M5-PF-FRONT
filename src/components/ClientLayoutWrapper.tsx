
'use client'

import { usePathname } from 'next/navigation'
import Header from './header'
import Footer from './footer'


export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const hide = ['/login', '/cadastro']
  const shouldHideRoutes = hide.includes(pathname)

  return (
    <>
      {!shouldHideRoutes && <Header />}
      {children}
      {!shouldHideRoutes && <Footer />}
    </>
  )
}
