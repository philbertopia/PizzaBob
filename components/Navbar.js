import { ConnectWallet } from '@thirdweb-dev/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-5'>
      <div className='flex w-full gap-3'>
        <Image src="/images/zbob-logo-circle.png" alt='PizzaBob logo' width={67} height={67}/>
        <h1 className='items-center font-bold text-3xl hidden lg:flex'>PizzaBob</h1>
      </div>
      <div className="lg:flex hidden justify-center gap-3 items-center mx-20 w-full">
        <Link href="/"><Image src="/images/metamask-button.png" alt="Telegram button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/phantom-button.png" alt="Telegram button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/polygon-button.png" alt="Twitter button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/uniswap-button.png" alt="Twitter button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/coinbase-button.png" alt="Twitter button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/binance-button.png" alt="Twitter button" width={50} height={50} /></Link>
      </div>
      <ConnectWallet />
    </div>
  )
}

export default Navbar