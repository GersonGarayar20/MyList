import { useState } from 'react'
import { useRef } from 'react'
import { v4 as uuid } from 'uuid'
import { motion } from "framer-motion"

export default function NuevaNota({nuevaNota}) {

  const [active, setActive] = useState(false)

  const input = useRef()

  const HandleCrearNota = (e) => {
    e.preventDefault()

    const texto = input.current.value
    
    const nota = {
      id: uuid(),
      content: texto,
      completed: false,
    }

    nuevaNota(nota)

    input.current.value = ""
    setActive(!active)
  }

  return (
    <div className='flex gap-2 bg-slate-100 dark:bg-slate-800 p-2'>
  
      <motion.form
      initial={{x:-250}}
      animate={active ?{x:0}:{}}
      className={`flex gap-2`} onSubmit={HandleCrearNota}>
        <input ref={input} 
        className='bg-slate-200 dark:bg-slate-700 dark:text-slate-50 p-2 rounded-full outline-sky-400' type="text" required/>
        <motion.button 
        transition={{duration:0.2}}
        whileTap={{scale:0.90}}
        className='p-2 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-100 w-10 rounded-full' type='submit'><i className="fa-solid fa-check"></i></motion.button>
      </motion.form>
      

      <motion.button
      initial={{x:-240}}
      animate={active ?{x:0}:{}}
      transition={{duration:0.2}}
      whileTap={{scale:0.90}}
      className={`p-2 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-100 ${active ? "w-10":"w-40"} rounded-full`} onClick={()=>setActive(!active)}>
        {
          active
          ? <span><i className="fa-solid fa-arrow-left"></i></span>
          : <span><i className="fa-solid fa-plus pr-2"></i>Nueva nota</span>
        }
      </motion.button>
    </div>
  )
}
