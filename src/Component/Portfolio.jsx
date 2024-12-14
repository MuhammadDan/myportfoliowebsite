import React from 'react'
import Disney from '../../src/assets/disney.jpg';
import Calculator from '../../src/assets/Calculator.jpg';
import Tic_Tac_Toe from '../../src/assets/Tic-Tac-Toe.jpg';
import Landing_page from '../../src/assets/Landing page.jpg';
import Weather_App from '../../src/assets/Weatherapp.jpg';
import Myportfolio from '../../src/assets/Portfolio.jpg';
const Portfolio = () => {
    const cardItem=[
        {
            id:1,
            pic:Myportfolio,
            name:"My Portfolio",
            para: "React with Tailwind CSS and fully responsive",
            githublink:"https://github.com/MuhammadDan/Growintern_Task2",
            Livepreviewlink:"https://muhammaddan.github.io/Growintern_Task2/"
        },
        {
            id:2,
            pic:Disney,
            name:"Disney+ Hotstar Clone",
            para: "HTML,CSS and JS and fully responsive",
            githublink:"https://github.com/MuhammadDan/Growintern_Task2",
            Livepreviewlink:"https://muhammaddan.github.io/Growintern_Task2/"
        },
        {
            id:3,
            pic:Calculator,
            name:"Calculator",
            para: "HTML,CSS and JS and fully responsive",
            githublink:"https://github.com/MuhammadDan/Growintern_Task_1",
            Livepreviewlink:"https://muhammaddan.github.io/Growintern_Task_1/"
        },
        {
            id:4,
            pic:Tic_Tac_Toe,
            name:"Tic-Tac-Toe Game",
            para: "HTML,CSS and JS and fully responsive",
            githublink:"https://github.com/MuhammadDan/PRODIGY_WD_03",
            Livepreviewlink:"https://muhammaddan.github.io/PRODIGY_WD_03/"
        },
        {
            id:5,
            pic:Landing_page,
            name:"LandingPage",
            para: "HTML,CSS and JS and fully responsive",
            githublink:"https://github.com/MuhammadDan/PRODIGY_WD_01",
            Livepreviewlink:"https://muhammaddan.github.io/PRODIGY_WD_01/"
        },
        {
            id:6,
            pic:Weather_App,
            name:"Weather app",
            para: "HTML,CSS and JS and API integration",
            githublink:"https://github.com/MuhammadDan/Weather_App",
            Livepreviewlink:"https://muhammaddan.github.io/Weather_App/"
        }
    ]
  return (
    <>
    <div name="Projects" className='my-20 md:px-20 px-4 mx-auto container max-w-screen-2xl overflow-hidden'>
        <div>
            <h1 className='md:text-3xl text-lg font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featued Project</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-x-14 md:gap-y-4 my-5'>
                 {
                    cardItem.map(({id,pic,name,para,githublink,Livepreviewlink})=>(
                        <div key={id} className='w-[300px] h-[320px] md:w-[300px] md:h-[320px] border-[2px] border-blue-900 rounded-lg shadow-lg md:px-4 md:py-4 px-5 py-5 cursor-pointer hover:scale-110 duration-300'>
                            <img src={pic} className='md:w-[270px] md:h-[150px] w-[300px] md:p-1 rounded-md' alt=''/>
                            <div>
                                <div className='font-bold md:text-lg py-3 md:py-0 md:mb-2 px-2'>{name}</div>
                                <p className='px-2 md:text-sm text-gray-700'>{para}</p>
                            </div>
                            <div className=' justify-between  md:space-x-6 flex'>
                                <button onClick={()=>window.open(githublink,'_blank')} className='bg-blue-500 hover:bg-green-600 text-white text-xs p-1.5 w-35 h-10 md:w-auto py-1  md:text-sm md:px-2 md:py-2 my-3 rounded-2xl'>Check on Github</button>
                                <button onClick={()=>window.open(Livepreviewlink,'_blank')} className='bg-blue-500 hover:bg-green-600 text-white text-xs p-1.5 w-35 h-10 md:w-auto py-1  md:text-sm md:px-2 md:py-2 my-3 rounded-2xl'>Live Preview</button>
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

export default Portfolio