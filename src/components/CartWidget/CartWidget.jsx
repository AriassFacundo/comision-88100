import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
  const { totalQuantity } = useCart()

  return (
    <Link to="/cart">
      🛒 {totalQuantity()}
    </Link>
  )
}

export default CartWidget
