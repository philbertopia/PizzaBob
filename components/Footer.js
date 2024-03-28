import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col my-10'>
      <div className='w-full flex flex-col text-center mb-10'>
        <Image className='mx-auto' src="/images/zbob-logo-circle.png" alt='ZBOB Logo' width={100} height={100} />
        <p className='text-xl font-semibold'>$ZBOB</p>
      </div>
      <div className=" w-full flex justify-center gap-8 mb-10">
        <Link href="/"><Image src="/images/twitter.png" alt="Twitter button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/telegram.png" alt="Telegram button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/telegram.png" alt="Telegram button" width={50} height={50} /></Link>
        <Link href="/"><Image src="/images/telegram.png" alt="Telegram button" width={50} height={50} /></Link>
      </div>
      <div>
        <p className='flex justify-center'>PizzaBob 2024</p>
      </div>
      
    </div>
  )
}

export default Footer