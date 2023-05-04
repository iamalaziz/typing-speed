import React from 'react'
import { useSelector } from 'react-redux'

const TextBoard = () => {
  const {words} = useSelector(store => store.words)

  return (
    <div>
    <div className='container'>
      {words.map((word, id) => {return <p key={id}>word</p>})}
    </div>
    </div>
  )
}

export default TextBoard
