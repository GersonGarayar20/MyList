import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import Nota from './components/Nota'
import NuevaNota from './components/NuevaNota'
import { motion } from "framer-motion"
import DarkButton from './components/DarkButton'

const miLista = [
  {
    id: uuid(),
    content: "hola mundo",
    completed: false,
  },
]


function App() {
  const [todos, setTodos] = useState(miLista)
  const [active, setActive] = useState(true)

  const nuevaNota = (nota) => setTodos(prev => [...prev, nota])

  const eliminarNota = (id) => {
    const result = todos.filter(todo=> id !== todo.id)
    setTodos(result)
  }

  const marcar = (id) => {
    const marcados = todos.map(todo=>{
      if (todo.id === id) todo.completed = !todo.completed 
      
      return todo
    })
    setTodos(marcados)
  }

  const marcarTodos = ()=>{
    const marcados = todos.map(todo=> {

      active 
      ? todo.completed = true
      : todo.completed = false

      return todo
    })
    setActive(!active)
    setTodos(marcados)
  }

  const borrarMarcados = () => {
    const noMarcados = todos.filter(todo => !todo.completed)
    setActive(!active)
    setTodos(noMarcados)
  }

  const rename = (id, texto) => {
    const nuevoNombre = todos.map(todo=>{
      if(id=== todo.id) todo.content = texto
      
      return todo
    })
    setTodos(nuevoNombre)
  }

  return (
    <div className='h-screen dark:bg-slate-900 overflow-hidden'>
      <div className='flex justify-between items-center p-3'>
        <h1 className='text-2xl text-red-500 bg-slate-50 dark:bg-slate-900'>Superlist</h1>
        <DarkButton/>
      </div>
      <NuevaNota nuevaNota={nuevaNota} />
      <ul className='overflow-hidden bg-slate-50 dark:bg-slate-900'>
        {
          todos.map(({id, content, completed})=>(
            <Nota 
              key={id}
              id={id}
              completed={completed}
              content={content}
              eliminar={eliminarNota}
              marcar={marcar}
              rename={rename}
            />
          ))
        }
      </ul>
      <motion.div layout className=' flex gap-2 bg-slate-50 dark:bg-slate-900 p-2'>
        <button
        className={`transition-colors p-2 rounded-full w-10 ${active?"":"bg-slate-200 dark:bg-slate-700"}
        hover:bg-slate-200 dark:text-slate-50 dark:hover:bg-slate-700`}
        onClick={marcarTodos}>
          {
            active
            ? <i className="fa-regular fa-square"></i>
            : <i className="fa-solid fa-square-check"></i>
          }
        </button>
        <motion.button
        initial={{x:-100}}
        animate={active?{}:{x:0}}
        className='p-2 rounded-full w-10 hover:bg-slate-200 dark:text-slate-50 dark:hover:bg-slate-700'
        onClick={borrarMarcados}><i className="fa-solid fa-trash"></i></motion.button>
      </motion.div>
    </div>
  )
}

export default App
