import React from 'react'
import { FaFacebook,FaInstagram,FaLinkedin,FaTwitter } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
    <hr />
    <footer className='py-12'>
        <div className='my-16 md:px-20 px-4 mx-auto container max-w-screen-2xl overflow-hidden'>
           <div className='flex flex-col items-center justify-center'>
            <div className='flex space-x-4'>
                <FaFacebook size={24} />
                <FaInstagram size={24} />
                <FaLinkedin size={24} />
                <FaTwitter size={24} />
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
               <p className='text-sm'>
                Copyright &copy; 2024 Muhammad Daniyal Khan 
               </p>
            </div>
           </div>
        </div>
    </footer>
    </>
  )
}

export default Footer