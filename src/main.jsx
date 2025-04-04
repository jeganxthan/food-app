import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Recipe from "./components/Recipe.jsx";
const router = createBrowserRouter([
    { path: '/', element:<App/>},
    { path: '/recipe/:id', element:<Recipe /> },
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
