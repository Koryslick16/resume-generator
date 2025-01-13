import React from 'react'

const ProgressBar = ({step, totalSteps}) => {
    const progress = (step/totalSteps) * 100;
  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        style={{ width: `${progress}%` }}
        className="bg-blue-600 h-4 rounded-full transition-all "
      ><p className='mt-4 text-blue-700'>LOL KOREDE MAMA</p></div>
    </div>
  )
}

export default ProgressBar
