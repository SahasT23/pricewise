import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <header className='w-full'>
            <nav className='nav'>
                <Link href="/" className='flex items-center gap-1'>
                    <Image
                        src="/assets/icons/logo.svg"
                        width={27}
                        height={}
                    />
                </Link>
            </nav>
        </header>
    )
}

export default Navbar