import React from 'react'
import { useState } from 'react'
import { motion } from "framer-motion"

function Boton({children, evento, inicial=0, active}) {
  return(
    <motion.button 
    initial={{x:inicial}}
    animate={active?{x:0}:{}}
    whileTap={{scale:0.90}}
    onClick={evento} 
    className="p-2 hover:text-slate-700 text-slate-500 dark:hover:text-slate-300 w-10 ">
      {children}
    </motion.button>
  )
}


export default function Nota({id, completed, content, eliminar, marcar, rename}) {

  const [active, setActive] = useState(false)
  const [texto, setTexto] = useState("")
  const [borrar, setBorrar] = useState(false)


  const handleEliminar = () => {
    setBorrar(true)
    setTimeout(() => {
      eliminar(id)
    }, 200);
  }

  const handleMarcar = () => marcar(id)

  const handleClick = () =>{
    setTexto(content)
    setActive(!active)
  }
  
  const handleChange = (e) => setTexto(e.target.value)

  const handleNombre = () => {
    rename(id, texto)
    setActive(!active)
  }


  return (
    <motion.li
    layout
    animate={borrar?{x:1000}:{}}
    transition={{duration:0.2}}
    className='hover:shadow-md dark:hover:shadow-slate-800 m-2 bg-slate-50 dark:bg-slate-900 flex justify-between gap-2'>
      <div className='flex items-center w-4/5'>
        <input className='m-2' type="checkbox" onChange={handleMarcar} checked={completed}/>
        {
          active
          ? <input className='bg-sky-100 dark:text-slate-900 p-2 rounded-full w-full' type="text" onChange={handleChange} value={texto}/>
          : <p className='p-2 overflow-hidden break-words dark:text-slate-50'>{content}</p>
        }
      </div>
      <div className='flex flex-grow justify-end overflow-hidden'>
        <Boton
        inicial={200}
        active={active}
        evento={handleNombre}><i className="fa-solid fa-check"></i></Boton>
        <Boton evento={handleClick}>
          {
            active
            ? <i className="fa-solid fa-xmark"></i>
            : <i className="fa-solid fa-pen"></i>
          }
        </Boton>
        <Boton evento={handleEliminar}><i className="fa-solid fa-trash"></i></Boton>
      </div>
    </motion.li>
  )
}
