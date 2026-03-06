import React from 'react'

function Promo() {
  return (
     <div className="h-full bg-linear-to-br from-purple-600 to-indigo-700 p-10 flex flex-col justify-center items-center text-white">

          <h2 className="text-2xl font-semibold mb-4 text-center">
            Effortlessly manage your focus sessions
          </h2>

          <p className="text-center text-purple-100 mb-8 max-w-sm">
            Track deep work, measure productivity and build unstoppable focus
            with FlowPilot.
          </p>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 w-full max-w-sm shadow-lg">
            <p className="text-sm opacity-80 mb-2">Today's Focus</p>
            <h3 className="text-3xl font-bold">4h 32m</h3>
            <div className="mt-4 h-2 bg-white/20 rounded-full">
              <div className="h-2 bg-white rounded-full w-3/4"></div>
            </div>
          </div>

        </div>
  )
}

export default Promo