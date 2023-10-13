import Image from 'next/image'
import React from 'react'

const Pics = () => {
  return (
    <div>
      {['1','2','3', '4', '5'].map(path=><div key={path}>
        <Image src={`/${path}.jpg`} alt="pic_view" width='280' height='420' />
      </div>)}
    </div>
  )
}

export default Pics
