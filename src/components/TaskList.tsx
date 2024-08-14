import {iTask} from "../interfaces.ts";
import TaskItem from "./TaskItem.tsx";
type TaskListProps = {
    tasks: iTask[]
    onDelete: (id: number) => void
}

function TaskList({tasks, onDelete}: TaskListProps) {
    return (
        <div>
            {tasks.map((task: iTask) => (
                <TaskItem task={task} onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default TaskList;