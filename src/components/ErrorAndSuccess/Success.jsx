import React from 'react'

export default function Success(props) {
  return (
    <div class="alert alert-success  text-center" role="alert">
    <i class="fa-solid fa-circle-check me-2"></i>
    {props.message}
</div>
  )
}
