import React from 'react'

export default function Card({activity, point}) {
  return (
    <div className="card bg-gray-300 p-8 rounded-xl m-10 flex justify-around">
        <p>{activity}</p>
        <p>{point}</p>
    </div>
  )
}
