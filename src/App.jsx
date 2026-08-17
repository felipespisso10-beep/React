import { useState } from "react"
import AddTasks from "./components/AddTasks"
import Tasks from "./components/Tasks"

function App(){
  const [tasks, setasks] = useState([{
    id: 1,
    title: "Estudar programação",
    description:"Estudar programação",
    isCompleted:false,
  },
  {
    id: 2,
    title: "Estudar ingles",
    description:"Estudar ingles",
    isCompleted:false,
  },
  {
    id: 3,
    title: "Estudar matematica",
    description:"Estudar matematica",
    isCompleted:false,
  }])

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTasks />
        <Tasks tasks={tasks}/>
      </div>
    </div>
  )
}


export default App
