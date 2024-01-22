import { ReactNode, createContext , useContext ,useState } from "react";
// three things in context api
// createContext
// provider
// consumer => useContext

// here i write type of childern for todoProvider
export type TodosProviderProps = {  
    children:ReactNode;
}

export type Todo = {
    id: string;
    task: string;
    completed:false;
    createdt:Date;
}
    // type of data for createcontext which we pass into provider , todos- array type [] , here we also mention we use function to handle todo call at submit
    export type TodosContext = {
        todos: Todo[];
        handleAddTodo: (task:string) => void;
        toggleTodoAsCompleted: (id: string) => void;
        handleDeleteTodo: (id:string) => void;
    }
export const todoContext = createContext<TodosContext | null>(null) // argument - which type data provide by contextapi

export const TodosProvider = ({children}: TodosProviderProps) =>{

    const[todos, setTodos] = useState<Todo[]>(()=>{
        try{
            const newTodos = localStorage.getItem("Todos") || "[]";
            return JSON.parse(newTodos) as Todo[];
        }catch(error){
            return [];
        }
    })

    const handleAddTodo = (task:string) =>{
        setTodos((prev)=>{ 
            const newTodos: Todo[] = [
                {
                    id: Math.random().toString(),
                    task: task,
                    completed: false,
                    createdt:new Date()
                },
                ...prev
            ]
            // console.log(newTodos)
            // console.log(prev)

            localStorage.setItem("Todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

    //mark completed
    const toggleTodoAsCompleted = (id:string) =>{
        setTodos((prev) => {
            const newTodos = prev.map((todo) =>{
                if(todo.id === id){
                    return { ...todo , completed: !todo.completed }
                }
                return todo;
            })
            localStorage.setItem("Todos", JSON.stringify(newTodos))
            return newTodos
        })
    }

    const handleDeleteTodo = (id:string) =>{
        setTodos((prev) =>{
            const newTodos = prev.filter((filteredtodo)=> filteredtodo.id != id)
            
            localStorage.setItem("Todos", JSON.stringify(newTodos))
            return newTodos
        }) 
    }
    return <todoContext.Provider value ={ {todos , handleAddTodo , toggleTodoAsCompleted , handleDeleteTodo }}>   
         {/* it is context component it wraps childern compoents and provide data*/}
        {children}
    </todoContext.Provider>
}

// consumer 
export const useTodos = () =>{
    const todosConsumer = useContext(todoContext);
    if(!todosConsumer){
        throw new Error("useTodos used outside of Provider");
    }
    return todosConsumer;
}