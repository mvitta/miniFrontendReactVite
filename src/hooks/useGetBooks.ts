import { useEffect, useState } from 'react'
import type { Book } from '../types/types'
import getBooks from '../services/getBooks.service'

export default function useGetBooks(): [Book[], boolean, Error | null] {
  const [data, setdata] = useState<Book[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getBooks()
      .then((dataBooks) => {
        const books = [dataBooks.res.book1, dataBooks.res.book2]
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
