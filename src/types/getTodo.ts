export interface getTodoTypes {
  isGetTodoLoading: boolean;
  todosData: IGetTodo[];
  isGetTodoError: string;
}

export interface IGetTodo {
  id: number;
  title: string;
  description: string;
  status: string;
}
