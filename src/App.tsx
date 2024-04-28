// import information from './data/data.json'
import { lazy } from 'react'
import './App.css'
import { ErrorBoundary } from './components'
import useGetBooks from './hooks/useGetBooks'
import Layout from './Layout'
import FlexLoading from './components/TheBook/FlexLoading'
import ButtonAlert from './components/alerts/ButtonAlert'

const BookList = lazy(() => import('./components/BookList'))

function App() {
  const [data, loading, error] = useGetBooks()

  if (loading) {
    return (
      <Layout>
        <FlexLoading elementLoadingnumber={2} />
      </Layout>
    )
  }

  if (error) {
    return (
      <Layout>
        <div className='container-fluid d-flex justify-content-center'>
          <form
            onSubmit={(e) => {
              console.log('submit')
              e.preventDefault()
            }}
          >
            <ButtonAlert type='submit' />
          </form>
        </div>
        <ErrorBoundary error={error} />
      </Layout>
    )
  }

  return (
    <Layout>
      <BookList data={data} />
    </Layout>
  )
}

export default App
