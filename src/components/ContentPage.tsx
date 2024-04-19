export default function ContentPage() {
  return (
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
        every book ever published." It provides access to many public domain and
        out-of-print books, which can be read online.
      </p>
      <p>
        Here's a quick public tour of Open Library to get you familiar with the
        service and its offerings (10min).
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
  )
}
