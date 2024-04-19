type PropsBookCover = {
  query: string
}

export default function BookCover({ query }: PropsBookCover) {
  // book.docs[index].isbn[0]
  return (
    <img
      style={{ aspectRatio: '16/26' }}
      src={`https://covers.openlibrary.org/b/isbn/${query}-L.jpg`}
      className='card-img-top bg-secondary-subtle'
      alt='...'
    />
  )
}
