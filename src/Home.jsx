import React from 'react'

export default function Home() {
  return (
    <>
        <div className='home p-24 h-[900px]'>
            <div className="home__topsection flex justify-between">
                <div className="home__topsection__title">  
                    <h1 className='font-bold text-6xl text-[color:#8BC53F]'>EcoSteps</h1>
                    <p className='pt-6'>Gamified Carbon Footprint Tracker</p>
                </div>
                <div className="home__topsection__buttons">
                    <a href='/dashboard'>
                        <button className='bg-[color:#88C53F] text-white p-4 rounded-xl'>Log in</button>
                    </a>
                    <button className='bg-[color:#88C53F] text-white p-4 rounded-xl'>Sign up</button>
                </div>
            </div>
            <div className="home__images relative">
                <svg className='absolute right-3' height="600" width="600" xmlns="http://www.w3.org/2000/svg">
                    <circle r="300" cx="300" cy="300" fill="lightgray" />
                </svg>
                <img className='absolute right-28 top-20 w-96' src="/I2aj1w-leaf-photos.png" alt="" />
                <svg className='absolute right-80 top-60' height="360" width="360" xmlns="http://www.w3.org/2000/svg">
                    <circle r="180" cx="180" cy="180" fill="#8BC53F" />
                </svg>
                <img className='absolute right-96 top-80' src="/images.png" alt="" />
            </div>
        </div>
        <div className="home-section-2 p-24 bg-[color:#D9D9D9] h-[1000px] relative">
            <div className="home-section-2__topsection__title text-center">  
                <h1 className='font-bold text-6xl'>Try it now!</h1>
                <p className='pt-6'>Take care of our earth in a fun way!</p>
            </div>
            <div className="home-section-2__topsection__buttons">
                <button className='bg-[color:#88C53F] text-white p-4 rounded-xl'>Register here</button>
            </div>
            <img className='absolute top-10 -right-36 opacity-25 w-[800px] rotate-12' src="Gamepad-PNG-HD-Photos.png" alt="" />
        </div>
    </>
  )
}
