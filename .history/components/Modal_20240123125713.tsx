"use client"

import { useState } from 'react'
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
        
            <Transition>
                <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
                    <Dialog.Panel>
                        <Dialog.Title>Deactivate account</Dialog.Title>
                        <Dialog.Description>
                            This will permanently deactivate your account
                        </Dialog.Description>
                    
                        <p>
                            Are you sure you want to deactivate your account? All of your data
                        will be permanently removed. This action cannot be undone.
                    </p>

                    <button onClick={() => setIsOpen(false)}>Deactivate</button>
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                </Dialog.Panel>
            </Dialog>
            </Transition>
        </>
    )
}

export default Modal