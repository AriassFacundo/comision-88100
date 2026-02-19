import { NavLink } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.css"
import logo from "../../assets/logo.png"


const NavBar = () => {
  return (
    <nav>

<NavLink to="/">
  <img src={logo} alt="logo" className="logo" width={60} />
</NavLink>


<NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
  INICIO
</NavLink>

<NavLink to="/category/ofertas" className={({ isActive }) => isActive ? "active" : ""}>
  OFERTAS
</NavLink>

<NavLink to="/category/catalogo" className={({ isActive }) => isActive ? "active" : ""}>
  CATÁLOGO
</NavLink>
      <CartWidget />
    </nav>
  )
}

export default NavBar
