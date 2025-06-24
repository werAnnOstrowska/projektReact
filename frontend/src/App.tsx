
import './App.css'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import ReserveForm from './components/ShoppingCart/ReserveForm'


function App() {


  return (
    <div>
        <RouterProvider router={router} />
        <ReserveForm />
    </div>
  )
}

export default App
