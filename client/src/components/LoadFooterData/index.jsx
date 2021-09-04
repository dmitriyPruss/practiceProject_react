import React from 'react'

function LoadFooterData () {
  fetch('/registrationData.json')
    .then(response => response.json())
    .then(res => console.log(res))

  return (
    <>
      <div></div>
    </>
  )
}

export default LoadFooterData
