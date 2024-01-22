import { useTodos } from '../store/Todos'
import {  useSearchParams } from 'react-router-dom';

const Todos = () =>{
    const {todos , toggleTodoAsCompleted , handleDeleteTodo} = useTodos();

    const [searchParams] = useSearchParams();
    const todosData = searchParams.get("todos");
    console.log("✏️ ~ file: todos.tsx:10 ~ Todos ~ todosData: ✏️" , todosData)

    let filterData = todos;

    if(todosData == "active"){
        filterData = filterData.filter((task)=> !task.completed )
    }

    if(todosData == "completed"){
        filterData = filterData.filter((task)=> task.completed )
    }



    return(
        <ul>
            {
                filterData.map((todo)=>{
                    return <li key={todo.id} className='border-b-2 p-2 font-bold text-lg w-full'>
                        <input type="checkbox" name='' id={`todo-${todo.id}`} 
                        checked={todo.completed}
                        onChange={()=> toggleTodoAsCompleted(todo.id)}
                        />
                        <label htmlFor={`todo-${todo.id}`}> {todo.task} </label>
                        {
                            todo.completed && (
                                // <button type='button' className=''
                                // onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                                <button type="button" onClick={()=>handleDeleteTodo(todo.id)} className="justify-end text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Delete</button>

                            )

                        }
                    </li>
                })
            }
        </ul>
    )
}

export default Todos;