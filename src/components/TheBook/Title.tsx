export default function Title({ title }: { title: string }) {
  return (
    <h5 className='card-title my-3' style={{ textTransform: 'uppercase' }}>
      {title}
    </h5>
  )
}
