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
        <div
            className="min-h-screen bg-gradient-to-br from-fuchsia-950 from-50% via-0% to-rose-500 to-50% flex justify-center items-center">
            {/*<button onClick={addTask} className="bg-amber-50 p-4 rounded-md flex-">Add Task</button>*/}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden">
                <div className="h-1/5 bg-yellow-300 bg-cover bg-center p-4">
                    <h1 className="justify-end text-fuchsia-950 w-fit mx-auto p-2 pb-4">To-Do List</h1>
                    <div className="flex ">
                        <input
                            className="bg-transparent border-b border-fuchsia-950 placeholder-fuchsia-950 select focus:outline-none text-fuchsia-950 w-full"
                            placeholder="Hello World"/>
                        <button className="text-white rounded-full ml-2">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40"
                                 viewBox="0,0,256,256">
                                <g fill="#4c224a" >
                                    <g transform="scale(5.12,5.12)">
                                        <path
                                            d="M25,2c-12.683,0 -23,10.317 -23,23c0,12.683 10.317,23 23,23c12.683,0 23,-10.317 23,-23c0,-12.683 -10.317,-23 -23,-23zM37,26h-11v11h-2v-11h-11v-2h11v-11h2v11h11z"></path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="h-4/5 p-4">
                    <div>
                        <h2>
                            <span className="underline decoration-4 decoration-fuchsia-950 ">To</span>-Do
                        </h2>
                        <div>

                        </div>
                    </div>
                    <div>
                        <h2>
                            <span className="underline decoration-4 decoration-fuchsia-950 ">D</span>one
                        </h2>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
