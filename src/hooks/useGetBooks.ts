import { useEffect, useState } from 'react'
import type { Book, ResponseGolang } from '../types/types'

export default function useGetBooks(): [Book[], boolean, Error | null] {
  const [data, setdata] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    fetch('http://localhost:8080')
      .then((response) => {
        if (!(response.ok && response.status === 200))
          throw new Error('Failed Request')
        return response.json()
      })
      .then((dataBooks: ResponseGolang) => {
        const books: Book[] = [dataBooks.res.book1, dataBooks.res.book2]
        setdata(books)
        setLoading(false)
      })
      .catch((error) => {
        if (error instanceof Error) {
          console.error('El Error: ', error)
          setLoading(false)
          setError(error)
        }
      })
  }, [])

  return [data, loading, error]
}
