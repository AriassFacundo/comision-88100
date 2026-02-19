import { useEffect, useState } from "react"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../service/Firebase"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const { categoryId } = useParams()

  useEffect(() => {
    setLoading(true)

    const productsRef = collection(db, "productos")

    const q = categoryId
      ? query(productsRef, where("category", "==", categoryId))
      : productsRef

    getDocs(q)
      .then(res => {
        const list = res.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))
        setProducts(list)
      })
      .finally(() => setLoading(false))
  }, [categoryId])

  if (loading) return <h2>Cargando productos...</h2>

  return <ItemList products={products} />
}

export default ItemListContainer

