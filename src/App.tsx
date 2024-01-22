import Addtodo from './components/Addtodo'
import Todos from './components/todos'
import Navbar from './components/navbar'

const App = () => {
  return (
    <div className='text-slate-800 mb-5'>
      <div className='w-1/2 mx-auto border rounded-2xl bg-gray-200 shadow-xl p-5  mt-10 align-middle justify-center'>

      <h1 className='font-bold text-2xl text-center'>Todo App</h1>
        <Addtodo />
        <Navbar />
        <Todos />
    </div> 
    </div>
  )
}

export default App