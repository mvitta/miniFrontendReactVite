interface PropsContributor {
  contributors: string[]
}

export default function Contributor({ contributors }: PropsContributor) {
  return (
    <ul className='list-group'>
      {contributors.map((contributor) => {
        return (
          <li key={crypto.randomUUID()} className='list-group-item'>
            {contributor}
          </li>
        )
      })}
    </ul>
  )
}
