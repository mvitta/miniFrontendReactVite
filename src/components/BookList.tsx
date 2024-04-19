import type { Book } from '../types/types'
import FlexLoading from './TheBook/FlexLoading'
import TheBook from './TheBook/TheBooks'

export default function BookList({ data }: { data: Book[] }) {
  if (!data.length) {
    return <FlexLoading elementLoadingnumber={2} />
  }
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
