import { ToastContainer } from 'react-bootstrap'
import ShowToast from '../Toast/ShowToast'
import { useState } from 'react'
import { ToastPosition } from 'react-bootstrap/esm/ToastContainer'

interface PropsError {
  error: Error
}

export default function ErrorBoundary({ error }: PropsError) {
  const [position] = useState<ToastPosition>('bottom-start')

  return (
    <ToastContainer className='p-3' position={position} style={{ zIndex: 1 }}>
      <ShowToast
        error={error}
        delay={5000}
        autohide
        propsReactHeader={{ className: 'bg-danger text-white' }}
        propsReactBody={{ className: 'font' }}
      />
    </ToastContainer>
  )
}
