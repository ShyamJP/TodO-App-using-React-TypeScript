import { FormEvent, useState } from "react"
import { useTodos } from "../store/Todos"

const AddTodo = () =>{
    // here i used context api
    const[todo , setTodo] = useState("")
    const {handleAddTodo} = useTodos()
    
    const handleFormdSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleAddTodo(todo);
        setTodo("")
    }
    return(
        <form onSubmit={handleFormdSubmit} className="flex font-bold border p-2 shadow-lg rounded-e-lg">  
            {/* <input type="text" className="border-2 border-gray-600 rounded-lg h-10 text-xl" value={todo} onChange={(e)=> setTodo(e.target.value)}/> */}
            <input type="text" id="first_name" value={todo} onChange={(e)=> setTodo(e.target.value)} className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="write your todo here.." required />

            {/* <button type="submit" className="bg-gray-600 text-white p-3 rounded">Add</button> */}
            <button type="submit" className="justify-end text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2 mt-0 text-center dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800 ml-2">Add</button>
        </form>
    )
}
export default AddTodo