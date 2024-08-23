import useTodos from "./hooks/useTodos";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TodoSummary from "./components/TodoSummary";

function App() {
  const {
    todos,
    setTodoCompleted,
    addTodo,
    deleteTodo,
    deleteAllCompletedTodos
  } = useTodos();
  return (
    <main className="py-10 h-screen space-y-5 bg-slate-950 overflow-y-auto">
      <h1 className="font-bold text-3xl text-center text-white">Your Todos</h1>
      <div className="max-w-lg mx-auto bg-slate-600 rounded-md p-5 space-y-6">
        <AddTodoForm onSubmit={addTodo}/>
        <TodoList todos={todos} onCompletedChange={setTodoCompleted} onDelete={deleteTodo}/>
      </div>
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos}/>
    </main>
  )
}

export default App;