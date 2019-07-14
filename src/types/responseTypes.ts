export interface task {
    id: number,
    title: string
}

export interface taskList {
    taskList: Array<task>
}

export interface responseTypes {
    data: taskList;
    length: number;
    success: boolean;
    error: string;
    id?:number;
    title?:string;
}
