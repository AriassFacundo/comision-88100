import "./ItemList.css"
import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div className="product-grid">
{products.map((prod) => (
  <Item key={prod.id} product={prod} />
))}

    </div>
  )
}

export default ItemList
