import { Routes, Route } from "react-router-dom"
import configRoute from "./configRoute"
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
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
      <ToastContainer />
    </>

  )
}

export default App