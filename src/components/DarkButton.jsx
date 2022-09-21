import { useState, useEffect } from 'react'
import { motion } from "framer-motion"

export default function DarkButton() {

  const [active, setActive] = useState(false)


  useEffect(()=>{

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
      setActive(true)
    } else {
      document.documentElement.classList.remove('dark')
      setActive(false)
    }

  },[])


  const handleClick = () => {

    document.documentElement.classList.toggle('dark')

    active
    ? localStorage.theme = 'light'
    : localStorage.theme = 'dark'

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
