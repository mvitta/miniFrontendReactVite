import { useEffect, useState } from 'react'
import { type Book, ResponseGolang } from './types/types'
// import data from './data/data.json'
import './App.css'

function App() {
  const [data, setdata] = useState<Book[] | undefined>(undefined)

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then((response) => {
        if (response.ok) return response.json()
      })
      .then((data: ResponseGolang) => {
        const books: Book[] = [data.res.book1, data.res.book2]
        setdata(books)
      })
  }, [])

  // useEffect(() => {
  //   console.log(data)
  // }, [data])

  return (
    <>
      <h1
        className='display-7 border rounded-3 p-3 mx-auto text-center text-light bg-dark shadow-lg'
        style={{ textTransform: 'uppercase' }}
      >
        Mini Frontend
      </h1>
      <div className='d-flex p-5 flex-wrap gap-3 '>
        {data?.map((book, index) => {
          return (
            <div
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
    </>
  )
}

export default App
