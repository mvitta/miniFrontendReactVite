import Loading from '../TheBook/Loading'

export default function FlexLoading({
  elementLoadingnumber,
}: {
  elementLoadingnumber: number
}) {
  return (
    <div className='d-flex p-5 flex-wrap gap-5 shadow'>
      {new Array(elementLoadingnumber).fill(null).map(() => {
        return <Loading key={crypto.randomUUID()} />
      })}
    </div>
  )
}
