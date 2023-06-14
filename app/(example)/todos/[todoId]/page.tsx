import React from "react";
import { notFound } from "next/navigation";

type Props = {
    params: {
        todoId: string;
    };
};

const fetchTodo = async (todoId: string) => {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId}`,
        {
            next: {
                revalidate: 10,
            },
        }
    );
    const todo: TodoType = await res.json();
    return todo;
};

async function TodoId({ params: { todoId } }: Props) {
    const todo = await fetchTodo(todoId);
    if (!todo.id) return notFound();

    return (
        <div className="space-y-2 border-4 border-blue-400 bg-slate-300 p-2">
            <div>Todo Id : {todoId}</div>
            <div>Todo Title : {todo.title}</div>
            <div className="border-t border-black py-2">
                Completed :
                {todo.completed ? <span> Yes</span> : <span> No</span>}
            </div>
        </div>
    );
}

export default TodoId;

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
    const todos: TodoType[] = await res.json();

    // splice first 10
    const trimmedTodos = todos.splice(0, 10);

    // [ { todoId: '1'}, {todoId: '2'}, ...{todoId: '200'}]
    return trimmedTodos.map((todo) => ({
        todoId: todo.id.toString(),
    }));
}
