import "./ItemDetail.css"
import { useState } from "react"
import ItemCount from "./ItemCount"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

const ItemDetail = (product) => {
  const { addItem } = useCart()
  const [added, setAdded] = useState(false)

  const handleAdd = (quantity) => {
    addItem(product, quantity)
    setAdded(true)
  }

return (
  <div className="detail-container">
    <div className="detail-card">

      <img src={product.image} alt={product.name} />

      <div className="detail-info">
        <h2>{product.name}</h2>
        <p>${product.price}</p>

        {added ? (
          <Link to="/cart">Ir al carrito</Link>
        ) : (
          <ItemCount stock={product.stock} onAdd={handleAdd} />
        )}
      </div>

    </div>
  </div>
)


}

export default ItemDetail
