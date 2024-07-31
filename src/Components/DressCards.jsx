import React from 'react'
// import image1 from '../assets/image1.png'
// import image3 from '../assets/image3.png'
// import image4 from '../assets/image4.png'
const DressCards = ({img0}) => {
  return (
    <div className=' flex flex-col gap-5'>
        <img className=' w-[100px] lg:w-[70px] h-[100px] object-cover cursor-pointer rounded' src={img0} alt="" />
    </div>
  )
}

export default DressCards