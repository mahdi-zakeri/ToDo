export interface iTask {
    id: number;
    name: string;
    status: number;
}

export interface iTaskList {
    tasks: iTask[];
}