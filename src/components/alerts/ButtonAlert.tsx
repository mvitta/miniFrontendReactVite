import { useEffect, useRef, useState } from 'react'

export default function ButtonAlert(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const [show, setShow] = useState<boolean>(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (show) {
      setTimeout(() => {
        setShow(!show)
        if (buttonRef.current) buttonRef.current.disabled = false
      }, 4000)
    }
  }, [show])

  //   if (show) {
  //     return (
  //       <>
  //         <div
  //           className='alert alert-primary d-flex gap-3 align-content-center'
  //           role='alert'
  //         >
  //           <span className='d-block text-primary fw-bold'>
  //             Recuperando el recurso espere un momento ...
  //           </span>
  //           <div className='spinner-border text-primary' role='status'>
  //             <span className='visually-hidden'>Loading...</span>
  //           </div>
  //         </div>
  //       </>
  //     )
  //   }

  return (
    <>
      <button
        ref={buttonRef}
        style={{ width: '35rem' }}
        className='btn btn-primary'
        onClick={() => {
          setShow(!show)
          if (!show) {
            if (buttonRef.current) {
              buttonRef.current.disabled = true
            }
          }
        }}
        {...props}
      >
        Intentar recuperar los datos nuevamente
      </button>
      <br />
      <br />
      {show && (
        <div
          style={{ width: '35rem' }}
          className='alert alert-primary d-flex gap-3 align-content-center'
          role='alert'
        >
          <span className='d-block text-primary fw-bold'>
            Intentando recuperar el recurso, espere un momento ...
          </span>
          <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Loading...</span>
          </div>
        </div>
      )}
    </>
  )
}
