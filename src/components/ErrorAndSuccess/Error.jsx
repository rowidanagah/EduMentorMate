import React from 'react'

export default function Error(props) {
  return (
    <div class="alert alert-danger text-center" role="alert">
     <i class="fa-solid fa-triangle-exclamation me-2"></i>
    {props.message}
    </div>
  )
}
