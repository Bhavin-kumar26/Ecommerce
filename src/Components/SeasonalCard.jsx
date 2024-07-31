import React from 'react'

const SeasonalCard = ({img,title}) => {
  return (
    <div className=' h-[60vh] relative  seasonalBox cursor-pointer rounded-lg'>
        <img className='-z-40 absolute w-full h-full object-cover  rounded-lg' src={img} alt="" />
        <h2 className='ses uppercase font-bold tracking-widest text-2xl absolute top-[14rem] right-16  opacity-0  '>{title}</h2>
    </div>
  )
}

export default SeasonalCard