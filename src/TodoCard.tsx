import React from 'react';
import { Todo, TodoCardProps } from './Types';

const TodoCard: React.VFC<TodoCardProps> = ({ todo }: TodoCardProps) => (
  // const handleIsDoneCheck = (replaceTodo: (newTodo: Todo => any)) => {
  //   replaceTodo();
  // };
  <div className="flex flex-none w-2/6 mx-auto p-6 bg-yellow-500 rounded-xl shadowed-md items-center space-x-4 min-w-600">
    <div>
      <input type="checkbox" checked={todo.IsDone} />
    </div>
    <div className="w-400">
      <div className="text-xl font-medium text-black bg-green-200">
        {todo.Title}
      </div>
      <p className="text-gray-500 bg-green-500">{todo.Text}</p>
    </div>
  </div>
);
export default TodoCard;
