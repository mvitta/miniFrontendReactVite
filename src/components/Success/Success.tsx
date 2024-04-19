import ShowToast from '../Toast/ShowToast'

export default function Success({ msgSuccess }: { msgSuccess: string }) {
  return (
    <ShowToast
      success={msgSuccess}
      delay={5000}
      autohide
      propsReactHeader={{ className: 'bg-success text-white' }}
      propsReactBody={{ className: 'font' }}
    />
  )
}
