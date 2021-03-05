export type Todo = {
  IsDone: boolean;
  Title: string;
  Text: string;
};

export type TodoCardProps = {
  todo: Todo;
};
