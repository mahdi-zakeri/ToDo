import {iTask} from "../interfaces.ts";

type TaskItemProps = {
    task: iTask
    onDelete: (id: number) => void
}
export default function TaskItem({task, onDelete}: TaskItemProps) {
    return (
        <>
            <p>{task.name}</p>
            <button onClick={() => onDelete(task.id)}>
                te
            </button>
        </>

    );
}