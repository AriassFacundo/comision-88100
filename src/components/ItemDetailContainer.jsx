import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../service/Firebase"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null)
  const { itemId } = useParams()

  useEffect(() => {
    const docRef = doc(db, "productos", itemId)

    getDoc(docRef).then(res => {
      setProduct({ id: res.id, ...res.data() })
    })
  }, [itemId])

  if (!product) return <h2>Cargando detalle...</h2>

  return <ItemDetail {...product} />
}

export default ItemDetailContainer
