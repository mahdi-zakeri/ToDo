import './App.css'
import {useState} from "react";
import Task from "./components/Task.tsx";
type Task = {
    id: number;
    name: string;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([])

    function addTask() {
        setTasks((prev) => {
            const task: Task = {
                id: 2,
                name: "test"
            }

            return [...prev, task];
        })
    }


    return (
      <div className="h-screen bg-gradient-to-br from-fuchsia-950 from-50% via-0% to-rose-500 to-50% flex justify-center items-center ">
          <button onClick={addTask} className="bg-amber-50 p-4 rounded-md flex-">Add Task</button>
          {tasks.map((task: Task) => (
              <p id="font">
                  {task.name}
              </p>
          ))}
      </div>
  )
}

export default App
