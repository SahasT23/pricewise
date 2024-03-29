import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24 border-2 
      border-red-500'>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart Shopping Starts Here:
              <Image 
                src="/assets/icons/arrow-right.svg"
                alt="arrow-right"
                width={}
              />
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home