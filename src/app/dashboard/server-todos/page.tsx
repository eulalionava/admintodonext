export const dynamic = 'force-dynamic';
export const revalidate = 0;


import prisma from "@/lib/prisma";
import { NewTodo } from "@/todos";
import { TodosGrid } from "@/todos/components/TodosGrid";

export const metadata = {
 title: 'Listado de Todos',
 description: 'Listado de Todos',
};

export default async function ServerTodosPage() {
  const todos = await prisma.todo.findMany({orderBy:{description:'asc'}});

  return (
    <>
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="mb-5">
        <NewTodo/>
      </div>
       
      <TodosGrid todos={todos}/>
    </>
  );
}