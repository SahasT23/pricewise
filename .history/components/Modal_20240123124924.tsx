"use client"

import { useState } from 'react'
import { Dialog } from '@headlessui/react'

const Modal = () => {
    let [isOpen, setIsOpen] = useState(true)
    
    return (
        <>
            <button type="button" className='btn'>
                Track
            </button>
        </>
    )
}

export default Modal