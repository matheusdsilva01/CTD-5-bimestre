import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import Formulario from "./components/Formulario";
import SolicitacaoContextProvider from "./context/contextoFormulario";
import "./App.css";

function App() {
  return (
    <div className="App">
      <SolicitacaoContextProvider>
        <Routes>
          <Route path="/" exact element={<Inicio />} />
          <Route path="/formularioEntrada" element={<Formulario />} />
        </Routes>
      </SolicitacaoContextProvider>
    </div>
  );
}

export default App;
