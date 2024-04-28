import { ContentPage, Header } from './components'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <ContentPage />

      <section>{children}</section>
    </>
  )
}
