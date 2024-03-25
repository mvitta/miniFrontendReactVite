export default function Header() {
  return (
    <header className='d-flex shadow-lg' style={{ backgroundColor: '#e1dcc5' }}>
      <h1 className='display-7 p-3 mx-auto text-center text-light  text-black'>
        Mini Frontend
        <small className='text-lowercase d-block fs-4 text-capitalize'>
          Developed with{' '}
          <a
            href='https://openlibrary.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Open Library
          </a>
        </small>
      </h1>
      <a
        className='align-self-center pe-3'
        href='https://openlibrary.org/'
        target='_blank'
        rel='noopener noreferrer'
      >
        <img
          src='https://openlibrary.org/static/images/openlibrary-logo-tighter.svg'
          alt=''
          width={190}
          height={50}
          style={{ background: 'white' }}
        />
      </a>
    </header>
  )
}
