import React,{ useState } from 'react'
import { motion } from "framer-motion"

export default function DarkButton() {

  const [active, setActive] = useState(false)

  const handleClick = () => {

    document.documentElement.classList.toggle('dark')
    setActive(!active)

  }


  return (
    <div className='flex items-center'>
      <motion.button
        className='text-slate-200 hover:text-slate-50'
        initial={{x:200}}
        animate={active?{x:0}:{}}
        onClick={handleClick}>
        <i className="fa-solid fa-sun"></i>
      </motion.button>

      <motion.button
        className='hover:text-slate-500'
        initial={{x:200}}
        animate={active?{}:{x:-10}}
        onClick={handleClick}>
        <i className="fa-solid fa-moon"></i>
      </motion.button>
      
    </div>
  )
}
