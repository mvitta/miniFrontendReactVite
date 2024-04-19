import { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import { ToastProps } from 'react-bootstrap/esm/Toast'

// tratar de hacer esete componente mas general y que no solo sea para error

type PropsReactToast = React.HTMLAttributes<HTMLElement>

interface PropsToast extends ToastProps {
  error?: Error
  success?: string
  propsReactHeader?: PropsReactToast
  propsReactBody?: PropsReactToast
}

export default function ShowToast({
  error,
  propsReactHeader,
  propsReactBody,
  ...props
}: PropsToast) {
  const [show, setShow] = useState(true)
  return (
    <>
      <Toast onClose={() => setShow(false)} show={show} {...props}>
        <Toast.Header {...propsReactHeader}>
          <img src='holder.js/20x20?text=%20' className='rounded me-2' alt='' />
          <strong className='me-auto fw-bold fs-5'>{error?.name}</strong>
          <small>Error</small>
        </Toast.Header>
        <Toast.Body {...propsReactBody}>{error?.message}</Toast.Body>
      </Toast>
    </>
  )
}
