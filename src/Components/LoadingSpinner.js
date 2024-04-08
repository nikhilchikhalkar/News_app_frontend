import React from 'react'
import loader from '../assets/loading.gif'

function LoadingSpinner() {
  return (
    <div>
      <div className='mt-20 w-full h-20'>
       <img className='h-12 items-center justify-center  mx-auto' src={loader} alt='loader'/>
      </div>
    </div>
  )
}

export default LoadingSpinner