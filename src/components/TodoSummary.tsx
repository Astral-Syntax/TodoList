import { Todo } from "../types/todo";

interface TodoSummaryProps {
    todos: Todo[];
    deleteAllCompleted: () => void;
}

export default function TodoSummary({todos, deleteAllCompleted}: TodoSummaryProps) {
    const completedTodos = todos.filter(todo => todo.completed);

    return (
        <div className="text-center space-y-2">
            <p className="text-white text-sm font-medium">{completedTodos.length}/{todos.length} completed.</p>
            {completedTodos.length > 0 && (
                <button onClick={deleteAllCompleted} className="text-red-500 hover:underline text-sm">Delete all completed</button>
            )}
        </div>
    )
}