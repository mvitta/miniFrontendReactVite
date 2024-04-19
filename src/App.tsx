// import information from './data/data.json'
import { Suspense, lazy } from 'react'
import './App.css'
import { ErrorBoundary, Loading } from './components'
import useGetBooks from './hooks/useGetBooks'
import Layout from './Layout'

const BookList = lazy(() => import('./components/BookList'))

function App() {
  const [data, , error] = useGetBooks()

  return (
    <Layout>
      <Suspense fallback={<Loading />}>
        {!error ? <BookList data={data} /> : <ErrorBoundary error={error} />}
      </Suspense>
    </Layout>
  )
}

export default App
