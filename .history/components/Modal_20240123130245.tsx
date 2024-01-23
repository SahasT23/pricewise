"use client"

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const Modal = () => {
    let [isOpen, setIsOpen] = useState(true);

    const openModal = () => setIsOpen(true);
    
    const closeModal = () => setIsOpen(false);

    return (
        <>
            <button type="button" className='btn' onClick={openModal}>
                Track
            </button>
        
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" onClose={closeModal}
                className="dialog-container">
                    <div className='min-h-screen px-4 text-center'>
                        <Transis
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default Modal