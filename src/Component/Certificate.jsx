import React from 'react'
import certificate from '../../src/assets/certificte1.jpg';
import certificate2 from '../../src/assets/Javascript.jpg';
import Csscertificate from '../../src/assets/CSS.jpg';
import HTMLcertificate from '../../src/assets/HTML.jpg';
import Pythoncertificate from '../../src/assets/Python.jpg';
const Certificate = () => {
  const cardItem=[
    {
        id:1,
        pic:certificate,
        name:"Reactjs Certificate",
        para: "React js course certificate from Skillup"
    },
    {
        id:2,
        pic:certificate2,
        name:"Javascript  Certificate",
        para: "Javascript course certificate from coursera"
    },
    {
        id:3,
        pic:Csscertificate,
        name:"CSS Certificate",
        para: "CSS certificate course from Hackerrank"
    },
    {
        id:4,
        pic:HTMLcertificate,
        name:"HTML Certificate",
        para: "HTML certificate course from great learning"
    },
    {
        id:5,
        pic:Pythoncertificate,
        name:"Python Certificate",
        para: "Python course certificate from Datacamp"
    }
]
  return (
    <>
     <div name="Certificates" className='my-20 md:px-20 px-4 mx-auto container max-w-screen-2xl overflow-hidden'>
        <div>
            <h1 className='md:text-3xl text-lg font-bold mb-5'>Certificates</h1>
            <span>These are certificates</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-x-14 md:gap-y-4 my-5'>
                 {
                    cardItem.map(({id,pic,name,para})=>(
                        <div key={id} className='w-[300px] h-[320px] md:w-[300px] md:h-[280px] border-[2px] border-blue-900 rounded-lg shadow-lg md:px-4 md:py-4 px-5 py-5 cursor-pointer hover:scale-110 duration-300'>
                            <img src={pic} className='md:w-[270px] md:h-[150px] w-[300px] md:p-1 rounded-md' alt=''/>
                            <div>
                                <div className='font-bold md:text-lg py-3 md:py-0 md:mb-2 px-2'>{name}</div>
                                <p className='px-2  text-gray-700'>{para}</p>
                            </div>
                        </div>
                    ))
                 }
            </div>
        </div>
    </div>
    </>
  )
}

export default Certificate