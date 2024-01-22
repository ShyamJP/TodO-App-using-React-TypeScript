// rafce
import {Link} from 'react-router-dom'

const navbar = () => {
  return (
    <div className=''>
      <nav className='mb-3 mt-3 mx-auto text-center font-bold '>
        <Link to="/" className='mx-1 border rounded-lg p-2 px-3'>All</Link>
        <Link to="/?todos=active" className='mx-1 border rounded-lg p-2 px-3'>Active</Link>
        <Link to="/?todos=completed" className='mx-1 border rounded-lg p-2 px-3'>Completed</Link>
    </nav>
    </div>
  )
}

export default navbar