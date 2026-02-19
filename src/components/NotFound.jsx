import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div style={{ 
      minHeight: "80vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center"
    }}>
      <h1>404</h1>
      <h2>Página no encontrada</h2>
      <p>La ruta que intentaste ingresar no existe.</p>

      <Link to="/">
        Volver al inicio
      </Link>
    </div>
  )
}

export default NotFound
