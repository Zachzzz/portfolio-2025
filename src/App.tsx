import './App.css'
import {  RouterProvider } from '@tanstack/react-router'
import { router} from "./router/routes.tsx";







function App() {


  return (
    <>

        <RouterProvider router={router}/>
    </>
  )
}

export default App
