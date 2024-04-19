export default function Loading() {
  return (
    <div className='d-flex justify-content-center my-5'>
      <div
        className='spinner-border text-black'
        role='status'
        style={{
          width: '9rem',
          height: '9rem',
        }}
      >
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}
