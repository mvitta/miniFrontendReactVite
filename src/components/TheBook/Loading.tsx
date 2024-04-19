export default function Loading() {
  return (
    <>
      <div className='card' aria-hidden='true' style={{ minWidth: '25rem' }}>
        <img
          src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4='
          className='card-img-top bg-secondary-subtle'
          alt=''
          style={{ aspectRatio: '16/26' }}
        />
        <div className='card-body'>
          <h5 className='card-title placeholder-glow'>
            <span className='placeholder col-6'></span>
          </h5>
          <p className='card-text placeholder-glow'>
            <span className='placeholder col-7'></span>
            <span className='placeholder col-4'></span>
            <span className='placeholder col-4'></span>
            <span className='placeholder col-6'></span>
            <span className='placeholder col-8'></span>
          </p>
          <p className='card-text placeholder-glow'>
            <span className='placeholder col-7'></span>
            <span className='placeholder col-4'></span>
            <span className='placeholder col-4'></span>
            <span className='placeholder col-6'></span>
            <span className='placeholder col-8'></span>
          </p>
          <a
            className='btn btn-primary disabled placeholder col-6'
            aria-disabled='true'
          ></a>
        </div>
      </div>
    </>
  )
}
