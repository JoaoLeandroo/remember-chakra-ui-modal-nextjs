"use client"

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
  import { useDisclosure } from '@chakra-ui/react'

  const ModalPlay = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <button className='p-3 border border-slate-200 rounded-3xl shadow-2xl bg-slate-100 text-black hover:bg-slate-300 transition duration-500' onClick={onOpen}>Open Modal</button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                <div>
                    <h2>Welcome to World NextJs 14</h2>
                </div>
            </ModalHeader>
            <ModalCloseButton/>
            <ModalBody>
              <div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, neque blanditiis numquam inventore iure accusamus odio dolorum! Placeat quia doloremque error eligendi soluta architecto dolor quas molestiae eaque ut? Aspernatur!
                </p>
              </div>
            </ModalBody>
  
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default ModalPlay;