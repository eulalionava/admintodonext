import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

export default async function RestTodosPage() {
  const todos = await prisma.todo.findMany({orderBy:{description:'asc'}});

  return (
    <div>
      <div className="mb-5">
        <NewTodo/>
      </div>
       
      <TodosGrid todos={todos}/>
    </div>
  );
}