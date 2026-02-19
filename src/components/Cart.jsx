import "./Cart.css"
import { useCart } from "../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
  const { cart, removeItem, clearCart, totalPrice } = useCart()

  if (cart.length === 0) {
    return (
      <div>
        <h2>El carrito está vacío</h2>
        <Link to="/">Ver productos</Link>
      </div>
    )
  }

  return (
    <div>
      <h2>Tu carrito</h2>

      {cart.map(prod => (
        <div key={prod.id} className="cart-item">
          <h4>{prod.name}</h4>
          <p>Cantidad: {prod.quantity}</p>
          <p>Precio: ${prod.price}</p>
          <button onClick={() => removeItem(prod.id)}>Eliminar</button>
        </div>
      ))}

      <h3>Total: ${totalPrice()}</h3>

      <button onClick={clearCart}>Vaciar carrito</button>

      <Link to="/checkout">Finalizar compra</Link>
    </div>
  )
}

export default Cart
