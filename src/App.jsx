import { Routes, Route } from "react-router-dom"
import configRoute from "./configRoute"

const App = () => {
  return (
    <Routes>
      {/* Template method */}
      {/* Iterador */}
      {configRoute.map((ruta, i) => (
        <Route
          key={i}
          path={ruta.path}
          element={<ruta.page />}
        ></Route>
      ))}
    </Routes>
  )
}

export default App