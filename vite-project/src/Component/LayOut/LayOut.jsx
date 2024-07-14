import React from 'react'
import HeaderNav from '../HeaderNav/HeaderNav'

const LayOut = ({children}) => {
  return (
    <div>
        <HeaderNav/>
        {children}
    </div>
  )
}

export default LayOut