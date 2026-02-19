import { useState } from "react"
import { useCart } from "../context/CartContext"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../service/Firebase"
import "./Checkout.css"

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart()

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [orderId, setOrderId] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const order = {
      buyer: { name, phone, email },
      items: cart,
      total: totalPrice(),
      date: serverTimestamp()
    }

    const ordersRef = collection(db, "orders")
    const docRef = await addDoc(ordersRef, order)

    setOrderId(docRef.id)
    clearCart()
  }

  if (orderId) {
    return (
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Gracias por tu compra</h2>
          <p>Tu número de orden es:</p>
          <strong>{orderId}</strong>
        </div>
      </div>
    )
  }

  return (
    <div className="checkout-container">
      <form className="checkout-form" onSubmit={handleSubmit}>
        <h2>Completar el siguiente Formulario</h2>

        <input
          type="text"
          placeholder="Nombre Completo"
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Teléfono"
          onChange={(e) => setPhone(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Confirmar compra</button>
      </form>
    </div>
  )
}

export default Checkout
