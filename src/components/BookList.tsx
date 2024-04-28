import type { Book } from '../types/types'
import TheBook from './TheBook/TheBooks'

export default function BookList({ data }: { data: Book[] }) {
  return (
    <>
      <div className='d-flex p-5 flex-wrap gap-5 shadow'>
        {data.map((book, index) => {
          return <TheBook book={book} index={index} key={crypto.randomUUID()} />
        })}
      </div>
    </>
  )
}
