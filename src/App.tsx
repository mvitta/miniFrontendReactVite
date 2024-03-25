import { useEffect, useState } from 'react'
import { type Book, ResponseGolang } from './types/types'
// import information from './data/data.json'
import './App.css'
import Loading from './components/Loading'
import Header from './components/Header'

function App() {
  const [data, setdata] = useState<Book[] | undefined>(undefined)
  const [loading, setLoading] = useState<boolean>(true)
  const [timing, setTiming] = useState(0)

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => {
        if (response.ok) return response.json()
      })
      .then((data: ResponseGolang) => {
        const books: Book[] = [data.res.book1, data.res.book2]
        setdata(books)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    const timing = window.performance.timeOrigin
    setTiming(timing)
  }, [data])

  // const data: Book[] = [information.res.book1, information.res.book2]
  return (
    <>
      <Header />
      <div className='px-5 mb-5'>
        <h2 className='text-center text-capitalize mt-5 nav-underline'>
          Open Library
        </h2>
        <p className='my-4'>
          <a
            href='https://openlibrary.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Open Library
          </a>{' '}
          is an open, editable library catalog, building towards a web page for
          every book ever published.
        </p>
        <p className='mb-4'>
          Are you looking to get started?{' '}
          <a
            href='https://github.com/internetarchive/openlibrary/blob/master/CONTRIBUTING.md'
            target='_blank'
            rel='noopener noreferrer'
          >
            This is
          </a>{' '}
          the guide you are looking for. You may wish to learn more about{' '}
          <a
            href='https://github.com/internetarchive/openlibrary/wiki/Google-Summer-of-Code'
            target='_blank'
            rel='noopener noreferrer'
          >
            Google
          </a>
          <a
            href='https://github.com/internetarchive/openlibrary/wiki/Google-Summer-of-Code'
            target='_blank'
            rel='noopener noreferrer'
          >
            Summer of Code (GSoC)?
          </a>{' '}
          or{' '}
          <a
            href='https://github.com/internetarchive/openlibrary/wiki/Hacktoberfest'
            target='_blank'
            rel='noopener noreferrer'
          >
            Hacktoberfest
          </a>
          .
        </p>
        <h2>Overview</h2>
        <p>
          Open Library is an effort started in 2006 to create "one web page for
          every book ever published." It provides access to many public domain
          and out-of-print books, which can be read online.
        </p>
        <p>
          Here's a quick public tour of Open Library to get you familiar with
          the service and its offerings (10min).
        </p>
        <span className='fw-bold'>Github </span>
        <a
          href='https://github.com/internetarchive/openlibrary'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://github.com/internetarchive/openlibrary
        </a>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <div className='d-flex p-5 flex-wrap gap-5 shadow'>
          {data?.map((book, index) => {
            return (
              <div
                key={crypto.randomUUID()}
                className='card'
                style={{
                  minWidth: '25rem',
                }}
              >
                <img
                  style={{ aspectRatio: '16/26' }}
                  src={`https://covers.openlibrary.org/b/isbn/${book.docs[index].isbn[0]}-L.jpg`}
                  className='card-img-top'
                  alt='...'
                />
                <div className='card-body d-flex flex-column'>
                  <h5
                    className='card-title my-3'
                    style={{ textTransform: 'uppercase' }}
                  >
                    {book.q}
                  </h5>
                  <div>
                    <ul className='list-group'>
                      {book.docs[index].contributor?.map((contributor) => {
                        return (
                          <li
                            key={crypto.randomUUID()}
                            className='list-group-item'
                          >
                            {contributor}
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                  <a
                    href=' https://openlibrary.org/dev/docs/api/covers'
                    className='btn btn-primary my-4 align-item-end'
                  >
                    https://openlibrary.org/dev/docs/api/covers
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default App
