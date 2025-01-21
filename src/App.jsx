import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { CartProvider } from "./components/CartContext/CartContext"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import NotFound from "./components/NotFound/NotFound"

const App = () => {
  return (
    <CartProvider>
      <Router>
        <NavBar />
        <div className="container mt-5 pt-4">
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer greeting="Nuevos Productos" />}
            />
            <Route
              path="/category/:id"
              element={<ItemListContainer greeting="Productos por categoría" />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App