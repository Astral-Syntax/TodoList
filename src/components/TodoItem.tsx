import { Trash2 } from "lucide-react";
import { Todo } from "../types/todo"

interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
    onDelete: (id: number) => void;
}

export default function TodoItem({todo, onCompletedChange, onDelete}: TodoItemProps) {
    return(
        <div className="flex items-center gap-1">
            <label className="flex items-center gap-2 border rounded-md p-2 border-grey-400 bg-slate-600 hover:bg-slate-400 text-white grow">
                <input type="checkbox" checked={todo.completed} onChange={(e) => onCompletedChange(todo.id, e.target.checked)} className="scale-125"/>
                <span className={todo.completed ? "line-through text-grey-400" : ""}> {todo.title} </span>
            </label>
            <button onClick={() => onDelete(todo.id)} className="p-2">
                <Trash2 size={20} className="text-white"/>
            </button>
        </div>
    )
}