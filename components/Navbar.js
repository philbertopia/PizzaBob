import { ConnectWallet } from '@thirdweb-dev/react'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5'>
      <div className='flex gap-2'>
        <Image src="/images/zbob-logo-circle.png" alt='' width={60} height={60}/>
        <h1 className='flex items-center font-bold text-xl'>PizzaBob</h1>
      </div>
      <ConnectWallet />
    </div>
  )
}

export default Navbar