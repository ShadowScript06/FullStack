import React from 'react'

function Footer() {
  return (
   <footer className="border-t border-white/10 mt-20">
  <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center gap-6">

    {/* Logo */}
    <div className="text-purple-400 font-bold text-xl">
      FlowPilot
    </div>

   

    {/* Copyright */}
    <div className="text-gray-500 text-sm">
      © {new Date().getFullYear()} FlowPilot. All rights reserved.
    </div>

  </div>
</footer>
  )
}

export default Footer