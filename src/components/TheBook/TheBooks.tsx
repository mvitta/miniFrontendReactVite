import type { Book } from '../../types/types'
import BookCover from './BookCover'
import Contributor from './Contributor'
import Title from './Title'

interface PropsListBooks {
  book: Book
  index: number
}

export default function TheBooks({ book, index }: PropsListBooks) {
  return (
    <div
      key={crypto.randomUUID()}
      className='border border-primary p-2 rounded-1'
      style={{ height: 'auto' }}
    >
      {/* index no se puede usar para acceder a una portada */}
      <BookCover query={book.docs?.[index].isbn?.[index] ?? ''} />
      <div className='card-body d-flex flex-column'>
        <Title title={book.q} />
        <div>
          <Contributor contributors={book.docs?.[index]?.contributor ?? []} />
        </div>
        <a
          href=' https://openlibrary.org/dev/docs/api/covers'
          className='btn btn-primary my-4 align-item-end'
          target='_blank'
          rel='noopener noreferrer'
        >
          https://openlibrary.org/dev/docs/api/covers
        </a>
      </div>
    </div>
  )
}
