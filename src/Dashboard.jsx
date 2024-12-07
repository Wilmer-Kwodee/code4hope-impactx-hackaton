import React, { useEffect, useState } from 'react'
import Card from './Card'

export default function Dashboard() {
    const [ecoPoint, setEcoPoint] = useState(0)
    const [activities, setActivities] = useState([
        {
            title: 'Taking public transport to School',
            point: 50
        },
        {
            title: 'Bring water bottle instead of buying',
            point: 30
        },
        {
            title: 'Cook breakfast instead of buying',
            point: 10
        }
    ])
    // let activities = [
    //     'Taking public transport to School',
    //     'Bring water bottle instead of buying',
    //     'Cook breakfast instead of buying'
    // ]

    useEffect(() => {
        calculateEcoPoint()
    }, [])

    function calculateEcoPoint(){
        let total=0;
        activities.forEach(element => {
            total = total + element.point
        });
        setEcoPoint(total)
    }

    function handleNewActivity(){
        setActivities(
            [...activities, {title:'new activity', point: 20}]
        )
        calculateEcoPoint()
    }

  return (
    <>
        <div className='home p-24 h-[900px]'>
            <div className="home__topsection flex justify-between">
                <div className="home__topsection__title">  
                    <h1 className='font-bold text-6xl text-[color:#8BC53F]'>Hi, John Doe!</h1>
                    <p className='pt-6'>Gamified Carbon Footprint Tracker</p>
                </div>
                <div className="topsection-menus">
                    <div className="topsection-menus__profile flex items-center gap-4">
                        <p>John Doe</p>
                        <svg height="50" width="50" xmlns="http://www.w3.org/2000/svg">
                            <circle r="25" cx="25" cy="25" fill="lightgray" />
                        </svg>
                    </div>
                    <div className="topsection-menus__profile flex items-center gap-4 justify-end">
                        <p className='font-bold text-[color:#8BC53F]'>123782</p>
                        <img className='w-10' src="I2aj1w-leaf-photos.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="home__images relative">
                <svg className='absolute right-3' height="600" width="600" xmlns="http://www.w3.org/2000/svg">
                    <circle r="300" cx="300" cy="300" fill="#8BC53F" />
                </svg>
                <svg className='absolute right-3' height="600" width="600" xmlns="http://www.w3.org/2000/svg">
                    <circle r="200" cx="300" cy="300" fill="white" />
                </svg>
                <svg className='absolute right-3' height="600" width="600" xmlns="http://www.w3.org/2000/svg">
                    <circle r="125" cx="300" cy="300" fill="green" />
                </svg>
                <p className='absolute right-64 top-64 font-bold text-white text-6xl'>
                    {ecoPoint}/<br/>100
                </p>
            </div>

            <div className="home__left-text">
                <h1 className='font-bold text-4xl pt-52'>Daily EcoPoint target:</h1>
            </div>
        </div>

        <div className='m-10'>
            <h1 className='font-bold text-4xl text-center'>My activity today</h1>
            {activities.map((activity) => {
                return <Card activity={activity.title} point={activity.point}/>
            })}
            <button onClick={() => handleNewActivity()} className='bg-[color:#88C53F] text-white p-4 rounded-xl'>Insert New Activities +</button>
        </div>
    </>
  )
}
