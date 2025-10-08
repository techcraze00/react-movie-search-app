import React from 'react'

const Spinners = () => {
  return (
 
    <div class="flex flex-row gap-2">
        <div class="w-3 h-3 rounded-full bg-indigo-300 animate-bounce [animation-delay:.7s]"></div>
        <div class="w-3 h-3 rounded-full bg-indigo-500 animate-bounce [animation-delay:.3s]"></div>
        <div class="w-3 h-3 rounded-full bg-indigo-700 animate-bounce [animation-delay:.7s]"></div>
    </div>
    // <div className="flex flex-col items-center justify-center p-4">
    //   <div className="w-48 h-48 relative">
    //     {/* TV */}
    //     <div className="absolute bottom-0 right-0 w-20 h-16 bg-gray-300 rounded-md flex items-center justify-center">
    //       <div className="w-16 h-12 bg-gray-800 rounded-sm animate-tv-glow"></div>
    //       <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-400 -rotate-45"></div>
    //       <div className="absolute top-[-4px] left-1/2 -translate-x-1/2 w-1 h-3 bg-gray-400 rotate-45"></div>
    //     </div>

    //     {/* Shelf */}
    //     <div className="absolute bottom-4 left-0 w-24 h-2 bg-gray-300"></div>
    //     <div className="absolute bottom-4 left-2 flex items-end h-12">
    //       {/* Static DVDs */}
    //       <div className="w-2 h-8 bg-blue-400 mx-px"></div>
    //       <div className="w-2 h-10 bg-red-400 mx-px"></div>
    //       <div className="w-2 h-6 bg-yellow-400 mx-px"></div>
    //       <div className="w-2 h-9 bg-green-400 mx-px"></div>
    //       {/* Animated DVD - this is the one that moves */}
    //       <div className="w-2 h-8 bg-purple-400 mx-px animate-grab-and-move"></div>
    //       <div className="w-2 h-7 bg-indigo-400 mx-px"></div>
    //     </div>

    //     {/* Boy */}
    //     <div className="absolute bottom-0 left-12 w-10 h-20">
    //       {/* Head */}
    //       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-8 bg-gray-700 rounded-full animate-subtle-head-scan"></div>
    //       {/* Body */}
    //       <div className="absolute top-7 left-1/2 -translate-x-1/2 w-2 h-10 bg-gray-700"></div>
    //       {/* Legs */}
    //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-5 bg-gray-700 -rotate-12"></div>
    //       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-5 bg-gray-700 rotate-12"></div>
    //     </div>
    //   </div>
    //   <p className="mt-4 text-gray-600">Loading movies...</p>
    // </div>
  )
}

export default Spinners