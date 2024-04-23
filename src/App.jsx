/*import React from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Products from './pages/Products'
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Company from "./pages/Company"
import ButtonWsp from './components/ButtonWsp'
import Footer from "./components/Footer"



function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Home />
      <Company />
      <Products />
      <Contact />
      <ButtonWsp />
      <Footer />
    </div>
  )
}

export default App
*/


import React from "react"
import Header from "./components/Header"
import Banner from "./components/Banner"
import Products from './pages/Products'
import Contact from "./pages/Contact"
import ButtonWsp from './components/ButtonWsp'
import Footer from "./components/Footer"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
  } from 'react-router-dom'
import Company from './pages/Company'
import Home from './pages/Home'

  const Layout = () => {
    return(
      <div>
        <Header />
        <Banner />
        <ScrollRestoration />
        <Outlet />
        <ButtonWsp />
        <Footer />
      </div>
    )
  }

const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children: [
      {
        path:"/",
        element: <Home />,
      },
      {
        path:"/empresa",
        element: <Company />,
      },
      {
        path:"/productos",
        element: <Products />,
      },
      {
        path:"/contacto",
        element:<Contact />,
      }
    ],
  },
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
